import { Col, Card, Button, Badge } from "react-bootstrap";

const CardProductoInicio = () => {
  return (
    <Col md={6} lg={3} className="mb-3">
      <Card className="">
        <Card.Title>Pizza Muzzarella</Card.Title>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/dvcq6vatc/image/upload/v1689383714/yumyum/pizzaMuzzarela_rfihh1.png"
        />
        <Card.Body className="d-flex justify-content-between w-100">
          <div className="justify-content-between w-100 d-flex">
            <Badge  className="fs-4 precio">$2999</Badge>
            <Button variant="danger" className="rounded-5 btnPrecioCard">
              Pedir
            </Button>{" "}
          </div>
        </Card.Body>
        
      </Card>
    </Col>
  );
};

export default CardProductoInicio;
