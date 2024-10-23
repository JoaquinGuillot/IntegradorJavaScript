/*----------LOCALSTORAGE---------*/
export const handleGetProductLocalStorage = () =>{

    const products = JSON.parse(localStorage.getItem("products"));
    if(products){
        return products;
    }else{
        return [];
    }
}
/*-----GUARDAR LOCALSTORAGE-----*/

//Se recibe un producto
export const setLocalStorage = (productIn) =>  {
    let productInLocal = handleGetProductLocalStorage();

    const existingIndex = productInLocal.findIndex((productsLocal)=>
        productsLocal.id === productIn.id
        );
   //verifica si el elemento existe, sino lo agrega 
if (existingIndex !== -1){
    productInLocal[existingIndex] = productIn
    }else{
        productInLocal.push(productIn);
    }
    //se setea el array
    localStorage.setItem("products", JSON.stringify(productInLocal));
};