import { setLocalStorage } from "./src/persistance/localstorage";
import { renderCategorias } from "./src/services/categories";
import { abrirPopUp } from "./src/services/popup";
import { productoActivo, setProductoActivo } from "./src/services/products";
import { handleSearchProductByName } from "./src/services/search";
import { handleGetProductToStore } from "./src/views/store";
import './style.css'

export let categoriaActiva = null;
export const setCategoriaActiva =  (categoria) => {
    categoriaActiva = categoria;
    console.log(categoriaActiva);

}
renderCategorias();
handleGetProductToStore();

/*-------------HEADER------------*/
//Boton Agregar
const buttonAdd = document.getElementById("agregarHeader");
buttonAdd.addEventListener('click', () => {
    abrirPopUp();
});
//Boton Buscar
const buttonSearch = document.getElementById("buscarHeader");
buttonSearch.addEventListener('click', () => {
    handleSearchProductByName();
});

