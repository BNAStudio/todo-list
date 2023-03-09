/* eslint-disable react/prop-types */
import { CreateTaskModal } from './CreateTaskModal'
import css from './Modal.module.scss'

export const Modal = ({ isOpen, onClose, addTask }) => {
    if (!isOpen) return null;

    return (
        <div className={css["c-modal"]}>
            <div className={css["c-modal-content"]}>
                <button onClick={onClose}>Close</button>
                {addTask ? <CreateTaskModal /> : 'addTask no llega'}
            </div>
        </div>
    )
}
