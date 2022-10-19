// slice is used to store app data in small pieces

const { createSlice } = require("@reduxjs/toolkit");

const initialState=[];
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload);
        },
        remove(state,action){
            // here we are filtering state . by removing id we are getttin  from action payload
          return state.filter(item=>item.id !== action.payload);

        },
    },
});

export const {add, remove}= cartSlice.actions;
export default cartSlice.reducer;