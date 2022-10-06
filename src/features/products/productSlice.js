import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    products : [],
    curCate:"",
    isLoading: false,
};


 
const url = 'https://fakestoreapi.com/products';

  export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (name, thunkAPI) => {
      try {
        // console.log(name);
        // console.log(thunkAPI);
        // console.log(thunkAPI.getState());
        // thunkAPI.dispatch(openModal());
        const resp = await axios(url);
  
        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
      }
    }
  );
  

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
      getCate:(state,action) => {
        const itemId = action.payload;
        console.log(itemId)
        state.curCate = itemId;
      },
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
          state.isLoading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
         // console.log(data);
          state.isLoading = false;
          state.products = action.payload;
        },
        [getProducts.rejected]: (state) => {
          state.isLoading = false;
        },
      },
});
export const { getCate, } = productSlice.actions;
export default productSlice.reducer;