import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../../models/Products";

export type ProductsCartState = Products & { quantity: number };

const initialState: ProductsCartState[] = [];

export const ActionPrefix = "@@CART";

const getItemIndex = (state: Products[], idToFind: string): number => {
  const ids = state.map((item) => item.id);
  return ids.indexOf(idToFind);
};

const cartSlice = createSlice({
  name: ActionPrefix,
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductsCartState>) {
      const itemIndex = getItemIndex(state, action.payload.id);
      if (itemIndex && itemIndex < 0) state.push(action.payload);
      else state[itemIndex].quantity += action.payload.quantity;
    },
    removeFromCart(state, action: PayloadAction<{ id: string }>) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    incrementQuantity(state, action: PayloadAction<{ id: string }>) {
      const itemIndex = getItemIndex(state, action.payload.id);
      state[itemIndex].quantity += 1;
    },
    decrementQuantity(state, action: PayloadAction<{ id: string }>) {
      const itemIndex = getItemIndex(state, action.payload.id);

      if (state[itemIndex].quantity > 1) state[itemIndex].quantity -= 1;
      else return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
