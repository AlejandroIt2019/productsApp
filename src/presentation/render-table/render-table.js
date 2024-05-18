import productsStore from "../../store/products-store";
import { showModal } from "../render-modal/render-modal";
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
                    <a class='selected-user' data-id='${product.id}' href='#'>Selected</a> |
                    <a class='delete-user' data-id='${product.id}' href='#'>Delete</a>
                </td>
            </tr>
        `
    });
    table.querySelector('tbody').innerHTML = html;
    //events
    const selectedUser = table.querySelectorAll('.selected-user');
    selectedUser.forEach(element => {
        element.addEventListener('click', e => {
            const takeId = e.target.closest('[data-id]');
            const id = takeId.getAttribute('data-id');
            showModal(id);
        })
    });
}