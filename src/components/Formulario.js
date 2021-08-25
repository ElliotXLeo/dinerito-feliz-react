import React, { Fragment, useState } from 'react';
import shortid from 'shortid';
import Error from './Error';

const Formulario = ({ guardarEgreso, guardarCrearEgreso }) => {

  const [descripcionEgreso, guardarDescripcionEgreso] = useState('');
  const [valorEgreso, guardarValorEgreso] = useState(0);
  const [error, guardarError] = useState(false);

  const registrarEgreso = (e) => {
    e.preventDefault();
    if (descripcionEgreso.trim() === '' || valorEgreso <= 0 || isNaN(valorEgreso)) {
      guardarError(true);
      return;
    }
    guardarError(false);

    const egreso = {
      descripcionEgreso,
      valorEgreso,
      id: shortid.generate()
    }

    guardarEgreso(egreso);
    guardarCrearEgreso(true);

    guardarDescripcionEgreso('');
    guardarValorEgreso(0);
  }

  return (
    <Fragment>
      <h2>💰Registre sus egresos💰</h2>
      {
        error ?
          <Error
            mensaje="Todos los campos son obligatorios."
          />
          :
          null
      }
      <form
        className="my-3"
        onSubmit={registrarEgreso}
      >
        <div className="mb-3">
          <label htmlFor="descripcionEgreso" className="form-label">Ingrese descripción del egreso</label>
          <input
            type="text"
            className="form-control"
            id="descripcionEgreso"
            aria-describedby="textHelp"
            placeholder="Ingrese descripción del egreso"
            required
            value={descripcionEgreso}
            onChange={(e) => guardarDescripcionEgreso(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="valorEgreso" className="form-label">Ingrese el valor del egreso</label>
          <input
            type="number"
            className="form-control"
            id="valorEgreso"
            aria-describedby="numberHelp"
            placeholder="Ingrese el valor del egreso"
            required
            value={valorEgreso}
            onChange={(e) => guardarValorEgreso(parseInt(e.target.value))}
          />
        </div>

        <div className="d-grid gap-2 my-4">
          <button className="btn btn-primary" type="submit">💸 Registrar egreso 💸</button>
        </div>
      </form>
    </Fragment>
  );
}

export default Formulario;