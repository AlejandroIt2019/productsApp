import { backendToModel } from "../mappers/product-mapper";
import { Product } from "../models/product";
/**
 * 
 * @param {Product} product 
 * @returns 
 */
export const getProductById = async(id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/products/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    const product = backendToModel(data);
    return product;
}