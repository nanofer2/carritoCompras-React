import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

/** 
 .justify-between {
    justify-content: space-between;
}
  
*/
const Navbar = () => {
    const context = useContext(ShoppingCartContext); //llama al contexto y lo inclusta dentro de la tarjeta para usar lo que hay en el contexto
  return (
            /**
         el estilo aplicado (style) pone en negrita la ganina en la que estoy parado
         Justify-between divide los items por cada <li>
         w-full es un width de 100% 
         fixed  queda fijado en la seccion de arriba
         z es igual al zindex para que no se pierda la barra de navegacion 
         py es el paginado en el eje y 
         px paginado en el eje x 
         gap-3 separacion entre items
         * **/
    <nav className="flex justify-between items-center fixed z-10 w-full py-8 px-8 text-sm font-light top-0">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to="/"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            {" "}
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Ropa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Electronicos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Otros
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li>
          <NavLink
            to="/my-account"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Mi cuenta
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-orders"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Mis Ordenes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Registrarse
          </NavLink>
        </li>
        <li className="flex items-center">
          <NavLink
            to="/others"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            <ShoppingBagIcon className="h-6 w-6 text-blue-500"></ShoppingBagIcon> 
          </NavLink>
          <div>{context.count}</div> 
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
