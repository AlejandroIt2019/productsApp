import { Product } from "../models/product"
export const backendToModel = (localhost) => {
    const {
        id,
        product_name,
        brand,
        price,
    } = localhost
    return new Product({
        id,
        productName: product_name,
        brand,
        price,
    })
}