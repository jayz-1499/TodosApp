import { createSlice } from '@reduxjs/toolkit'
 const todoListSlice = createSlice({
    name:'todoList',
    intialState: [{
        id:1,
        content:'asdasdasd',
        status:false,
    }],
    reducers:{
        add: (state,action)=>{
        let newArr = [...state,action.payload];
        state = [...newArr];
        },
        remove:(state,action)=>{
        let newArr = [...state];
        newArr.splice(action.payload,1);
        state = [...newArr];
        }
    }
}) 
export default todoListSlice;