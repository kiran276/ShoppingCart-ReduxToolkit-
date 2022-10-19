// slice is used to store app data in small pieces

const { createSlice } = require("@reduxjs/toolkit");
// idher we are creating enums like mechanism that we have in type script here freeze will not allow further changes in value
export const STATUSES=Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'laoding',
});

const productSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUSES.IDLE,
    },
    reducers:{
        setProducts(state,action){
            // donot do this or never do this because this has sideeffect so we use thunk middleware
            // const res = await fetch('https://fakestoreapi.com/products');

            state.data = action.payload; 
        },
        setStatus(state,action){
            // here we are filtering state . by removing id we are getttin  from action payload
        state.status=action.payload;

        },
    },
});

export const {setProducts,setStatus}= productSlice.actions;
export default productSlice.reducer;
// Thunks
export function fetchProducts(){
    return async function fetchProductThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING));
try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        dispatch(setProducts(data))
        dispatch(setStatus(STATUSES.IDLE));

} catch (error) {
    console.log(error);
    dispatch(setStatus(STATUSES.ERROR));
    
}
    };

}

