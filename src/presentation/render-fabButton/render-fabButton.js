import { showModal } from "../render-modal/render-modal";
import "./render-fabButton.css";
/**
 * 
 * @param {HTMLDivElement} elementId 
 */
export const renderFabButton = (elementId) => {
    const fabButton = document.createElement('button');
    fabButton.innerText = '+';
    fabButton.id = 'fabButton';
    elementId.append(fabButton);
    //event fabbutton.
    fabButton.addEventListener('click', e => {
        showModal();
    })
}