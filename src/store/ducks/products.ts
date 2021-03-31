import { Products } from "../../models/Products";
import { getProducts } from "../../services/productsService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type ProductsState = {
  success: boolean;
  fetching: boolean;
  productsList?: [Products];
};

const initialState: ProductsState = {
  success: false,
  fetching: false,
};

export const ActionPrefix = "@@PRODUCTS";

export const Types = {
  GET_PRODUCTS: "@@PRODUCTS/GET_PRODUCTS",
};

export const getProductsDispatcher = createAsyncThunk(
  Types.GET_PRODUCTS,
  async () => {
    const { data } = await getProducts();

    return data;
  }
);

const productsSlice = createSlice({
  name: ActionPrefix,
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getProductsDispatcher.pending, (state) => {
        state.fetching = true;
        state.success = false;
      })
      .addCase(getProductsDispatcher.fulfilled, (state, { payload }) => {
        state.fetching = false;
        state.success = true;
        state.productsList = payload.products;
      })
      .addCase(getProductsDispatcher.rejected, (state) => {
        state.success = false;
        state.fetching = false;
      }),
});

export const { reducer: productsReducer } = productsSlice;

export const productsReducers = { productsState: productsReducer };

type RootState = { productsState: ProductsState };

export const selectProductsState = (state: RootState) => state.productsState;
