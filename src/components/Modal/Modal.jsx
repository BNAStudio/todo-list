/* eslint-disable react/prop-types */
import { CreateTaskModal, UpdateTaskModal } from './index';
// import { useLayoutEffect, useRef } from 'react';
import { useRef } from 'react';
// import { gsap } from "gsap";
import css from './Modal.module.scss';



export const Modal = ({ isOpen, onClose, createTask, updateTask, deleteTask }) => {
    const modalContainerRef = useRef(null);

    if (!isOpen) return null;

    return (
        <div ref={modalContainerRef} className={css["c-modal"]}>
            <div className={css["c-modal-content"]}>
                <button onClick={onClose}>Close</button>
                {createTask && <CreateTaskModal />}
                {updateTask && <UpdateTaskModal />}
                {deleteTask && <CreateTaskModal />}
            </div>
        </div>
    )
}


// TODO: Crear los estilos en SASS
// TODO: Crear la animacion en gsap
// useLayoutEffect(() => {
//     const modalInAnimation = gsap.

//     return () => {
//         second
//     };
// }, [third])