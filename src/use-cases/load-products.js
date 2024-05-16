import { backendToModel } from "../mappers/product-mapper";

/**
 * 
 * @param {number} page 
 */
export const loadProducts = async(page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}/products?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    const products = data.map(backendToModel);
    return products;
}