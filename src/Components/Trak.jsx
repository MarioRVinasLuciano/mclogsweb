import React, { useState } from "react";

export default function Tracker({ onSearch }) {
  const [valor, setValor] = useState("");

  const handleChange = (e) => {
    setValor(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
        onSearch(valor);
    }
  };

  const handleSearch = () => {
    onSearch(valor);
  };

  console.log(valor);
  return (
    <div className="w-full backdrop-blur h-72 bg-white/40 rounded-lg items-center" >
      <div className="p-4">
        <h2 className="text-2xl contrast-100">Rastrear embarque</h2>
      </div>
      <div className="flex flex-row text-white">
        <input
          className="h-12 w-full rounded-lg px-2 m-2 ml-4 text-black"
          placeholder="Contenedor / Conocimiento de embarque / Referencia / Orden"
          value={valor}
          onChange={handleChange}
          onKeyDown={handleEnter} // Moved from button to input
        ></input>
        <button
          className="bg-blue-500 hover:bg-blue-600 p-2 m-2 rounded-md"
          onClick={handleSearch}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
      </div>

      <div className="flex pt-5 m-4">
        <div className="pr-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
        </div>
        <div>
          <p className="text-black">
            Rastree su carga ingresando su número de contenedor, conocimiento de embarque,
            orden o referencia para obtener información de seguimiento de carga instantánea
          </p>
        </div>
      </div>
    </div>
  );
}
