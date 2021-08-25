import React from 'react';

const Egreso = ({ egreso, eliminarEgreso }) => {

  const { descripcionEgreso, valorEgreso, id } = egreso;

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