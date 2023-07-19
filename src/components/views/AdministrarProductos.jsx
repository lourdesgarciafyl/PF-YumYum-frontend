import { Container, Row, Button } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import "../../css/itemProducto.css"

const AdministrarProducto = () => {

    return(
        <Container className="my-2 mainSection">
            <h1 className="text-center letraSpace letraAmarilla fs-1">Administrar productos</h1>
            <div className="d-flex justify-content-center my-3">
             <Button className="btnAgregarProducto">Agregar nuevo producto</Button>
            </div>
            <Row>
                <ItemProducto></ItemProducto>
                <ItemProducto></ItemProducto>
                <ItemProducto></ItemProducto>
                <ItemProducto></ItemProducto>
                <ItemProducto></ItemProducto>
                <ItemProducto></ItemProducto>
                <ItemProducto></ItemProducto>
                <ItemProducto></ItemProducto>
                <ItemProducto></ItemProducto>  
            </Row> 
        </Container>
    )
}

export default AdministrarProducto;