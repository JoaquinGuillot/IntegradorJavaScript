/*-----------CATEGORIA-------------*/

import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistance/localstorage";
import { handleRenderList } from "../views/store";

const handleFilterProductsByCategory = (categoria) =>{
    const products = handleGetProductLocalStorage();

    switch(categoria){
        case categoriaActiva:
            handleRenderList(products)
            break;
            case "Todo":
            handleRenderList(products)
            break;
            case "Hamburguesas":
            case "Papas":
            case "Gaseosas":
                const result = products.filter((el)=> el.categoria=== categoria)
                handleRenderList(result);
            default:
                break;
            case "mayorPrecio":
                const resultPrecioMayor = products.sort((a,b)=>b.precio - a.precio);
                handleRenderList(resultPrecioMayor);
                break;
            case "menorPrecio":
                const resultPrecioMenor = products.sort((a,b)=>a.precio - b.precio);
                handleRenderList(resultPrecioMenor);
                break;
    }
}
export const renderCategorias = () =>{
    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
    <li class = "liActive" id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor Precio</li>
    <li id="menorPrecio">Menor Precio</li>
    `;
    //Se añade de forma din'amica elemento "Click"
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach(element => {
        element.addEventListener('click', ()=>{
            handlerClick(element)
        })
    });
    //Se especifica la funcion del click nen los elementos
    const handlerClick =(elemento) =>{
        handleFilterProductsByCategory(elemento.id);
        liElements.forEach((el)=>{
            if(el.classList.contains('liActive')){
                el.classList.remove('liActive')
            }else{
                if(elemento=== el)
                    el.classList.add('liActive')
            }
        })
    }           

}