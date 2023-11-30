import './Calendar.css'
import { useState } from 'react';
import axios from 'axios';
import apiUrl from "../../apiConfig.js"

import Loader from "../loader/Loader";
import DayCard from './day_card/DayCard.js';
import NewTask from './new_task/NewTask.js';
import { useEffect } from 'react';

async function fetchTasks(fromDate, toDate) {
    let tasks;
    await axios.get(apiUrl + "/tasks/" + fromDate.toISOString() + "/" + toDate.toISOString())
        .then(response => {
            tasks = response.data.tasks;
            tasks.forEach(task => {
                task.date = new Date(task.date);
            })
        })
        .catch(error => {
            console.log("Error fetching tasks: ", error);
            return null;
        });
    return tasks;
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
    //When true, displays a black loading overlay 
    const [isLoading, setIsLoading] = useState(false);

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

    //The day selected by the user
    const [selectedDay, setSelectedDay] = useState(null);

    //List full of objects, each containing a day and a list of tasks
    const [calendarDays, setCalendarDays] = useState([]);
    const setCalendar = async (newMonth, newYear) => {
        setIsLoading(true);

        if (month != newMonth)
            setMonth(newMonth);
        if (year != newYear)
            setYear(newYear);

        //Fetch days for that month
        const newDays = GetCalendarForMonth(newMonth, newYear);
        let newCalendarDays = [];
        newDays.forEach(day => {
            newCalendarDays.push({
                day,
                tasks: []
            })
        })

        //Fetch tasks
        let tasks = await fetchTasks(new Date(newYear, newMonth, 1), new Date(newYear, newMonth+1, 0));
        if (tasks != null) {
            tasks.forEach(task => {
                const dayIndex = task.date.getDate();
                newCalendarDays.forEach(calendarDay => {
                    if (calendarDay.day.index == dayIndex) {
                        calendarDay.tasks.push(task);
                    }
                });
            });

        }

        setIsLoading(false);
        setCalendarDays(newCalendarDays);
    }

    //Categories
    const [taskCategories, setTaskCategories] = useState(null);

    useEffect(() => {
        const setup = async () => {
            //Fetch categories from the server
            setIsLoading(true);
            let areCategoriesFetched = false;
            const fetchCategories = async () => {
                axios.get(apiUrl + "/task-categories").then(response => {
                    setTaskCategories(response.data.categories);
                    areCategoriesFetched = true;
                }).catch(error => {
                    console.log("Could not fetch task categories: ", error);
                });
            }
            await fetchCategories();
            setIsLoading(false);

            //Fill up the calendar
            setCalendar(today.month, today.year);
        }

        setup();
    }, []);

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

        setCalendar(newMonth, newYear);
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

        setCalendar(newMonth, newYear);
    }

    //Indicates whether or not is creating a new task
    const [isCreatingTask, setIsCreatingTask] = useState(false);
    const handleSelectDay = (day) => {
        setSelectedDay(day);
        setIsCreatingTask(true);
    }
    const onTaskCreationCanceled = () => {
        setIsCreatingTask(false);
    }
    const onTaskCreationSucceeded = (task) => {
        setCalendarDays(calendarDays.map(calendarDay => {
            if (calendarDay.day.index == task.date.getDate() && calendarDay.day.month == task.date.getMonth() && task.date.getFullYear() == calendarDay.day.year) {
                return { ...calendarDay, tasks: [...calendarDay.tasks, task] };
            }
            return calendarDay;
        }));
        setIsCreatingTask(false);
    }

    return (
        <div className="calendar">
            {isLoading && <Loader />}

            {(isCreatingTask && selectedDay != null) &&
                <NewTask
                    day={selectedDay}
                    onTaskCreationCanceled={onTaskCreationCanceled}
                    onTaskCreationSucceeded={onTaskCreationSucceeded}
                    taskCategories={taskCategories}
                />
            }
            <div className="calendar-header">
                <h1 id="year">{year}</h1>
                <button className="arrow-button" onClick={previousMonth_handle}>{"<"}</button>
                <h1 id="month">{monthNames[month]}</h1>
                <button className="arrow-button" onClick={nextMonth_handle}>{">"}</button>
            </div>
            <div id="days-container">
                {
                    calendarDays.map((calendarDay, i) => (
                        <DayCard key={i} today={today} calendarDay={calendarDay} tasks={[]} selectDay={handleSelectDay} />
                    ))
                }
            </div>
        </div>);
}