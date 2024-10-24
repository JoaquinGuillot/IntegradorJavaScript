/*-------STORE---------*/

import { handleGetProductLocalStorage } from "../persistance/localstorage"
import { abrirPopUp } from "../services/popup";
import { setProductoActivo } from "../services/products";

export const handleGetProductToStore =() =>{
    const products = handleGetProductLocalStorage();
    handleRenderList(products);

};
//filtra y renderiza  la lista de productos

export const handleRenderList = (productsIn) => {
    const burguers = productsIn.filter((el) => el.categoria === "Hamburguesas");
    const papas = productsIn.filter((el) => el.categoria === "Papas");
    const gaseosas = productsIn.filter((el) => el.categoria === "Gaseosas");
//filtrado de arrays por cat
    const renderProductGroup = (productos, title)=>{
        if( productos.length>0){
           const productosHTML = productos.map((producto, index) =>{
            return `<div 
            class='containerTargetItem' 
            id='product-${producto.categoria}-${index}'>
                    <div>
                        <img src='${producto.imagen}'/>                        
                    </div>
                    <div>
                        <h2>${producto.nombre}</h2>                       
                    </div>
                    <div class='targetProps'>
                    <p><b>Precio: </b>$ ${producto.precio}</p>
                    </div>
                </div>`
           });
           return `
           <section class='sectionStore'>
                <div  class='containerTitleSection'>

                <h3>${title}</h3>
                </div>
                <div class='containerProducstore'>
                ${productosHTML.join('')}
                </div>
           </section>
           `;
        }else{
            return "";
        }
    }
    //render de los productos en su categoría
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
    ${renderProductGroup(burguers,"Hamburguesas")}
    ${renderProductGroup(papas,"Papas")}
    ${renderProductGroup(gaseosas,"Gaseosas")}
    `;
   /* const addEvents =(productsIn)=>{
        productsIn.forEach((element,index) => {
            const productContainer = document.getElementById(`
                product-${element.categoria}-${index}
                `)
                productContainer.addEventListener("click", () => {
                    console.log('Producto', element);
                });
        });
    }*/
        const addEvents = (productsIn) => {
            productsIn.forEach((element, index) => {
                const productContainer = document.getElementById(`product-${element.categoria}-${index}`);
                if (productContainer) {
                    productContainer.addEventListener("click", () => {
                      setProductoActivo(element);
                      abrirPopUp();
                    });
                } else {
                    console.error(`El elemento con ID product-${element.categoria}-${index} no existe.`);
                }
            });
        };
    addEvents(burguers);
    addEvents(papas);
    addEvents(gaseosas);
};