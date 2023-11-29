import "./InputForm.css"
import "./InputTextArea.css";
import { useState } from "react";

export default function InputTextArea({ value, setValue, placeholder, onChange, isValid, errorMessage }) {
    const [rows, setRows] = useState(1);

    const handleChange = (event) => {
        const content = event.target.value;
        setValue(content);

        let rows = content.split('\n').length;
        if (rows > 4)
            rows = 4;
        setRows(rows);

        if (onChange != null)
            onChange();
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
            {!isValid && <p className="input-error">{errorMessage}</p>}
        </>
    );
}