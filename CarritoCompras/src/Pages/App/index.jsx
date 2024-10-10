import { useRoutes,BrowserRouter } from "react-router-dom";
import './App.css'
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";

const AppRoutes = () => {
  let routes = useRoutes([ //se crea objeto routes, que usa el objeto que importamos (useRoutes)
    //path: ruta que queremos que tenga
    //element: elemento o etiqueta del componente
    { path :"/",element: <Home />},
    { path :"/my-account",element: <MyAccount />},
    { path :"/my-order",element: <MyOrder />},
    { path :"/my-orders",element: <MyOrders />},
    { path :"/*",element: <NotFound />},
    { path :"/sign-in",element: <SignIn />}, 
  ]);

  return routes;
};

//se usa como constante tipo funcion flecha para usar la funcion en varias partes
//browserrouter concume las rutas
const App = () => {


  return (

    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>

  )
}

export default App
