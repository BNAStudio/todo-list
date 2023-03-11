/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
import { Modal } from "../components/Modal/Modal";

// Context
export const ModalContext = createContext();

// Context component
export const ModalProvider = ({ children }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [addTask, setAddTask] = useState(false);
    const [updateTask, setUpdateTask] = useState(false);
    const [deleteTask, setDeleteTask] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
            setIsModalOpen(false);
            setAddTask(false)
            setUpdateTask(false)
            setDeleteTask(false)
    }

    return (
        <ModalContext.Provider
            value={{ isModalOpen, openModal, closeModal, setAddTask, setUpdateTask, setDeleteTask }}>
            {children}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                createTask={addTask}
                updateTask={updateTask}
                deleteTask={deleteTask} />
        </ModalContext.Provider>
    )
}
