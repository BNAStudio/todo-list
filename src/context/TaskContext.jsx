/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";

// Context
export const TodoContext = createContext();

// Initial state - reducer
export const initialStateTask = {
    tasks: [
        { id: 1, task: "TESTING TASK 1", state: "pending", checked: false },
    ]
}

// Context component
export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialStateTask)
    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}