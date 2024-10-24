
/* POPUP*/

import { handleDeleteProduct, productoActivo, setProductoActivo } from "./products";

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener('click', () => {
    cerrarPopUp();
});

//Funciones para el popup

export const abrirPopUp = ()=>{
    const popup = document.getElementById("modalPopUp");
    popup.style.display= 'flex';
const deleteButton = document.getElementById("deleteButton");
    if(productoActivo){
        deleteButton.style.display ="block";

    }else{
        deleteButton.style.display ="none";
    }
    if(productoActivo){
        const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("imagen"),
        precio = document.getElementById("precio"),
        categoria = document.getElementById("categoria");
        nombre.value = productoActivo.nombre;
        imagen.value = productoActivo.imagen;
        precio.value = productoActivo.precio;
        categoria.value = productoActivo.categoria; 
    }
};
export const cerrarPopUp = ()=>{
    const popup = document.getElementById("modalPopUp");
    popup.style.display= 'none';
    setProductoActivo(null);
    resetModel();
};

const resetModel =() =>{
    const nombre = document.getElementById("nombre"),
    imagen = document.getElementById("imagen"),
    precio = document.getElementById("precio"),
    categoria = document.getElementById("categoria");
    nombre.value = '';
    imagen.value = '';
    precio.value = '';
    categoria.value = "Sin Seleccion";
};

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener('click', () => {
    handleButttonDelete();
    });
const handleButttonDelete = () =>{
    handleDeleteProduct();
}