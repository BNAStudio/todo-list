/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { CreateTaskModal, UpdateTaskModal } from './index';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import css from './Modal.module.scss';

export const Modal = ({ isOpen, onClose, createTask, updateTask, deleteTask }) => {

    const iconRef = useRef();

    const onCloseHandle = () => {
        // animacion para desktop
        gsap.to(iconRef.current,
            {
                rotate: 180,
                duration: 1,
                ease: "elastic.out(1, 0.3)",
                onComplete: onClose
            }
        )
        // TODO: Crear animacion para mobile
    }

    if (!isOpen) return null;
    return (
        <div className={css["c-modal"]}>
            <div className={css["c-modal-content"]}>
                <button
                    className={css["close-modal-btn"]}
                    onClick={onCloseHandle}>
                    <FontAwesomeIcon ref={iconRef} fixedWidth icon={faXmark} />
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