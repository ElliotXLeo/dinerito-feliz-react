import React from 'react';
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

export default ControlPresupuesto;