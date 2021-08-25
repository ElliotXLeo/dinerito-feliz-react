import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

import Error from './Error';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarMostrarPregunta }) => {

  const [cantidad, guardarCantidad] = useState(0);
  const [error, guardarError] = useState(false);

  const registrarPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value));
  };

  const agregarPresupuesto = (e) => {
    e.preventDefault();
    if (cantidad <= 0 || isNaN(cantidad)) {
      guardarError(true);
      return;
    }
    guardarError(false);

    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarMostrarPregunta(false);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Registrado!',
      showConfirmButton: false,
      timer: 1000,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  }

  return (
    <Fragment>
      <h2>Presupuesto</h2>
      {
        error ?
          <Error
            mensaje="El presupuesto debe ser un número mayor a 0."
          />
          :
          null
      }
      <form
        className="my-3"
        onSubmit={agregarPresupuesto}
      >
        <div className="mb-3">
          <label htmlFor="presupuesto" className="form-label">Ingrese su presupuesto</label>
          <input
            type="number"
            className="form-control"
            id="presupuesto"
            aria-describedby="numberHelp"
            placeholder="Ingrese su presupuesto"
            required
            onChange={registrarPresupuesto}
          />
        </div>

        <div className="d-grid gap-2 my-4">
          <button className="btn btn-primary" type="submit">💸 Registrar presupuesto 💸</button>
        </div>
      </form>
    </Fragment>
  );
}

Pregunta.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  actualizarMostrarPregunta: PropTypes.func.isRequired
}

export default Pregunta;