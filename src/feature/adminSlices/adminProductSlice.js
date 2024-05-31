import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createProduct, updateProductApi } from "../../service/api-client";

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

export const updateProduct = createAsyncThunk(
  'adminProduct/updateProduct',
  async ({ id, data }, { getState, rejectWithValue }) => {
    try {
      const { user } = getState().auth;
      const response = await updateProductApi(id, data, user.token);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const adminProductSlice = createSlice({
  name: 'adminProduct',
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
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default adminProductSlice.reducer;

