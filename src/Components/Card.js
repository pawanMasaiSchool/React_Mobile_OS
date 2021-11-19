import React from "react";
import Header from "./Header";
import Styles from "./Card.module.css";
import ListUL from "./ListUL";

function Card({ head, elems }) {
  return (
    <>
      <Header heading={head} />
      <ListUL elems={elems} />
    </>
  );
}

export default Card;
