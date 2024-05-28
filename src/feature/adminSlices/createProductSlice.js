import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createProduct } from "../../service/api-client";

const initialState = {
  product: [],
  loading: false,
  error: null,
}

export const addProduct = createAsyncThunk(
  'adminProduct/addProduct',
  async (productData, { getState, rejectWithValue }) => {
    try {
      const { user } = getState().auth;
      const response = await createProduct(productData, user.token);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const createProductSlice = createSlice({
  name: 'createProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default createProductSlice.reducer;

