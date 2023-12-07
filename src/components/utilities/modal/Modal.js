import "./Modal.css"

export default function Modal({ onClose, children }) {
    //Terminate if user clicks on the black overlay
    const handleOnClick = (event) => {
        if (!event.target.classList.contains('modal-overlay'))
            return;

        onClose();
    }

    return (
        <div className="modal-overlay" onClick={handleOnClick}>
            {children}
        </div>
    );
}