import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from "@heroicons/react/24/solid";
/**
 w-full y h-full permite que el componente ocupe el espacio del padre donde este contenido  */
const Card = (data) =>{

    const context = useContext(ShoppingCartContext); //llama al contexto y lo incrusta dentro de la tarjeta

    const showProductDetail = (ProductDetail) => {
        context.openProductDetail();
        context.setProductToShow(ProductDetail);//asigna el objeto a mostrar cuando se hace click sobre la tarjeta o la imagen
    };

    return(
        <div 
            className="bg-slate-50 cursor-pointer w-56 h-60 rounded-lg " 
            onClick={() => showProductDetail(data.data) }
        >
            <figure className="relative mb-2 w-full h-4/5 ">
                <span className="absolute bottom-0 left-0 bg-white/60 text-black text-xs m-2 px-3 py-0.5 rounded-lg">{data.data.category.name}</span>
                <img className="w-full  h-full object-cover rounded-lg " 
                    src={data.data.images[1]} 
                    alt={data.data.title} />
                <div 
                    className="absolute top-0 right-0 items-center flex justify-center bg-green-600 w-6 h-6 rounded-full m-2 p-1"
                    onClick={() => context.setCount(context.count+1)}
                 >
                    <PlusIcon></PlusIcon>
                </div>
            </figure>
            <p className=" flex justify-between">
                <span className="text-sm font-light">{data.data.title}</span>
                <span className="text-lg font-medium">{data.data.price}</span>
            </p>
        </div>
    )
}
export default Card;