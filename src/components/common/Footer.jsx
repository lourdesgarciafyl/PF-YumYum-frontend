import "../../css/footer.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="fondoGrisClaro letraGrisOscuro">
      <section className="ordenFooter">
        <article>
          <h5> Redes sociales </h5>
          <div className="d-flex justify-content-evenly">
            <i className="bi bi-instagram"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
          </div>
        </article>
        <article>
          <img
            className="logo m-2"
            src="../../src/assets/LogoYumFooter.svg"
            alt="logo YumYum"
          />
        </article>
        <article className="text-center">
          <h5> Sobre nosotros </h5>
          <h5> Contactanos </h5>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
