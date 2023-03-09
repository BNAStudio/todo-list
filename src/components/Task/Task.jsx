/* eslint-disable react/prop-types */
import { useRef } from 'react';

import { Tag } from '../Tag';
import { AddTaskBtn } from './AddTaskBtn';

import css from './Task.module.scss'
import { ICONS } from '../../constants/constants';


export const Task = ({ tagAlert }) => {

    const checkboxRef = useRef();
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
                    <h3 className={css.task__title}>Title Task</h3>
                    <Tag tag={tagAlert} />
                    <button
                        className={`${css.task__btn} 
                    ${css["task__btn--update"]}`}>
                        {ICONS.update}
                    </button>
                    <button
                        className={`${css.task__btn} 
                    ${css["task__btn--delete"]}`}>
                        {ICONS.delete}
                    </button>
                </label>
            </form >
            <AddTaskBtn createTask />
        </>
    )
}

// { task: { id, title, state }, onPintak, onUpdateTask, onRemoveTask }