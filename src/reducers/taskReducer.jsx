/* eslint-disable no-case-declarations */
import { TYPES } from "../actions/taskActions";

export function taskReducer(state, action) {
    switch (action.type) {

        case TYPES.ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };

        case TYPES.FILTERED_TASK:
            const filteredTask = state.tasks.filter(task => task.id === action.payload.id)[0];
            return { ...state, filteredTask };

        case TYPES.UPDATE_TASK:
            // recibe tarea actualizada
            const updateTask = action.payload;
            const tasks = state.tasks.map(task => {
                if (task.id === updateTask.id) return updateTask
                return task
            })
            return { ...state, tasks, filteredTask: {} };

        case TYPES.COMPLETED_TASK:
            const { id, isChecked } = action.payload;
            const arr = state.tasks.map(task => {
                if (task.id === id) return { ...task, checked: isChecked }
                return task
            })
            const completedTasks = arr.filter(task => task.checked)
            return { ...state, tasks: arr, completedTasks };

        // TODO: Agregar la fecha actual y la hora cuando se elimina
        case TYPES.DELETE_TASK:
            const deleteTaskID = action.payload;
            const updateTasks = state.tasks.filter(task => task.id !== deleteTaskID)
            const deletedTasks = state.tasks.filter(task => task.id === deleteTaskID)
            // Verifica si recicledTasks es una lista, en caso que no, asigna una vacia
            // con el spread se abre la lista y se concatena con deletedTasks
            const recicledTasks = [...(state.recicledTasks || []), ...deletedTasks]
            return {
                ...state,
                tasks: updateTasks,
                recicledTasks,
                filteredTask: {}
            };

        case TYPES.RESET_FILTERED_TASK:
            const resetfilteredTask = {};
            return { ...state, filteredTask: resetfilteredTask };

        default:
            return state;
    }
}
