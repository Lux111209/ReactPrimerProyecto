import React from "react";


const Card = ({ nombre, edad, colegio, sangre, hobbies, materia, color }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 text-center">{nombre}</h2>
      <p className="text-gray-600 text-center">Edad: {edad}</p>
      <p className="text-gray-600 text-center">Colegio: {colegio}</p>
      <p className="text-gray-600 text-center">Tipo de Sangre: {sangre}</p>
      <p className="text-gray-600 text-center">Hobbies: {hobbies.join(", ")}</p>
      <p className="text-gray-600 text-center">Materia Favorita: {materia}</p>
      <p className="text-gray-600 text-center">Color Favorito: {color}</p>
    </div>
  );
};

export default Card;