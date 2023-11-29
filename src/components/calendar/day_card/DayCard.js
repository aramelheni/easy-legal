import "./DayCard.css"
import TaskItem from "./task_item/TaskItem";

export default function DayCard({ today, day, tasks, selectDay }) {
    //Checks whether or not a given day is today
    const isToday = (day) =>
        day.index === today.index &&
        day.month === today.month &&
        day.year === today.year;

    const handleSelectDay = ()=>{
        selectDay(day);
    }

    return (
        <button key={day.index} className={"day-card"+ (isToday(day) ? " day-card-today" : "")} onClick={handleSelectDay}>
            <h1 className="day-card-index">{day.index}</h1>
            <p className="day-card-day">{day.day}</p>
            <div className="day-card-tasks">
                {
                    tasks.map(task => (
                        <TaskItem task={task} />
                    ))
                }
            </div>
        </button>

    );
}