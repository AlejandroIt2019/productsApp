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
const onChangeUser = async() => {
    throw('not implemented');
}
const reloadPage = async() => {
    throw('not implemented');
}
export default {
    state,
    nextPage,
    prevPage,
    onChangeUser,
    reloadPage,
    /**
     * 
     * @returns {Product[]}
     */
    getProducts: () => state.products,
    getCurrentPage: () => state.currentPage
}