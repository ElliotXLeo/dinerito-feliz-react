import React from "react";

function Header({ company }) {

  const { name, slogan, comercialActivity } = company;

  return (
    <header className="header animate__animated animate__fadeInUp">
      <h1>{comercialActivity}</h1>
      <h2 className="header__name">{name}</h2>
      <p>{slogan}</p>
    </header>
  );
}

export default Header;
