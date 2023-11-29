import "./InputForm.css"
import "./InputText.css"

export default function InputText({ type, placeholder, onChange, isValid, errorMessage }) {
    const handleChange = (event) => {
        onChange(event.target.value);
    }
    
    return (
        <>
            <input type={type} placeholder={placeholder} onChange={handleChange} />
            {!isValid && <p className="input-error">{errorMessage}</p>}
        </>
    );
}