import { Fragment, useEffect, useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

import Swal from 'sweetalert2';

function App() {

  const company = {
    name: '💸Control de presupuesto💸',
    slogan: '💰Ten tu dinero bajo control.💰',
    comercialActivity: 'Contabilidad'
  }

  const author = 'Elliot Garamendi';

  const currentDate = new Date().getFullYear();

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarMostrarPregunta] = useState(true);
  const [egresos, guardarEgresos] = useState([]);
  const [egreso, guardarEgreso] = useState({});
  const [crearEgreso, guardarCrearEgreso] = useState(false);

  useEffect(() => {
    if (crearEgreso) {
      guardarEgresos([
        ...egresos,
        egreso
      ]);
      guardarCrearEgreso(false);

      const presupuestoRestante = restante - egreso.valorEgreso;
      guardarRestante(presupuestoRestante);
    }
  }, [crearEgreso, egreso, egresos, restante]);

  const eliminarEgreso = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-2',
        cancelButton: 'btn btn-danger mx-2'
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: '¿Estás segur@?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí, bórralo!',
      cancelButtonText: '¡No, cancélalo!',
      reverseButtons: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const egresosRestante = egresos.filter((egreso) => {
          if (egreso.id === id) {
            const presupuestoRestante = restante + egreso.valorEgreso;
            guardarRestante(presupuestoRestante);
          }
          return (egreso.id !== id);
        });
        guardarEgresos(egresosRestante);
        swalWithBootstrapButtons.fire(
          '¡Eliminado!',
          'Ha sido eliminado.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelad@',
          'Está seguro :)',
          'error'
        );
      }
    });
  }

  return (
    <Fragment>
      <Header
        company={company}
      />

      <main>
        <section className="container">
          <div className="row align-items-start justify-content-around animate__animated animate__fadeInUp">
            <section className="col-md-12 my-2">
              <div className="contenido-principal">
                {
                  mostrarPregunta
                    ? (
                      <Pregunta
                        guardarPresupuesto={guardarPresupuesto}
                        guardarRestante={guardarRestante}
                        actualizarMostrarPregunta={actualizarMostrarPregunta}
                      />
                    )
                    : (
                      <div className="row align-items-start justify-content-around animate__animated animate__fadeInUp">
                        <section className="col-md-5 my-2">
                          <Formulario
                            guardarEgreso={guardarEgreso}
                            guardarCrearEgreso={guardarCrearEgreso}
                          />
                        </section>

                        <section className="col-md-5 my-2">
                          <Listado
                            egresos={egresos}
                            eliminarEgreso={eliminarEgreso}
                          />
                          <ControlPresupuesto
                            presupuesto={presupuesto}
                            restante={restante}
                          />
                        </section>
                      </div>
                    )
                }
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer
        author={author}
        currentDate={currentDate}
      />
    </Fragment >
  );
}

export default App;
