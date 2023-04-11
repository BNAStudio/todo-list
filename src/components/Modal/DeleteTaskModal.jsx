import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { ModalContext } from '../../context/ModalContext';
import css from './Modal.module.scss'
import { TYPES } from '../../actions/taskActions';


export const DeleteTaskModal = () => {
    const { state, dispatch } = useContext(TaskContext);
    const { closeModal } = useContext(ModalContext);
    const id = state.filteredTask.id

    console.log(state.filteredTask);

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch({
            type: TYPES.DELETE_TASK,
            payload: id
        })
        closeModal()
    }

    return (
        <div className={css["modal-delete"]}>
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}