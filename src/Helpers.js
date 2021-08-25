export const revisarPresupuesto = (presupuesto, restante) => {
  let clase;

  if (restante >= presupuesto * 0.75) {
    clase = 'alert alert-success';
  } else if (restante >= presupuesto * 0.5) {
    clase = 'alert alert-warning';
  } else if (restante >= presupuesto * 0.25) {
    clase = 'alert alert-danger';
  } else {
    clase = 'alert alert-dark';
  }

  return clase;
};