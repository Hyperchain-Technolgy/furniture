import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAll } from "../../service/api-client";

const initialState = {
  allProducts: [],
  loading: false,
  error: null,
}

export const fetchProducts = createAsyncThunk(
  'adminProduct/fetchProducts',
  async () => {
    const response = await getAll('api/product/');
    return response;
  }
);

const AdminProductSlice = createSlice({
  name: 'adminProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.allProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default AdminProductSlice.reducer;

