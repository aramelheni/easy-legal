import Modal from '../../modal/Modal.js';
import AppPaper from '../../utilities/app_paper/AppPaper.js';

export default function TaskPreview({onClose}) {
    return (<div>
        <Modal onClose={onClose}>
            <AppPaper>
                <p>hi</p>
            </AppPaper>
        </Modal>
    </div>);
}