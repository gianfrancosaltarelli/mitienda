import { useState, useEffect } from "react";
import PageTitle from "./PageTitle";

function DetalleContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("url_de_tu_api");
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <PageTitle title="Detalle" />
      {isLoading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Ocurrió un error: {error}</p>
      ) : (
        <div>
          {data && (
            <div>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default DetalleContainer;
