/* eslint-disable no-case-declarations */
import { TYPES } from "../actions/taskActions";
import { CURRENT_DAY, CALC_DAYS, CALC_TAG } from "../constants/constants";

export function TaskReducer(state, action) {
    switch (action.type) {

        // TODO: Crear una accion para actualizar el tag y los dias restantes
        // !: Definir en donde se implementara la accion 

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

        // ! Revisar la accion por no esta reescribiendo el estado
        case TYPES.UPDATE_DATA_TASK:
            // console.log(state.tasks);
            const newState = state.tasks.map(item => {
                const currentDay = CURRENT_DAY();
                const remainingDays = CALC_DAYS(currentDay, item.end)
                const newTag = CALC_TAG(remainingDays)
                return { ...state, tag: newTag, days: remainingDays }
            })
            console.log(newState);
            return { ...state, tasks: newState }

        default:
            return state;
    }
}
