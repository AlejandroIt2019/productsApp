import { Product } from "../models/product";

/**
 * 
 * @param {Product} elementId 
 */
export const modelToBackend = (product) => {
    const {
        id,
        productName,
        brand,
        price,
        acquired
    } = product
    return {
        id,
        product_name: productName,
        brand,
        price,
        acquired
    }
}