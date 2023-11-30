import "./TaskItem.css"
import { formatTime } from "../../../../dateUtilities";

export default function TaskItem({ task }) {
    const handleSelect = (event) => {
        event.stopPropagation();
    }

    return (
        <div class="calendar-task-item" onClick={handleSelect}>
            <p className="calendar-task-time">{formatTime(task.date)}</p>
            <p className="calendar-task-title">{task.title}</p>
        </div>
    );
}