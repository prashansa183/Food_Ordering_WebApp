import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({
  name:'cart',
  initialState:{
    items:[],
  },
  reducers:{
    addItem:(state,action)=>{
        state.items.push(action.payload);
    },
    removeIeam:(state,action)=>{
      state.items.pop();
    },
    clearCart:(state)=>{
      state.items=[];
    },
    
  }
})

export const{addItem,removeIeam,clearCart}=CartSlice.actions;
export default CartSlice.reducer;

