import Styles from "./ListUL.module.css";
import LI from "./ListItem";

function ListUL({ elems }) {
  return (
    <>
      <div className={Styles.UL}>
        <LI name={elems[0]} />
        <LI name={elems[1]} />
        <LI name={elems[2]} />
        <LI name={elems[3]} />
      </div>
    </>
  );
}

export default ListUL;
