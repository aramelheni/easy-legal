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
        time: null,
        title: "",
        description: "",
        category: ""
    });
    const [submissionError, setSubmissionError] = useState("");

    //Time
    const handleTimeChange = (time) => {
        setTask({ ...task, time: time });
    };

    //Category
    const categories = ["Meeting", "Payment", "Board", "Custom"];
    const handleCategoryChange = (e) => {
        setTask({ ...task, category: e.target.value });
    };

    //Title
    const [isTitleValid, setTitleValid] = useState(false);
    const [titleError, setTitleError] = useState("");
    const handleTitleChange = (title) => {
        if (title.length < 3) {
            setTitleValid(false);
            setTitleError("Title must contain at least 3 characters");
        } else {
            setTitleValid(true);
        }

        setTask({ ...task, title: title });
    }

    //Description
    const handleDescriptionChange = description => {
        setTask({ ...task, description: description });
    }

    //Create Task
    const handleCreateTask = (event) => {
        event.preventDefault();
        setIsLoading(true);
        setSubmissionError("");
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
                isValid={isTitleValid}
                errorMessage={titleError}
            />

            <label>Add a description:</label>
            <InputTextArea
                placeholder="Description"
                value={task.description}
                setValue={handleDescriptionChange}
                isValid={isTitleValid}
                errorMessage={titleError}
            />

            <label>Time:</label>
            <DatePicker
                selected={task.time}
                onChange={handleTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="HH:mm"
            />
            <label>Category:</label>
            <select value={task.category} onChange={handleCategoryChange}>
                <option value="">Select an option</option>
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