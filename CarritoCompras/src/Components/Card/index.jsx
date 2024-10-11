/**
 w-full y h-full permite que el componente ocupe el espacio del padre donde este contenido  */
const Card = () =>{
    return(
        <div className="bg-slate-50 cursor-pointer w-56 h-60 rounded-lg ">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 text-black text-xs m-2 px-3 py-0.5 rounded-lg">categoria</span>
                <img className="w-full  h-full object-cover rounded-lg" 
                    src="https://images.pexels.com/photos/25189329/pexels-photo-25189329/free-photo-of-pastel-de-taza-de-mango-de-verano-14.jpeg" alt="imagen" />
                <div className="absolute top-0 right-0 items-center flex justify-center bg-white w-6 h-6 rounded-full m-2 p-1">+</div>
            </figure>
            <p className=" flex justify-between">
                <span className="text-sm font-light">Articulo</span>
                <span className="text-lg font-medium">Precio</span>
            </p>
        </div>
    )
}
export default Card;