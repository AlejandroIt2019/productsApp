import productsStore from "../../store/products-store";
import { deleteProductById } from "../../use-cases/delete-product";
import { hideModal, showModal, showModalDelete } from "../render-modal/render-modal";
import "./render-table.css";
let table;
const createTable = () => {
    const tableElement = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');
    tableHead.innerHTML = `
        <tr>
            <th>ID</th>
            <th>productName</th>
            <th>brand</th>
            <th>Price</th>
            <th>acquired</th>
            <th>Options</th>
        </tr>
    `
    tableElement.append(tableHead, tableBody);
    return tableElement;
}
/**
 * 
 */
export const renderTable = (elementId) => {
    if (!table) {
        table = createTable();
        elementId.append(table);
    }
    const products = productsStore.getProducts();
    let html = '';
    products.forEach(product => {
        html += `
            <tr>
                <td>${product.id}</td>
                <td>${product.productName}</td>
                <td>${product.brand}</td>
                <td>${product.price}</td>
                <td>${product.acquired}</td>
                <td>
                    <a class='selected-product' data-id='${product.id}' href='#'>Selected</a> |
                    <a class='delete-product' data-id='${product.id}' href='#'>Delete</a>
                </td>
            </tr>
            `
        });
        table.querySelector('tbody').innerHTML = html;
        //events
        const selectedProduct = table.querySelectorAll('.selected-product');
        selectedProduct.forEach(element => {
            element.addEventListener('click', e => {
                const takeId = e.target.closest('[data-id]');
                const id = takeId.getAttribute('data-id');
                showModal(id);
            })
        });
    const deleteProduct = table.querySelectorAll('.delete-product');
    const deleteButton = document.querySelector('.deleteP');
    const cancelProduct = document.querySelector('.cancelP');
    deleteProduct.forEach(element => {
        element.addEventListener('click', async(e) => {
            showModalDelete();
            const takeId = e.target.closest('[data-id]');
            const id = takeId.getAttribute('data-id');
            deleteButton.addEventListener('click', async(e) => {
                deleteProductById(id);
                await productsStore.reloadPage();
                hideModal();
                renderTable();
            })
            cancelProduct.addEventListener('click', e => {
                hideModal();
            })           
            //late delete
        })
    });
}