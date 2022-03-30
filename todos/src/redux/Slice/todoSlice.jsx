import { createSlice } from '@reduxjs/toolkit';
const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    add: (state, action) => {
      let newArr = [...state, action.payload];
      state = [...newArr];
    },
    remove: (state, action) => {
      let newArr = [...state];
      newArr.splice(action.payload, 1);
      state = [...newArr];
    },
  },
});

const {actions,reducer} = todoListSlice;
export const {changeInput,add,remove} = actions;
export default reducer;
