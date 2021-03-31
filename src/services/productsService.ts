import axios from "axios";
import { Products } from "../models/Products";

const endpoint = "http://localhost:3005/data";

export type ProductsResponseBody = {
  data?: Products;
};

export const getProducts = () => axios.get(endpoint);
