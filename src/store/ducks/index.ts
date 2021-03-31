import { combineReducers } from "redux";
import { productsReducers } from "./products";
export { selectProductsState } from "./products";

const rootReducer = combineReducers({
  ...productsReducers,
});

export default rootReducer;
