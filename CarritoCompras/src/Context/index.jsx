import { createContext, useState } from "react";


export const ShoppingCartContext = createContext()//almacena el contexto

export const ShoppingCartProvider = ({children}) =>{

    const [count, setCount] = useState(null); //el null dice que va a recibir cualquiet tipo de datos
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);//el valor dentro de parentesis es el valor inicial de las variables (false) en este caso es false

    const openProductDetail = () =>setIsProductDetailOpen(true);
    const closeProductDetail = () =>setIsProductDetailOpen(false);

    //objeto a mostrar al hacer clic sobre la imagen
    const [productToShow,setProductToShow] = useState({});//state de un objeto



    //vamos a ser proveedores del contexto
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            setIsProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}