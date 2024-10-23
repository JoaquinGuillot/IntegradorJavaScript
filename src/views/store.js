/*-------STORE---------*/

import { handleGetProductLocalStorage } from "../persistance/localstorage"

export const handleGetProductToStore =() =>{
    const products = handleGetProductLocalStorage();
    handleRenderList(products);

};

export const handleRenderList = (productsIn) => {
    const burguers = productsIn.filter((el) => el.categoria === "Hamburguesas");
    const papas = productsIn.filter((el) => el.categoria === "Papas");
    const gaseosas = productsIn.filter((el) => el.categoria === "Gaseosas");

    const renderProductGroup = (productos, title)=>{
        if( productos.length>0){
           const productosHTML = productos.map((producto, index) =>{
            return `<div id='product-${producto.categoria}-${index}'>
                    <div>
                        <img src=${producto.imagen}/>                        
                    </div>
                    <div>
                        <h2>${producto.nombre}</h2>                       
                    </div>
                    <div>
                    <p><b>Precio: </b>$ ${producto.precio}</p>
                    <p><b>Categoria: </b> ${producto.categoria}</p>
                    </div>
                </div>`
           });
           return `
           <section>
                <h3>${title}</h3>
                <div>
                ${productosHTML.join('')}
                </div>
           </section>
           `;
        }else{
            return "";
        }
    }

    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
    ${renderProductGroup(burguers,"Hamburguesas")}
    ${renderProductGroup(papas,"Papas")}
    ${renderProductGroup(gaseosas,"Gaseosas")}
    `;
    const addEvents =(productsIn)=>{
        productsIn.array.array.forEach((element,index) => {
            const productContainer = document.getElementById(`
                product-${element.categoria}-${index}
                `)
                productContainer.addEventListener("click", () => {
                    console.log('Producto', element);
                });
        });
    }
    addEvents(burguers);
    addEvents(papas);
    addEvents(gaseosas);
};