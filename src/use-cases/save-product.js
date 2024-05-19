import { backendToModel } from "../mappers/product-mapper";
import { modelToBackend } from "../mappers/product-to-back";
import { Product } from "../models/product";
export const saveProduct = async(likeProduct) => {
    const newProduct = new Product(likeProduct);
    if (!newProduct.productName || !newProduct.brand) throw new Error('not implemented.');
    const backProduct = modelToBackend(newProduct);
    let finalProduct;
    if (newProduct.id) {
        finalProduct = await updateProduct(backProduct);
    } else {
        finalProduct = await createProduct(backProduct);
    }
    return backendToModel(finalProduct);
}
const createProduct = async(product) => {
    const url = `${import.meta.env.VITE_BASE_URL}/products/`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(product),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    const data = await res.json();
    console.log(data);
    return data;
}
const updateProduct = async(product) => {
    const url = `${import.meta.env.VITE_BASE_URL}/products/${product.id}`;
    const res = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(product),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    const data = await res.json();
    console.log(data);
    return data;
}