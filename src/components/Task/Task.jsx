/* eslint-disable react/prop-types */
import { useRef, useContext } from 'react';

// import { TYPES } from '../../actions/taskActions'
import { ModalContext } from '../../context/ModalContext';

import { Tag } from '../Tag';

import css from './Task.module.scss'
import { ICONS } from '../../constants/constants';

export const Task = ({ tagAlert, taskTitle }) => {
    const { openModal, setUpdateTask, setDeleteTask } = useContext(ModalContext);

    const checkboxRef = useRef();

    const onHandleUpdate = e => {
        e.preventDefault();
        openModal();
        setUpdateTask(true)
    }
    const onHandleDelete = e => {
        e.preventDefault();
        openModal();
        setDeleteTask(true)
    }

    return (
        <>
            <form className={css.form}>
                <label className={css["c-task"]} htmlFor="task">
                    {ICONS.drag}
                    <input
                        ref={checkboxRef}
                        type="checkbox"
                        className={css.task__checkbox}
                        name="checkbox" />
                    <h3 className={css.task__title}>{taskTitle}</h3>
                    <Tag tag={tagAlert} />
                    <button
                        onClick={onHandleUpdate}
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
        </>
    )
}

// { task: { id, title, state }, onPintak, onUpdateTask, onRemoveTask }