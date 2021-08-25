import React from 'react';
import Egreso from './Egreso';
import PropTypes from 'prop-types';

const Listado = ({ egresos, eliminarEgreso }) => {

  const titulo = egresos.length === 0 ? '💸Registra tu egreso💸' : '💸Administrar egresos💸';

  return (
    <section className="gastos-realizados">
      <h2>{titulo}</h2>
      {egresos.map((egreso) => {
        return (
          <Egreso
            key={egreso.id}
            egreso={egreso}
            eliminarEgreso={eliminarEgreso}
          />
        );
      })}
    </section>
  );
}

Listado.propTypes = {
  egresos: PropTypes.array.isRequired,
  eliminarEgreso: PropTypes.func.isRequired
}

export default Listado;