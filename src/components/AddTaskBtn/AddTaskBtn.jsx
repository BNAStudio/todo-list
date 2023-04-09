/* eslint-disable react/prop-types */
// import { useState } from 'react'
import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import css from './AddTaskBtn.module.scss';


export const AddTaskBtn = () => {
    const { openModal, setAddTask } = useContext(ModalContext);

    const onHandleCreate = () => {
        openModal()
        setAddTask(true)
    }

    return (
        <div className={css["c-btn"]}>
            <button onClick={onHandleCreate} className={css["add-btn"]}>+</button>
        </div>
    )
}
