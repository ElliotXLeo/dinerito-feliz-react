import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ currentDate, author }) => {
  return (
    <footer className="footer animate__animated animate__fadeInUp">
      <p>🦄Copyright &copy; {currentDate} {author}. Todos los derechos reservados.🦄</p>
    </footer>
  );
}

Footer.propTypes = {
  currentDate: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired
}

export default Footer;

