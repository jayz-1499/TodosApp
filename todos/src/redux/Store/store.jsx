import { configureStore } from '@reduxjs/toolkit'
import todoListSlice from '../../redux/Slice/todoSlice';

export const store = configureStore({
    reducer: {
        todoList: todoListSlice.reducer
    },
  })