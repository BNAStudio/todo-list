import { TYPES } from "../actions/taskActions";

// const userTask = {
// 	id: 1,
// 	task: "TESTING TASK 1",
// 	state: "pending",
// 	checked: false
// }

// Reducer function
export function taskReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: Date.now(),
                        task: action.payload,
                        state: "pending"
                    }
                ]
            }
                ;
        case TYPES.UPDATE_TASK:
            return console.log(`update task: ${state.task} ${state.id}`);
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