import React from "react";
import Styles from "./Header.module.css";

function Header({ heading }) {
  return <h1 className={Styles.Headings}>{heading}</h1>;
}

export default Header;
