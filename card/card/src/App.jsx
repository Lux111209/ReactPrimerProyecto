import React from "react";
import Card from "./components/Card.jsx";
import './index.css'

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card 
        nombre="Luz María Gasparío Méndez"
        edad={18}
        colegio="Instituto Técnico Ricaldone"
        sangre="ORH+"
        hobbies={["Volleyball", "Cocinar", "Salir con amigos"]}
        materia="Matemática y Ciencias"
        color="Azul Marino"
      />
    </div>
  );
};

export default App;