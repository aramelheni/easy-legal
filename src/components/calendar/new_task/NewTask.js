import "./NewTask.css"
import DatePicker from 'react-datepicker';
import axios from 'axios';
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';
import apiUrl from "../../../apiConfig.js"
import ModalForm from "../../utilities/form/ModalForm.js";
import InputText from "../../utilities/form/InputText.js";
import InputTextArea from "../../utilities/form/InputTextArea.js";

export default function NewTask({ day, taskCategories, onTaskCreationCanceled, onTaskCreationSucceeded }) {
    const now = new Date();

    const [task, setTask] = useState({
        id: "",
        date: new Date(day.year, day.month, day.index, now.getHours() + 1, 0),
        title: "",
        description: null,
        category: taskCategories[0]
    });
    const [submissionError, setSubmissionError] = useState("");

    //Time
    const handleTimeChange = (newTime) => {
        if (newTime != null)
            setTask({ ...task, date: newTime });
        else
            console.log("BNUNUNUNU");
    };

    //Category
    const handleCategoryChange = (e) => {
        setTask({ ...task, category: e.target.value });
    };

    //Title
    const [titleError, setTitleError] = useState(null);
    const handleTitleChange = (title) => {
        setTask({ ...task, title });
        if (titleError !== null)
            setTitleError(null);
    }

    const checkTitleValid = () => {
        if (task.title.length < 3) {
            setTitleError("Title must contain at least 3 characters");
            return false;
        }

        return true;
    }

    //Description
    const handleDescriptionChange = description => {
        setTask({ ...task, description });
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
        onTaskCreationCanceled();
    }

    //Server request
    const [isLoading, setIsLoading] = useState(false);
    const postTask = () => {
        axios.post(apiUrl + "/tasks/addOne", task)
            .then(response => {
                setIsLoading(false);
                if (response.status === 200)
                    onTaskCreationSucceeded(task);
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
                trim
            />

            <label>Add a description:</label>
            <InputTextArea
                placeholder="Description"
                value={task.description}
                onChange={handleDescriptionChange}
            />

            <label>Time:</label>
            <DatePicker
                selected={task.date}
                onChange={handleTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="HH:mm"
            />
            <label>Category:</label>
            <select value={task.category} onChange={handleCategoryChange}>
                {
                    taskCategories.map((category, index) => (
                        <option key={index} value={category.title}>{category.title}</option>
                    ))
                }
            </select>
            <button className="modalform-submit" type="submit" onClick={handleCreateTask}>Create Task</button>
        </ModalForm>
    );
}