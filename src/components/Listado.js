import React from 'react';
import Egreso from './Egreso';

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

export default Listado;