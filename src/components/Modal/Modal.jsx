/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { CreateTaskModal, UpdateTaskModal } from './index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import css from './Modal.module.scss';

export const Modal = ({ isOpen, onClose, createTask, updateTask, deleteTask }) => {

    const closeIconRef = useRef();
    const modalRef = useRef();

    // TODO: Es necesario ejecutar FILTERED_TASK al cerrar el modal, para poder eliminar el ultimo elemento filtrado
    const clearFilteredTask = () => {
        onClose()
    }

    const onCloseHandle = () => {
        // animacion para desktop
        gsap.to(closeIconRef.current,
            {
                rotate: 90,
                duration: 0.35,
                ease: "elastic.out(1, 0.2)",
                onComplete: clearFilteredTask
            }
        )

    }

    if (!isOpen) return null;
    return (
        <div className={css["c-modal"]}>
            <div ref={modalRef} className={css["c-modal-content"]}>
                <button
                    className={css["close-modal-btn"]}
                    onClick={onCloseHandle}>
                    <FontAwesomeIcon ref={closeIconRef} style={{ fontSize: "24px" }} icon={faXmark} />
                </button>
                {createTask && <CreateTaskModal />}
                {updateTask && <UpdateTaskModal />}
                {deleteTask && <CreateTaskModal />}
            </div>
        </div>
    )
}


// TODO: Crear los estilos en SASS
// TODO: Animar la transicion del modal al desaparecer
// TODO: Crear animacion para mobile y desktop