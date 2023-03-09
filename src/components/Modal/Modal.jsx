/* eslint-disable react/prop-types */
import { CreateTaskModal, UpdateTaskModal } from './index'
import css from './Modal.module.scss'

export const Modal = ({ isOpen, onClose, addTask, updateTask, deleteTask }) => {
    if (!isOpen) return null;

    return (
        <div className={css["c-modal"]}>
            <div className={css["c-modal-content"]}>
                <button onClick={onClose}>Close</button>
                {addTask && <CreateTaskModal />}
                {updateTask && <UpdateTaskModal />}
                {deleteTask && <CreateTaskModal />}
            </div>
        </div>
    )
}
