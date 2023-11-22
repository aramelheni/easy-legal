import { Container, Card, Row, Col } from "react-bootstrap";
import "./DayCard.css"
import TaskItem from "./task_item/TaskItem";

export default function DayCard({ today, day }) {
    //Checks whether or not a given day is today
    const isToday = (day) =>
        day.index === today.index &&
        day.month === today.month &&
        day.year === today.year;

    return (
        <div key={day.index} className="card" border={(isToday(day) ? "primary" : "")}>
            <Card.Title className="text-center" style={{ fontFamily: "mying" }}>{day.index}</Card.Title>
            <Card.Subtitle className="text-center mb-2 text-muted" style={{ fontFamily: "mying" }}>{day.day}</Card.Subtitle>
            <div className="tasks">
                {
                    day.tasks.map(task => (
                        <TaskItem task={task} />
                    ))
                }
            </div>
        </div>

    );
}