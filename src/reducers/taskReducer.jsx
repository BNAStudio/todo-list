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
            return {
                ...state,
                filteredTask
            };
        case TYPES.UPDATE_TASK:
            return {
                ...state,
            };
        case TYPES.DELETE_TASK:
            return console.log(`delete task: ${state.task} ${state.id}`);
        case TYPES.CHECKED_TASK:
            if (!state.filteredTask) {
                return state;
            }
            const updatedTasks = state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        checked: action.payload.isChecked
                    };
                }
                return task;
            });
            return {
                ...state,
                tasks: updatedTasks
            };
        default:
            return state;
    }
}