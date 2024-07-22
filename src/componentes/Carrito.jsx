import { useState } from "react";
import Input from "./Input";

const Carrito = () => {
  const [inputLength, setInputLength] = useState(0);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleStateUplifting = (inputLength) => {
    setInputLength(inputLength);
    setError(inputLength > 10);
  };

  return (
    <div>
      <h2>Carrito</h2>
      <p>El input hijo tiene {inputLength} caracteres</p>
      {error && (
        <p className="text-sm font-bold text-red-500">Te pasaste de 10 caracteres</p>
      )}
      <form onSubmit={handleSubmit}>
        <Input onStateUplifting={handleStateUplifting} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Carrito;
