import "./InputForm.css"
import "./InputTextArea.css";
import { useState } from "react";

export default function InputTextArea({ value, onChange, placeholder, errorMessage }) {
    const [rows, setRows] = useState(1);
    if(value == null)
        value = "";

    const handleChange = (event) => {
        const content = event.target.value;
        onChange(content);

        let rows = content.split('\n').length;
        if (rows > 4)
            rows = 4;
        setRows(rows);
    }

    return (
        <>
            <textarea
                className="input-textarea"
                placeholder={placeholder}
                onChange={handleChange}
                rows={rows}
                value={value}
            />
            {errorMessage !== null && <p className="input-error">{errorMessage}</p>}
        </>
    );
}