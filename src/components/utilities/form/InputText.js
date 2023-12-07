import "./InputForm.css"
import "./InputText.css"
import { useState } from "react";

export default function InputText({ type, placeholder, onChange, errorMessage, trim }) {
    const [value, setValue] = useState("");
    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        onChange(trim? newValue.trim() : newValue);
    }

    return (
        <>
            <input type={type} value={value} placeholder={placeholder} onChange={handleChange} />
            {errorMessage != null && <p className="input-error">{errorMessage}</p>}
        </>
    );
}