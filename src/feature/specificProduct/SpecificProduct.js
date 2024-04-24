import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getSpecific } from "../../service/api-client";

const initialState = {
  loading: false,
  product: null,
  error: null
}

export const getProductById = createAsyncThunk(
  'specificProduct/addToProduct',
  async (prodId) => {
    const response = await getSpecific(`/api/product${prodId}`);
    return response;
  }
);


const SpecificProduct = createSlice({
  name: "SpecificProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      })
  }
})

export default SpecificProduct.reducer;