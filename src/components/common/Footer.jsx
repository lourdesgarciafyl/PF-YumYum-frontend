import "../../css/footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import logoFooter from "../../assets/LogoYumFooter.svg"

const Footer = () => {
  return (
    <footer className="bg-dark letraGrisOscuro">
      <section className="ordenFooter">
        <article>
          <h5 className="letraAmarilla"> Redes sociales </h5>
          <div className="d-flex justify-content-evenly">
            <Link to={"/error404"} className="letraAmarilla">
              {" "}
              <i className="bi bi-instagram"></i>{" "}
            </Link>
            <Link to={"/error404"} className="letraAmarilla">
              {" "}
              <i className="bi bi-facebook"></i>{" "}
            </Link>
            <Link to={"/error404"} className="letraAmarilla">
              {" "}
              <i className="bi bi-twitter"></i>{" "}
            </Link>
          </div>
        </article>
        <article>
          <img
            className="logo m-2"
            src={logoFooter}
            alt="logo YumYum"
          />
        </article>
        <article className="text-center">
          <h5>
            {" "}
            <Link
              to={"/nosotros"}
              className="text-decoration-none letraAmarilla"
            >
              {" "}
              Sobre nosotros{" "}
            </Link>{" "}
          </h5>
          <h5>
            {" "}
            <Link
              to={"/error404"}
              className="text-decoration-none letraAmarilla"
            >
              {" "}
              Contactanos{" "}
            </Link>{" "}
          </h5>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
