import "./NewTask.css"
import DatePicker from 'react-datepicker';
import axios from 'axios';
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import InputText from "../../form/InputText";
import InputTextArea from "../../form/InputTextArea";
import ModalForm from "../../form/ModalForm";
import apiUrl from "../../../apiConfig.js"

export default function NewTask({ day, terminateCreateTask }) {
    const [task, setTask] = useState({
        id: "",
        date: new Date(day.year, day.month, day.index, 0, 0),
        title: "",
        description: "",
        category: ""
    });
    const [time, setTime] = useState(null);
    const [submissionError, setSubmissionError] = useState("");

    //Time
    const handleTimeChange = (newTime) => {
        setTime(newTime);
        const hours = newTime.getHours() + 1;
        const minutes = newTime.getMinutes();
        setTask({ ...task, date: new Date(day.year, day.month, day.index, hours, minutes) });
    };

    //Category
    const categories = ["Meeting", "Payment", "Board", "Custom"];
    const handleCategoryChange = (e) => {
        setTask({ ...task, category: e.target.value });
    };

    //Title
    const [isTitleValid, setTitleValid] = useState(false);
    const [titleError, setTitleError] = useState(null);
    const handleTitleChange = (title) => {
        setTask({ ...task, title: title });
        if (titleError !== null)
            setTitleError(null);
    }

    const checkTitleValid = () => {
        if (task.title.length < 3) {
            setTitleValid(false);
            setTitleError("Title must contain at least 3 characters");
            return false;
        }

        setTitleValid(true);
        return true;
    }

    //Description
    const handleDescriptionChange = description => {
        setTask({ ...task, description: description });
    }

    //Create Task
    const handleCreateTask = (event) => {
        event.preventDefault();
        setSubmissionError("");

        if (!checkTitleValid())
            return;

        setIsLoading(true);
        postTask();
    }

    //Cancel Creation
    const handleCancelCreate = () => {
        terminateCreateTask();
    }

    //Server request
    const [isLoading, setIsLoading] = useState(false);
    const postTask = () => {
        axios.post(apiUrl + "/tasks/addOne", task)
            .then(response => {
                setIsLoading(false);
                if (response.status === 200)
                    terminateCreateTask();
            })
            .catch(error => {
                setSubmissionError(error.message);
                setIsLoading(false);
            });
    }

    return (
        <ModalForm header="Create a new task"
            muted={day.index + " / " + day.month + " / " + day.year + " (" + day.day + ")"}
            onClose={handleCancelCreate}
            isLoading={isLoading}
            submissionError={submissionError}
        >
            <label>Give your task a title:</label>
            <InputText
                type="text"
                placeholder="Title"
                onChange={handleTitleChange}
                errorMessage={titleError}
            />

            <label>Add a description:</label>
            <InputTextArea
                placeholder="Description"
                value={task.description}
                onChange={handleDescriptionChange}
            />

            <label>Time:</label>
            <DatePicker
                selected={time}
                onChange={handleTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="HH:mm"
            />
            <label>Category:</label>
            <select value={task.category} onChange={handleCategoryChange}>
                {
                    categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))
                }
            </select>
            <button className="modalform-submit" type="submit" onClick={handleCreateTask}>Create Task</button>
        </ModalForm>
    );
}