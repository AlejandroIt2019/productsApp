import productsStore from "../../store/products-store";
import { renderTable } from "../render-table/render-table";
import "./render-buttons.css";
/**
 * @param {HTMLDivElement} elementId 
 */
export const renderButtons = (elementId) => {
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next >';
    const prevButton = document.createElement('button');
    prevButton.innerText = '< Prev';
    const textLabel = document.createElement('label');
    textLabel.innerText = productsStore.getCurrentPage();
    textLabel.id = 'textLabel';
    elementId.append(prevButton, textLabel, nextButton);
    //events next and previous.
    nextButton.addEventListener('click', async(e) => {
        await productsStore.nextPage();
        textLabel.innerText = productsStore.getCurrentPage();
        renderTable();
    })
    prevButton.addEventListener('click', async(e) => {
        await productsStore.prevPage();
        textLabel.innerText = productsStore.getCurrentPage();
        renderTable();
    })
}