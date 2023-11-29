import { Container, Row, Col } from "react-bootstrap";
import "./TaskItem.css"

export default function TaskItem({ task }) {
    return (
        <div class="calendar-task-item">
            <p className="calendar-task-time">4PM</p>
            <p className="calendar-task-title">{task.title}</p>
        </div>
    );
}