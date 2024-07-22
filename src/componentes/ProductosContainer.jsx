import { useEffect, useState } from "react";
import Productos from "./Productos";
import { useParams } from "react-router-dom";
import PageTitle from "./PageTitle";

function obtenerProductos(categoria) {
  const url = categoria ? `https://dummyjson.com/products/category/${categoria}` : 'https://dummyjson.com/products';
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.products)
    .catch((error) => {
      console.error('Error al obtener productos:', error);
      return [];
    });
}

function ProductosContainer() {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    obtenerProductos(id)
      .then((productos) => setProductos(productos))
      .catch((error) => {
        console.error('Error al obtener productos:', error);
      });
  }, [id]);

  return (
    <>
      <PageTitle title="Productos" />
      <Productos productos={productos} />
    </>
  );
}

export default ProductosContainer;
