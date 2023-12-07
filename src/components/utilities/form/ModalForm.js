import Loader from "../loader/Loader";
import Modal from "../modal/Modal";
import "./ModalForm.css"

export default function ModalForm({ header, muted, onClose, children, isLoading, submissionError }) {
    return (
        <Modal onClose={onClose}>
            {isLoading && <Loader />}
            <div className="modalform">
                <div className="modalform-header">
                    <h1>{header}</h1>
                    <p>{muted}</p>
                    {submissionError != null && <h3>{submissionError}</h3>}
                </div>
                <form>
                    {children}
                </form>
            </div>
        </Modal>
    );
}