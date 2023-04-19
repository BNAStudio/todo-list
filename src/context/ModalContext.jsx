/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
import { Modal } from "../components/Modal/Modal";

// Context
export const ModalContext = createContext();

// Context component
export const ModalProvider = ({ children }) => {

    const [isModalOpen, setIsModalOpen] = useState(false); // !!! cambiar a FALSE 

    const [createTask, setAddTask] = useState(false);
    const [updateTask, setUpdateTask] = useState(false);
    const [deleteTask, setDeleteTask] = useState(false);
    const [detailsTask, setDetailsTask] = useState(false);
    const [showGoals, setShowGoals] = useState(false); // !!! cambiar a FALSE 

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setAddTask(false)
        setUpdateTask(false)
        setDeleteTask(false)
        setDetailsTask(false)
        setShowGoals(false)
    }

    return (    
        <ModalContext.Provider
            value={{
                isModalOpen,
                openModal,
                closeModal,
                setAddTask,
                setUpdateTask,
                setDeleteTask,
                setDetailsTask,
                setShowGoals
            }}>
            {children}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                createTask={createTask}
                updateTask={updateTask}
                deleteTask={deleteTask}
                detailsTask={detailsTask}
                showGoals={showGoals}
            />
        </ModalContext.Provider>
    )
}
