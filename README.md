# Mi Tienda - E-commerce

**Mi Tienda** es una aplicación de comercio electrónico que permite a los usuarios explorar productos, ver detalles, y agregar artículos al carrito. Utiliza React, Vite.js, y Tailwind CSS para una experiencia rápida y moderna.

## Funcionalidades

- **Explorar Productos:** Navega por una variedad de productos disponibles en diferentes categorías.
- **Detalles del Producto:** Visualiza detalles completos del producto seleccionando "Agregar al carrito".
- **Agregar al Carrito:** Añade productos al carrito de compras.
- **Carrito de Compras:** Visualiza los productos añadidos al carrito.

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/mi-tienda.git
    cd mi-tienda
    ```

2. **Instala las dependencias:**
    ```bash
    npm install
    ```

3. **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

   El proyecto estará disponible en `http://localhost:3000` por defecto.

## Estructura del Proyecto

- **`src/`** - Contiene todos los archivos fuente del proyecto.
  - **`components/`** - Componentes reutilizables como `Button`, `Header`, `Footer`, etc.
  - **`pages/`** - Componentes de páginas principales como `Home`, `ProductosContainer`, `Carrito`, etc.
  - **`context/`** - Contexto para el carrito de compras.
  - **`utils/`** - Utilidades y funciones auxiliares.

## Uso

### Componentes

- **Button.jsx:** Componente de botón reutilizable con varias variantes.
- **Carrito.jsx:** Muestra el contenido del carrito y permite el manejo de inputs.
- **DetalleContainer.jsx:** Muestra los detalles del producto seleccionado.
- **Footer.jsx:** Pie de página de la aplicación.
- **Header.jsx:** Cabecera con navegación y búsqueda.
- **Home.jsx:** Página principal de bienvenida.
- **Input.jsx:** Componente de input con manejo de estado.
- **Main.jsx:** Contiene las rutas principales de la aplicación.
- **NavBar.jsx:** Barra de navegación con enlaces a diferentes secciones.
- **PageTitle.jsx:** Componente para mostrar títulos de páginas.
- **Productos.jsx:** Lista de productos con opción para agregar al carrito.
- **ProductosContainer.jsx:** Contenedor para obtener y mostrar productos según la categoría.

### Contexto del Carrito

- **CarritoContext.jsx:** Contexto para manejar el estado del carrito y la función `agregarAlCarrito`.

## Tecnologías Utilizadas

- **React:** Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite.js:** Herramienta de construcción rápida para aplicaciones web.
- **Tailwind CSS:** Framework de CSS para diseño basado en utilidades.
