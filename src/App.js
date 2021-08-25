import { Fragment } from "react";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const company = {
    name: '💸Control de presupuesto💸',
    slogan: '💰Ten tu dinero bajo control.💰',
    comercialActivity: 'Contabilidad'
  }

  const author = 'Elliot Garamendi';

  const currentDate = new Date().getFullYear();

  return (
    <Fragment>
      <Header
        company={company}
      />

      <main>
        <section className="container">
          <div className="row align-items-start justify-content-around animate__animated animate__fadeInUp">
            <section className="col-md-12 my-2">
              <h1>Presupuesto</h1>
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
