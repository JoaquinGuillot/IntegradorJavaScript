import { setLocalStorage } from "./src/persistance/localstorage";
import { renderCategorias } from "./src/services/categories";
import { handleGetProductToStore } from "./src/views/store";
import './style.css'

/*APLICACIÓN*/

handleGetProductToStore();
renderCategorias();
/* HEADER*/
const buttonAdd = document.getElementById("agregarHeader");

buttonAdd.addEventListener('click', () => {
    abrirPopUp();
});

/* POPUP*/

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener('click', () => {
    handleCancelButton();
});
const handleCancelButton =()=>{
    cerrarPopUp();
};
//Funciones para el popup

const abrirPopUp = ()=>{
    const popup = document.getElementById("modalPopUp");
    popup.style.display= 'flex';
};
const cerrarPopUp = ()=>{
    const popup = document.getElementById("modalPopUp");
    popup.style.display= 'none';
};

//Alta o modificacion de elementos

const  acceptSave = document.getElementById("acceptButton");

acceptSave.addEventListener('click', () => {
    handleElements();
    });

const handleElements = ()=>{

  const nombre = document.getElementById("nombre").value,
  imagen = document.getElementById("imagen").value,
  precio = document.getElementById("precio").value,
  categoria = document.getElementById("categoria").value;

let object = {
    id: new Date().toISOString(),
    nombre,
    imagen,
    precio,
    categoria
};
setLocalStorage(object);
    cerrarPopUp();
};
