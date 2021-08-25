import React from 'react';

const Egreso = ({ egreso }) => {

  const { descripcionEgreso, valorEgreso, id } = egreso;


  const eliminarEgreso = (id) => {
    console.log(id);
  }

  return (
    <li className="gastos animate__animated animate__fadeInUp">
      <p>
        {descripcionEgreso}
        <span className="gasto">
          S/ {valorEgreso}
          <span
            className="btn btn-danger mx-1"
            onClick={() => eliminarEgreso(id)}
          >
            Eliminar
          </span>
        </span>
      </p>
    </li>
  );
}

export default Egreso;