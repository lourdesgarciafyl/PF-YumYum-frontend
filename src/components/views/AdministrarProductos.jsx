import { Container, Row, Button } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import "../../css/itemProducto.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { obtenerListaProductos } from "../helpers/queriesProducto";

const AdministrarProducto = () => {

    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        obtenerListaProductos().then((respuesta) => {
            setProductos(respuesta)
        })
    }, [])

    return(
        <Container className="mainSection">
            <h1 className="text-center letraSpace letraAmarilla fs-1 mt-md-4 mt-lg-5">Administrar productos</h1>
            <div className="d-flex justify-content-center">
             <Button className="btnAgregarProducto" as={Link} to={"/administrar/productos/agregar-producto"}>Agregar nuevo producto</Button>
            </div>
            <Row>
            {
                productos.map((producto)=><ItemProducto key={producto._id} index={producto._id} producto={producto} setProductos={setProductos}></ItemProducto> )
            }
            </Row> 
        </Container>
    )
}

export default AdministrarProducto;