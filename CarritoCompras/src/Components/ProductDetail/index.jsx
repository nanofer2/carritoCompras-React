//componente que va a mostrar los detalles de los productos que se clickeen
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import "./styles.css";
import { XMarkIcon } from "@heroicons/react/24/solid"; //importo el icono de la X
const ProductDetail = () => {
  const context = useContext(ShoppingCartContext); //llama al contexto y lo inclusta dentro de la tarjeta para usar lo que hay en el contexto
  console.log("producto que llega: ", context.productToShow); //producto enviado desde el componente card

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Estado para la imagen actual
  const images = context.productToShow?.images || []; // Asegura que hay un array de imágenes

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden" //juego con las variables del contexto para seleccionar el estilo deseado
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detalle</h2>
        <div>
          <XMarkIcon
            onClick={() => context.closeProductDetail()}
            className="h-6 w-6 text-white bg-red-600 rounded-full cursor-pointer"
          ></XMarkIcon>
        </div>
      </div>

      {/*  Carrusel de las imagenes */}
      <figure className="px-6 mb-2 w-full h-64">
        {images.length > 0 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute top-1/3 left-0 transform -translate-y-1/2 ml-2 bg-gray-700 text-white rounded-full p-2"
            >
              &#10094;
            </button>
            <img 
              src={images[currentImageIndex]}
              alt={`Imagen ${currentImageIndex + 1}`}
              className="w-full  h-full rounded-lg  object-contain"
            />
            <button
              onClick={nextSlide}
              className="absolute top-1/3 right-0 transform -translate-y-1/2 mr-2 bg-gray-700 text-white rounded-full p-2"
            >
              &#10095;
            </button>
          </>
        )}
      </figure>
      <p className="flex flex-col p-4">
        <span className="font-medium text-2xl">${context.productToShow.price}</span>
        <span className="font-medium text-md">{context.productToShow.title}</span>
        <span className="font-light">{context.productToShow.description}</span>
        <span className=""></span>
      </p>
    </aside>
  );
};

export default ProductDetail;
