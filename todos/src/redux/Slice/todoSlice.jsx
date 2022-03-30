import { createSlice } from '@reduxjs/toolkit';

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: {
    newList: [],
    type: 'ALL',
  },
  reducers: {
    add: (state, action) => {
      state.newList.push(action.payload);
    },
    remove: (state, action) => {
      const index = action.payload;      
      return state.newList.filter((item) => item.id !== index);
    },
    updateStatus: (state, action) => {
      state.newList.forEach((item) => {
        if (item.id === action.payload.id) {
          item.status = action.payload.status;
        }
      });
    },
    filterTodo: (state, action) => {
      state.type = action.payload;
    },
    updateContent: (state, action) => {
      state.newList.forEach((item) => {
        if (item.id === action.payload.id) {
          item.content = action.payload.content;
        }
      });
    },
  },
});

const { actions, reducer } = todoListSlice;
export const { add, remove, updateStatus, filterTodo, updateContent } = actions;
export default reducer;
