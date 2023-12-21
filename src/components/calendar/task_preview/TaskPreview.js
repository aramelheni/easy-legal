import AppPaper from '../../utilities/app_paper/AppPaper.js';
import Modal from '../../utilities/modal/Modal.js';

export default function TaskPreview({onClose}) {
    return (<div>
        <Modal onClose={onClose}>
            <AppPaper>
                <p>hi</p>
            </AppPaper>
        </Modal>
    </div>);
}