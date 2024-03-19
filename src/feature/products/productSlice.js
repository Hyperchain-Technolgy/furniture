import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll } from '../../service/api-client'

const initialState = {
  isLoading: false,
  products: [],
  error: null
}

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  try {
    const resp = await getAll()
    return resp;
  } catch (err) {
    console.log(err);
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
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
      })
  }
})

export default productsSlice.reducer;