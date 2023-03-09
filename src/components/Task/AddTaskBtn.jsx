/* eslint-disable react/prop-types */
// import { useState } from 'react'
import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import css from './Task.module.scss';


export const AddTaskBtn = () => {

    const { openModal, setAddTask } = useContext(ModalContext)
    const onClickHandle = () => {
        openModal()
        setAddTask(true)
    }

    return (
        <>
            <button onClick={onClickHandle} className={css["add-btn"]}>+</button>
        </>
    )
}
