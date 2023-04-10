/* eslint-disable no-case-declarations */
import { TYPES } from "../actions/taskActions";

export function taskReducer(state, action) {
    switch (action.type) {

        case TYPES.ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks, action.payload
                ]
            };

        case TYPES.FILTERED_TASK:
            const filteredTask = state.tasks.filter(task => task.id === action.payload.id)[0];
            return { ...state, filteredTask };

        case TYPES.UPDATE_TASK:
            // recibe tarea actualizada
            const updateTask = action.payload;
            // Itera por el estado, compara y agrega al estado principal la tarea actualizda
            const tasks = state.tasks.map(task => {
                if (task.id === updateTask.id) return updateTask
                return task
            })
            return { ...state, tasks, filteredTask: {} };

        case TYPES.COMPLETED_TASK:
            const { id, isChecked } = action.payload;
            // Crea un nuevo arreglo agrega el atributo checked
            const arr = state.tasks.map(task => {
                if (task.id === id) return { ...task, checked: isChecked }
                return task
            })
            // Itera por el nuevo arreglo y filtra unicamente las que estan checked
            const completedTasks = arr.filter(task => task.checked)
            return { ...state, arr, completedTasks };

        case TYPES.DELETE_TASK:
            const deleteTaskID = action.payload;
            const notDeleteTask = state.tasks.filter(task => task.id !== deleteTaskID)

            return { ...state, tasks: notDeleteTask, filteredTask: {} };

        default:
            return state;
    }
}
