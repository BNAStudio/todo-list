/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";

// Context
export const TaskContext = createContext();

// Initial state - reducer
export const initialStateTask = {
    tasks: []
}

// Context component
export const TaskContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialStateTask)
    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}