import { Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import './Calendar.css'

import { sentences } from './TestingData.js';
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
        //Generate random tasks
        const tasks = [];
        if (Math.random() > 0.5) {
            const nTasks = Math.floor(Math.random() * 4);
            for (let i = 0; i < nTasks; i++) {
                tasks.push(GetRandomTask(i));
            }
        }
        const dayObj = {
            //date: date,
            index,
            day: date.toLocaleDateString('en-US', { weekday: 'long' }),
            month: month,
            year: year,
            tasks
        };
        console.log("index: " + index + " : " + dayObj.day);
        days.push(dayObj);
    }

    return days;
}

export default function Calendar() {
    //Used for guessing the month's name using the month's index
    var monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    //Memorize information about today's date
    const today = new Date();
    const todayIndex = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    //The year and month of the displayed calendar
    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getFullYear());

    //List full of days and their data
    const [days, setDays] = useState(GetCalendarForMonth(month, year));

    //Checks whether or not a given day is today
    const isToday = (dayObject) =>
        dayObject.index === todayIndex &&
        dayObject.month === todayMonth &&
        dayObject.year === todayYear;
    console.log(new Date(2023, 10, 19).toLocaleDateString('en-US', { weekday: 'long' }));

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

    return (
        <div id="calendar">
            <div id="header">
                <button className="arrow-button" onClick={previousMonth_handle}>{"<"}</button>
                <h1 id="month">{monthNames[month]}</h1>
                <button className="arrow-button" onClick={nextMonth_handle}>{">"}</button>
                <h1 id="year">{year}</h1>
            </div>
            <div id="days-container">
                {
                    days.map((dayObj) => (
                        <div key={dayObj.index} className="day-card-body" border={(isToday(dayObj) ? "primary" : "")}>
                            <Card.Title className="text-center" style={{ fontFamily: "mying" }}>{dayObj.index}</Card.Title>
                            <Card.Subtitle className="text-center mb-2 text-muted" style={{ fontFamily: "mying" }}>{dayObj.day}</Card.Subtitle>
                            <div className="day-card-tasks">
                                {
                                    dayObj.tasks.map(task => (
                                        <Container key={task.id} className="task-panel" >
                                            <Row>
                                                <Col lg="2">
                                                    <p className="task-panel-time">4PM</p>
                                                </Col>
                                                <Col>
                                                    <p className="task-panel-title">{task.title}</p>
                                                </Col>
                                            </Row>
                                        </Container>
                                    ))
                                }
                            </div>
                        </div>
                    ))}
            </div>
        </div>);
}