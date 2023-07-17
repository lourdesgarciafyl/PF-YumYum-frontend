import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import "../../css/inicio.css";

const Inicio = () => {
  return (
    <section className="text-center my-5 d-flex container">
      <div className="row justify-content-center align-items-center">
      <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Pizza Napolitana</Card.Title>
        <Card.Text>
         Pizza Napolitana con queso, ajo, tomate y albhaca.
        </Card.Text>

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>



      
    </Card>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </section>
  );
};

export default Inicio;
