import { Fragment, useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Pregunta from "./components/Pregunta";

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
                <Pregunta 
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                />
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
