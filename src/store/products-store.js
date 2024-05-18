import { Product } from "../models/product";
import { loadProducts } from "../use-cases/load-products";

const state = {
    products: [],
    currentPage: 0
}
const nextPage = async() => {
    const products = await loadProducts(state.currentPage + 1);
    if (products.length === 0) return;
    state.products = products;
    state.currentPage += 1; 
}
const prevPage = async() => {
    const products = await loadProducts(state.currentPage - 1);
    if (state.products === 1) return;
    state.products = products;
    state.currentPage -= 1;
}
const onChangeProduct = async(updateProducto) => {
    state.products = state.products.map(item => {
        if (item.id === updateProducto.id) {
            return updateProducto;
        }
        return item;
    })
}
const reloadPage = async() => {
    throw('not implemented');
}
export default {
    state,
    nextPage,
    prevPage,
    onChangeProduct,
    reloadPage,
    /**
     * 
     * @returns {Product[]}
     */
    getProducts: () => state.products,
    getCurrentPage: () => state.currentPage
}