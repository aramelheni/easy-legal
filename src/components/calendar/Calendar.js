import './Calendar.css'
import { useState } from 'react';
import axios from 'axios';

import { sentences } from './TestingData.js';
import DayCard from './day_card/DayCard.js';
import NewTask from './new_task/NewTask.js';
import { useEffect } from 'react';

function GetRandomTask(id) {
    return ({
        id,
        title: sentences[Math.floor(Math.random() * sentences.length)],
        day: Math.floor(Math.random() * 31),
        month: 10,
        status: Math.random() < 0.5
    });
}

function GetCalendarForMonth(month, year) {
    const days = [];

    //When given 0 as a value for the argument "day", it returns the index of the last day of that month
    const nDays = new Date(year, month + 1, 0).getDate();
    for (let index = 1; index <= nDays; index++) {
        const date = new Date(year, month, index);
        const dayObj = {
            //date: date,
            index,
            day: date.toLocaleDateString('en-US', { weekday: 'long' }),
            month: month,
            year: year
        };
        days.push(dayObj);
    }

    return days;
}

export default function Calendar() {
    useEffect(async () => {
        
    }, []);

    //Used for guessing the month's name using the month's index
    var monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    //Memorize information about today's date
    const todayDate = new Date();
    const today = {
        index: todayDate.getDate(),
        month: todayDate.getMonth(),
        year: todayDate.getFullYear()
    }

    //The year and month of the displayed calendar
    const [month, setMonth] = useState(today.month);
    const [year, setYear] = useState(today.year);

    //List full of days and their data
    const [days, setDays] = useState(GetCalendarForMonth(month, year));
    //The day selected by the user
    const [selectedDay, setSelectedDay] = useState(null);

    //Buttons handlers
    const nextMonth_handle = () => {
        let newMonth = month;
        let newYear = year;

        if (month < 11) {
            newMonth++;
        } else {
            newMonth = 0;
            newYear++;
        }

        setMonth(newMonth);
        if (year !== newYear)
            setYear(newYear);

        setDays(GetCalendarForMonth(newMonth, newYear));
    }
    const previousMonth_handle = () => {
        let newMonth = month;
        let newYear = year;

        if (month > 0) {
            newMonth--;
        } else {
            newMonth = 11;
            newYear--;
        }

        setMonth(newMonth);
        if (year !== newYear)
            setYear(year - 1);

        setDays(GetCalendarForMonth(newMonth, newYear));
    }

    //Indicates whether or not is creating a new task
    const [isCreatingTask, setIsCreatingTask] = useState(false);
    const handleSelectDay = (day) => {
        setSelectedDay(day);
        setIsCreatingTask(true);
    }
    const terminateCreateTask = () => {
        setIsCreatingTask(false);
    }

    return (
        <div className="calendar">
            {(isCreatingTask && selectedDay != null) && <NewTask day={selectedDay} terminateCreateTask={terminateCreateTask} />}
            <div className="calendar-header">
                <h1 id="year">{year}</h1>
                <button className="arrow-button" onClick={previousMonth_handle}>{"<"}</button>
                <h1 id="month">{monthNames[month]}</h1>
                <button className="arrow-button" onClick={nextMonth_handle}>{">"}</button>
            </div>
            <div id="days-container">
                {
                    days.map((day) => (
                        <DayCard today={today} day={day} tasks={[]} selectDay={handleSelectDay} />
                    ))
                }
            </div>
        </div>);
}