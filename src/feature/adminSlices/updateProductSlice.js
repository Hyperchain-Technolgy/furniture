import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateProduct as updateProductAPI } from '../../service/api-client'

const initialState = {
  product: null,
  isLoading: false,
  error: null
};

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async ({ productId, productData, token }, { rejectWithValue }) => {
    try {
      const response = await updateProductAPI(productId, productData, token);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const updateProductSlice = createSlice({
  name: 'updateProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
});

export default updateProductSlice.reducer;
