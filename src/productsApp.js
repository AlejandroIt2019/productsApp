import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderFabButton } from "./presentation/render-fabButton/render-fabButton";
import { renderModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table/render-table";
import productsStore from "./store/products-store";
import { saveProduct } from "./use-cases/save-product";
//principal init.
export const productsApp = async(elementId) => {
    await productsStore.nextPage();
    renderTable(elementId);
    renderButtons(elementId);
    renderFabButton(elementId);
    renderModal(elementId, async(likeProduct) => {
        const product = await saveProduct(likeProduct);
        console.log(product);
        productsStore.onChangeProduct(product);
        renderTable(elementId); 
    });
}