/*-----------PRODUCTOS-----------*/
//Alta o modificacion de elementos

import { handleGetProductLocalStorage, setLocalStorage } from "../persistance/localstorage";
import { handleGetProductToStore, handleRenderList } from "../views/store";
import { cerrarPopUp } from "./popup";
import Swal from "sweetalert2";
//GUARDAR
const  acceptSave = document.getElementById("acceptButton");
acceptSave.addEventListener('click', () => {
    handleElements();
    });

const handleElements = ()=>{
  const nombre = document.getElementById("nombre").value,
  imagen = document.getElementById("imagen").value,
  precio = document.getElementById("precio").value,
  categoria = document.getElementById("categoria").value;
    let object=null;
    if (!nombre || !imagen || !precio || categoria === "Sin Seleccion") {
      // Mostrar notificación
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Campos sin rellenar!",
        footer: 'Por complete todos los campos y seleccione categoría.'
      });
    }else if(productoActivo){
      object = {
          ...productoActivo,
          nombre,
          imagen,
          precio,
          categoria
      }
      Swal.fire({
        title: "Articulo Guardado!",
        text: "Articulo modificado correctamente!",
        icon: "success"
      });

    }else{
      object = {
          id: new Date().toISOString(),
          nombre,
          imagen,
          precio,
          categoria
        };
        Swal.fire({
          title: "Articulo Guardado!",
          text: "Articulo guardado correctamente!",
          icon: "success"
        });
 
};
setLocalStorage(object);
handleGetProductToStore();
cerrarPopUp();
};

//Tuve que ubicar las siguientes funciones al final por  que se ejecutaban antes de que se creara el objeto productoActivo

/*APLICACIÓN*/

export let productoActivo = null;
export const setProductoActivo =  (producto) => {
    productoActivo = producto;
};

//eliminar elemento
export const handleDeleteProduct = ()  => {

  Swal.fire({
    title: "¿Desea eliminar el artículo?",
    text: "Esta operacion es irreversible!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, borrar!",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Borrado!",
        text: "El producto ha sido borrado correctamente.",
        icon: "success"
        
      });
      const products = handleGetProductLocalStorage();
      const result = products.filter((el)=> el.id !==  productoActivo.id);
      localStorage.setItem("products", JSON.stringify(result));
      const newProducts = handleGetProductLocalStorage();
      handleRenderList(newProducts);
      cerrarPopUp();
    }else{
      cerrarPopUp();
    }
  });

 
};
