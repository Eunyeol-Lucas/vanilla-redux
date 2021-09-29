import { configureStore, createSlice } from "@reduxjs/toolkit";

// function reducer 생성
// const reducer = (state = [], action) => {
//   if (localStorage.length === 0) {
//     localStorage.setItem("toDos", JSON.stringify([]));
//   }
//   switch (action.type) {
//     case addToDo.type:
//       const getStorageToDo = JSON.parse(localStorage.getItem("toDos"));
//       const addStorageToDo = getStorageToDo.concat({
//         text: action.payload,
//         id: Date.now(),
//       });
//       localStorage.setItem("toDos", JSON.stringify(addStorageToDo));
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       const todos = JSON.parse(localStorage.getItem("toDos"));
//       const deleteToDos = todos.filter((todo) => todo.id !== action.payload);
//       localStorage.setItem("toDos", JSON.stringify(deleteToDos));
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

/* const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
}); */

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

// store 생성 (createStore함수에 reducer를 매개변수로 넣음)

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
