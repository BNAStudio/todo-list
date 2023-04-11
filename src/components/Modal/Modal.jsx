/* eslint-disable react/prop-types */
import { useContext, useRef } from 'react';
import { CreateTaskModal, UpdateTaskModal, DeleteTaskModal, DetailsTaskModal } from './index';
import { TaskContext } from '../../context/TaskContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import css from './Modal.module.scss';
import { TYPES } from '../../actions/taskActions';

export const Modal = ({
    isOpen,
    onClose,
    createTask,
    updateTask,
    deleteTask,
    detailsTask }) => {

    const closeIconRef = useRef();
    const modalRef = useRef();
    const { dispatch } = useContext(TaskContext)

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
        dispatch({ type: TYPES.RESET_FILTERED_TASK })

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
                {/* {createTask && <DetailsTaskModal />} */}
                {createTask && <CreateTaskModal />}
                {updateTask && <UpdateTaskModal />}
                {deleteTask && <DeleteTaskModal />}
                {detailsTask && <DetailsTaskModal />}
            </div>
        </div>
    )
}


// TODO: Crear los estilos en SASS
// TODO: Animar la transicion del modal al desaparecer
// TODO: Crear animacion para mobile y desktop