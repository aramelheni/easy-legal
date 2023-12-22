import "./DayCard.css"
import TaskItem from "./task_item/TaskItem";

export default function DayCard({ today, calendarDay, selectDay, onSelectTask}) {
    //Checks whether or not a given day is today
    const isToday = (day) =>
        day.index === today.index &&
        day.month === today.month &&
        day.year === today.year;

    const handleSelectDay = () => {
        selectDay(calendarDay.day);
    }

    return (
        <button
            key={calendarDay.day.index}
            className={"day-card" + (isToday(calendarDay.day) ? " day-card-today" : "")}
            onClick={handleSelectDay}
        >
            <h1 className="day-card-index">{calendarDay.day.index}</h1>
            <p className="day-card-day">{calendarDay.day.day}</p>
            <div className="day-card-tasks">
                {
                    calendarDay.tasks.map((task, index) => (
                        <TaskItem key={index} task={task} onSelectTask={onSelectTask} />
                    ))
                }
            </div>
        </button>

    );
}