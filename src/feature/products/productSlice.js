import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll } from '../../service/api-client'

const initialState = {
  isLoading: false,
  products: [],
  error: null
}

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  try {
    const resp = await getAll('/api/productss/')
    return resp;
  } catch (err) {
    console.log(err);
    throw err;
  }
})

const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message
      })
  }
})

export default productsSlice.reducer;