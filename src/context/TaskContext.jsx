/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { TaskReducer } from "../reducers/TaskReducer";

export const TaskContext = createContext();

// export const initialStateTask = {
//     tasks: []
// }
const initialStateTask = {
    tasks: [{
        issue: "Tarea 1",
        description: "Descripcion 3",
        start: "2023-01-12",
        end: "2023-04-12",
        id: "d2dc319f-20a3-4b62-9afa-0e0c1de5805",
        days: 3,
        tag: "soon"
    },
    {
        issue: "Tarea 2",
        description: "Descripcion 1",
        start: "2023-04-10",
        end: "2023-04-13",
        id: "22e55b86-24a6-4634-afab-05c068a05sdf",
        days: 6,
        tag: "soon"
    },
    {
        issue: "Tarea 3",
        description: "Descripcion 1",
        start: "2023-04-12",
        end: "2023-04-14",
        id: "d2dc319f-20a3-4b62-9afa-0e0c1de134rte",
        days: 3,
        tag: "soon"
    },
    {
        issue: "Tarea 4",
        description: "Descripcion 3",
        start: "2023-04-12",
        end: "2023-04-15",
        id: "d2dc319f-20a3-4b62-9afa-0e0c1de5854u",
        days: 3,
        tag: "soon"
    },
    ]
}

// const NEW_TAG = state => {
//     return state.tasks.forEach(item => {
//         const currentDay = CURRENT_DAY();
//         const remainingDays = CALC_DAYS(currentDay, item.end)
//         console.log(remainingDays);
//         const newTag = CALC_TAG(remainingDays)
//         item.tag = newTag
//         return { ...state.tasks, tag: item.tag, days: remainingDays }
//     })
// }
// console.log(NEW_TAG(initialStateTask));

// TODO: revisar si es posible guardar el estado inicial en constants
export const TaskContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TaskReducer, initialStateTask)
    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}