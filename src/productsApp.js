import { renderTable } from "./presentation/render-table/render-table";
import productsStore from "./store/products-store";

export const productsApp = async(elementId) => {
    console.log('hola');
    await productsStore.nextPage();
    renderTable(elementId);
}