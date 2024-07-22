import PageTitle from "./PageTitle";

function Home() {
  return (
    <div className="p-4">
      <PageTitle title="Home" />
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-4">Bienvenido a Mi Tienda</h2>
        <p className="text-lg mb-4">
          En Mi Tienda encontrarás una amplia selección de productos para todas tus necesidades.
        </p>
        <p className="text-lg mb-4">
          Descubre nuestras últimas ofertas y novedades. ¡No te las pierdas!
        </p>
        <button className="px-4 py-2 bg-violet-500 text-white rounded-md shadow-md hover:bg-violet-600 transition-colors duration-300">
          Explora nuestros productos
        </button>
      </div>
    </div>
  );
}

export default Home;
