import { Badge, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "../../css/inicio.css";

const Inicio = () => {
  return (
    <section className="text-center ">
      <div className="HeroSection position-relative">
        <img
          className="imagenHero"
          src="https://cdn.leonardo.ai/users/14881c64-1646-47cf-bbc7-c85d2eb01d50/generations/45d215bc-d916-4f6d-ada2-d7e20fefe3d3/Default_Deliciously_CraveWorthy_Sizzling_Pizzas_and_Juicy_Burg_1.jpg"
          alt="imagen de portada"
        />
      </div>

      <div className="container text-center"></div>
      <h1 className="mt-4 mb-3 ">Nuestro Menu</h1>

      <div className="row justify-content-center ">
        <Card className=" col-12 col-md-3 col-lg-3 ">
          <Card.Title>Pizza Napolitana</Card.Title>
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/dvcq6vatc/image/upload/v1689383714/yumyum/pizzaMuzzarela_rfihh1.png"
          />
          <Card.Body className="justify-content-between d-flex">
            <Badge className="btnPrecioCard letraAmarilla  p-2">$2999</Badge>

            <Button className="btnPedirCard letraAmarilla ">Pedir</Button>
          </Card.Body>
        </Card>
        <Card className=" col-12 col-md-3 col-lg-3 ">
          <Card.Title>Pizza Napolitana</Card.Title>
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/dvcq6vatc/image/upload/v1689383714/yumyum/pizzaMuzzarela_rfihh1.png"
          />
          <Card.Body className="justify-content-between d-flex">
            <Badge className="btnPrecioCard letraAmarilla  p-2">$2999</Badge>

            <Button className="btnPedirCard letraAmarilla ">Pedir</Button>
          </Card.Body>
        </Card>
        <Card className=" col-12 col-md-3 col-lg-3 ">
          <Card.Title>Pizza Napolitana</Card.Title>
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/dvcq6vatc/image/upload/v1689383714/yumyum/pizzaMuzzarela_rfihh1.png"
          />
          <Card.Body className="justify-content-between d-flex">
            <Badge className="btnPrecioCard letraAmarilla  p-2">$2999</Badge>

            <Button className="btnPedirCard letraAmarilla ">Pedir</Button>
          </Card.Body>
        </Card>
        <Card className=" col-12 col-md-3 col-lg-3 ">
          <Card.Title>Pizza Napolitana</Card.Title>
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/dvcq6vatc/image/upload/v1689383714/yumyum/pizzaMuzzarela_rfihh1.png"
          />
          <Card.Body className="justify-content-between d-flex">
            <Badge className="btnPrecioCard letraAmarilla  p-2">$2999</Badge>

            <Button className="btnPedirCard letraAmarilla ">Pedir</Button>
          </Card.Body>
        </Card>
        <Card className=" col-12 col-md-3 col-lg-3 ">
          <Card.Title>Pizza Napolitana</Card.Title>
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/dvcq6vatc/image/upload/v1689383714/yumyum/pizzaMuzzarela_rfihh1.png"
          />
          <Card.Body className="justify-content-between d-flex">
            <Badge className="btnPrecioCard letraAmarilla  p-2">$2999</Badge>

            <Button className="btnPedirCard letraAmarilla ">Pedir</Button>
          </Card.Body>
        </Card>
        
      </div>
    </section>
  );
};

export default Inicio;
