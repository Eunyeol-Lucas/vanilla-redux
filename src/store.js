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
  if (localStorage.length === 0) {
    localStorage.setItem("toDos", JSON.stringify([]));
  }
  switch (action.type) {
    case ADD:
      const getStorageToDo = JSON.parse(localStorage.getItem("toDos"));
      const addStorageToDo = getStorageToDo.concat({
        text: action.text,
        id: Date.now(),
      });
      localStorage.setItem("toDos", JSON.stringify(addStorageToDo));
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      const todos = JSON.parse(localStorage.getItem("toDos"));
      const deleteToDo = todos.filter((todo) => todo.id !== action.id);
      localStorage.setItem("toDos", JSON.stringify(deleteToDo));
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
