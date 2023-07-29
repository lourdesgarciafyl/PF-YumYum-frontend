import { Navigate } from "react-router-dom";

const RutasProtegidasCliente = ({children, usuario}) => {
    if(usuario.perfil === "Cliente" || usuario.perfil === "Administrador" ){
        return children;
    } else{
        return <Navigate to={"/registro"}></Navigate>
    }
}

export default RutasProtegidasCliente;