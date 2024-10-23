
export const renderCategorias = () =>{
    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
    <li class = "liActive" id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="Mayorprecio">Mayor Precio</li>
    <li id="Menorprecio">Menor Precio</li>
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