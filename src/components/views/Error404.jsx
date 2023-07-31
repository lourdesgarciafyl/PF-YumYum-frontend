import { Button } from "react-bootstrap";
import error from "../../assets/error404.png";
import "../../css/error404.css";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="mainSection text-center fondoRojo ordenError">
      <img src={error} className="imagenError" alt="error 404" />
      <div>
        <h2 className="textoError"> OH NO! Ha ocurrido un error... </h2>
        <Link to="/" className="btn btn-warning mt-3 botonError">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
};

export default Error404;
