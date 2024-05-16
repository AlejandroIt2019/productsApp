import productsStore from "../../store/products-store";
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
                <td>undefinedd</td>
                <td>
                    <a href='#'>Selected</a>|
                    <a href='#'>Delete</a>
                </td>
            </tr>
        ` 
    });
    table.querySelector('tbody').innerHTML = html;

}