/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
import { Modal } from "../components/Modal/Modal";

// Context
export const ModalContext = createContext();

// Context component
export const ModalProvider = ({ children }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addTask, setAddTask] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setAddTask(false)
    }

    return (
        <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, setAddTask }}>
            {children}
            <Modal isOpen={isModalOpen} onClose={closeModal} addTask={addTask} />
        </ModalContext.Provider>
    )
}
