import modalHtml from "./render-modal.html?raw";
import modalDeleteHtml from "./modal-delete.html?raw";
import "./render-modal.css";
import { getProductById } from "../../use-cases/get-product-by-id";
let modal;
let loadedProducts = {};
let modalDelete;
//modal delete
export const showModalDelete = async(id) => {
    modalDelete.classList.remove('hide-modal');
}
//modal form
export const showModal = async(id) => {
    modal.classList.remove('hide-modal');
    if (!id) return;
    const product = await getProductById(id);
    modal.querySelector('[name="productName"]').value = product.productName;
    modal.querySelector('[name="brand"]').value = product.brand;
    modal.querySelector('[name="price"]').value = product.price;
    modal.querySelector('[name="acquired"]').checked = product.acquired;
    loadedProducts = product;
    console.log(product);
}
export const hideModal = () => {
    modal.classList.add('hide-modal');
    modalDelete.classList.add('hide-modal');
    modal.querySelector('form').reset();
}
/** 
 * @param {HTMLDivElement} elementId 
 */
export const renderModal = (elementId, callback) => {
    if (!modal) {
        modal = document.createElement('div');
        modal.innerHTML = modalHtml;
        elementId.append(modal);
        //modal delete
        modalDelete = document.createElement('div');
        modalDelete.innerHTML = modalDeleteHtml;
        elementId.append(modalDelete);
    }
    modalDelete.className = 'hide-modal modal-container';
    modal.className = 'hide-modal modal-container';
    modal.addEventListener('click', e => {
        if (e.target.className === 'modal-container') {
            hideModal();
        }
    })
    modalDelete.addEventListener('click', e => {
        if (e.target.className === 'modal-container') {
            hideModal();
        }
    })
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        if (!data.get('acquired')) {
            data.append('acquired', false);
        }
        const likeProduct = {...loadedProducts};
        for (const [key, value] of data) {
            if (key === 'price') {
                likeProduct[key] = +value; //convert to number.
                continue;
            }
            if (key === 'acquired') {
                likeProduct[key] = value === 'on' ? true : false;
                continue;
            }
            likeProduct[key] = value;
        }
        callback(likeProduct);
        hideModal();
    })
}