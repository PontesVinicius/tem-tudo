import { combineReducers } from "redux";
import { productsReducers } from "./products";
import cartReducer from "./cartProducts";
export { selectProductsState } from "./products";

const rootReducer = combineReducers({
  ...productsReducers,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
