import React from 'react';
import PropTypes from 'prop-types';
import {revisarPresupuesto} from '../Helpers';

const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <section>
      <div className="alert alert-primary" role="alert">
        Presupuesto: S/ {presupuesto}
      </div>
      <div className={revisarPresupuesto(presupuesto, restante)} role="alert">
        Restante: S/ {restante}
      </div>
    </section>
  );
}

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired
}

export default ControlPresupuesto;