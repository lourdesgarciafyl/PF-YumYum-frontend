import { Navigate } from "react-router-dom";

const RutasProtegidasCliente = ({children, usuario}) => {
    if(usuario.perfil === "Cliente"){
        return children;
    } else if(usuario.perfil === "Administrador"){
        return <Navigate to={"/*"}></Navigate>
    } else{
        return <Navigate to={"/registro"}></Navigate>
    }
}

export default RutasProtegidasCliente;