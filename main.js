import { productsApp } from './src/productsApp';
import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    </a>
    <h1>products 🤣</h1>
    <div class="card">

    </div>
    <p class="read-the-docs">

    </p>
  </div>
`
const element = document.querySelector('.card');
productsApp(element);