import "./TaskItem.css"
import { formatTime } from "../../../../dateUtilities";

export default function TaskItem({ task, onSelectTask }) {
    const handleSelect = (event) => {
        event.stopPropagation();
        onSelectTask(task);
    }

    return (
        <div className="calendar-task-item" onClick={handleSelect}>
            <p className="calendar-task-time">{formatTime(task.date)}</p>
            <p className="calendar-task-title">{task.title}</p>
        </div>
    );
}