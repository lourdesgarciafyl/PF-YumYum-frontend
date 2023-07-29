import { Route, Routes } from "react-router-dom";
import CarritoPedido from "../views/CarritoPedido";
import Error404 from "../views/Error404";

const RutasCliente = ({usuario, totalProductos, carrito, setCarrito}) => {
    return(
        <Routes>
            <Route exact path="/pedido" element={<CarritoPedido usuario={usuario} carrito={carrito} setCarrito={setCarrito} totalProductos={totalProductos}></CarritoPedido>}></Route>
            <Route exact path="*" element={<Error404></Error404>}></Route>
        </Routes>
    )
}

export default RutasCliente