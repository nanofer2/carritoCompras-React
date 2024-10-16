//   useEffect permite declarar los eventos de consumo hacer peticiones a un API
import { useState, useEffect } from "react"; //useEffect permite declarar los eventos de consumo (para hacer peticiones a un API)
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  /*
    estados: a state llegan los request y State hace la promesa que va a devolver lo que se pide en el request.
    Contextos: 
  */
  // useState puede usar objetos useState(Obj) si no se recibe algo especifico se deja null
  const [items, setItems] = useState(null); //el null dice que va a recibir cualquiet tipo de datos
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products") //peticion
      .then((response) => response.json()) //aqui llega una promesa pero hay que hacer otro then para poder acceder a los datos
      .then((data) => setItems(data)); //lo que trae del llamado del API se le va a asignar a data y la data se le va a asignar a setItems
  },[]); // el [] final asegura que si la peticion no retorna nada debde devolver un vacio

  //el Layout creado permite contener la informacion que le enviemos dentro
  return (
    <Layout>
      Home!
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          /** ? = si vienen items */
          //por cada item debe crear una tarjeta

          items?.map((item) => (
            <Card key={item.id} data={item} />
          ))
          /*          items?.map(()=>(
            
            <Card></Card>
            console.log("***************")
            console.log(items)
          )
          )*/
        }
      </div>
      <ProductDetail/>
    </Layout>
  );
}

export default Home;
