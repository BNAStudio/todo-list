import { TYPES } from "../actions/taskActions";

// Reducer function
export function taskReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks, action.payload
                ]
            };
        case TYPES.READ_TASK:
            return state;
        case TYPES.UPDATE_TASK:
            return {
                
            }
        case TYPES.DELETE_TASK:
            return console.log(`delete task: ${state.task} ${state.id}`);
        case TYPES.CHECKED_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    { checked: action.payload }
                ]
            };
        default:
            return state;
    }
}