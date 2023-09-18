import axios from "axios";
import { ProductDTO } from "../models/product";
import { BASE_URL } from "../utils/system";

export function findAll(): ProductDTO[] {
  return axios.get(`${BASE_URL}/products`);
}

export function findById(id: number): ProductDTO | undefined {
  return axios.get(`${BASE_URL}/products/${id}`);
}
