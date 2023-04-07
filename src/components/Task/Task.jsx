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

    const { openModal, setUpdateTask, setDeleteTask } = useContext(ModalContext);
    const { state, dispatch } = useContext(TaskContext);

    const handleClick = e => {
        e.preventDefault();
        openModal();
        dispatch({ type: TYPES.FILTERED_TASK, payload: { id: taskId } });
        setUpdateTask(true)
    }

    const onPinTask = (e) => {
        dispatch({
            type: TYPES.CHECKED_TASK,
            payload: {
                id: taskId,
                isChecked: e.target.checked
            }
        });
        console.log(state);
    }

    const onHandleDelete = e => {
        e.preventDefault();
        openModal();
        setDeleteTask(true)
    }

    return (
        <form className={css.form}>
            <label className={css["c-task"]} htmlFor="task">
                {ICONS.drag}
                <input
                    ref={checkboxRef}
                    type="checkbox"
                    className={css.task__checkbox}
                    name="checkbox"
                    onChange={onPinTask} />
                <h3 className={css.task__title}>{taskTitle}</h3>
                <Tag tag={tagAlert} />
                <button
                    onClick={handleClick}
                    className={`${css.task__btn} ${css["task__btn--update"]}`}>
                    {ICONS.update}
                </button>
                <button
                    onClick={onHandleDelete}
                    className={`${css.task__btn} ${css["task__btn--delete"]}`}>
                    {ICONS.delete}
                </button>
            </label>
        </form >
    )
}
