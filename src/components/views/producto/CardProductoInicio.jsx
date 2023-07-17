import { Col, Card, Button } from "react-bootstrap";

const CardProductoInicio = () => {
  return (
    <Col md={4} ld={3} className="mb-3">
      <Card>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/dvcq6vatc/image/upload/v1689383714/yumyum/pizzaMuzzarela_rfihh1.png"
        />
        <Card.Body>
          <Card.Title>Pizza Muzzarella</Card.Title>
          <Card.Text>$2999</Card.Text>
          <Button variant="primary">Ver detalle</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProductoInicio;