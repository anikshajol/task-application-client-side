import * as actionTypes from "../Actions/type";

export const taskReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDNEW_TASK:
      return [action.payload, ...state];
    case actionTypes.GETALL_TASK:
      return action.payload;
    case actionTypes.TOGGLE_TASK:
      return state.map((task) =>
        task._id === action.payload._id ? { ...task, done: !task.done } : task
      );
    case actionTypes.UPDATE_TASK:
      return state.map((task) =>
        task._id === action.payload._id
          ? { ...task, data: action.payload.data }
          : task
      );
    case actionTypes.DELETE_TASK:
      return state.filter((task) => task._id !== action.payload._id);

    default:
      return state;
  }
};
