/* eslint-disable react/prop-types */
import { useRef, useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { TaskContext } from '../../context/TaskContext';
import { Tag } from '../Tag';
import { TYPES } from '../../actions/taskActions';
import { ICONS } from '../../constants/constants';
import css from './Task.module.scss'

export const Task = ({ tagAlert, taskId, taskTitle }) => {
    const checkboxRef = useRef();

    const { openModal, setUpdateTask, setDeleteTask, setDetailsTask } = useContext(ModalContext);
    const { dispatch } = useContext(TaskContext);

// ! Se estan superponiendo el evento onClick del componente task y el evento onClick del boton update y el boton delete.

// TODO: Es necesario revisar el event bubbling y los relatedTarget

    const handleDetails = (e) => {
        e.preventDefault();
        openModal()
        dispatch({ type: TYPES.FILTERED_TASK, payload: { id: taskId } });
        setDetailsTask(true)
    }

    const hadleFilteredTask = e => {
        e.preventDefault();
        const clickedBtn = e.currentTarget.dataset.btn
        openModal();
        dispatch({ type: TYPES.FILTERED_TASK, payload: { id: taskId } });
        clickedBtn === "update-btn" ? setUpdateTask(true) : setDeleteTask(true)
    }

    const onPinTask = ({ target }) => {
        dispatch({
            type: TYPES.COMPLETED_TASK,
            payload: { id: taskId, isChecked: target.checked }
        });
    }

    return (
        <form className={css.form}>
            <label onClick={handleDetails} className={css["c-task"]} htmlFor="task">
                {ICONS.drag}
                <input
                    ref={checkboxRef}
                    type="checkbox"
                    className={css.task__checkbox}
                    name="checkbox"
                    onChange={onPinTask} />
                <h3 className={css.task__title}>{taskTitle}</h3>
                <Tag tag={tagAlert} />
                <div className={css["c-btns"]}>
                    <button
                        data-btn="update-btn"
                        onClick={hadleFilteredTask}
                        className={`${css.task__btn} ${css["task__btn--update"]}`}>
                        {ICONS.update}
                    </button>
                    <button
                        data-btn="delete-btn"
                        onClick={hadleFilteredTask}
                        className={`${css.task__btn} ${css["task__btn--delete"]}`}>
                        {ICONS.delete}
                    </button>
                </div>
            </label>
        </form >
    )
}
