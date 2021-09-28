import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

// action creator
const addTodo = (text) => {
  return {
    type: ADD,
    text,
  };
};
const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

// function reducer 생성
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state; 
  }
};
// store 생성 (createStore함수에 reducer를 매개변수로 넣음)
const store = createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteToDo,
};

export default store;
