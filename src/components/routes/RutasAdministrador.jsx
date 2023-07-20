import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdministradorUsuarios from '../views/AdministrarUsuarios';
import AdministrarProducto from '../views/AdministrarProductos';
import AgregarProducto from "../views/producto/AgregarProducto";
import EditarProducto from "../views/producto/EditarProducto";
import AgregarUsuario from "../views/usuario/AgregarUsuario";
import EditarUsuario from "../views/usuario/EditarUsuario";
/* Falta administrar pedidos */
import Error404 from '../views/Error404';

const RutasAdministrador = () => {
    return(
        <>
        <Routes>
            <Route exact path='/' element={<AdministrarProducto></AdministrarProducto>}></Route>
            <Route exact path='/agregar-producto' element={<AgregarProducto></AgregarProducto>}></Route>
            <Route exact path='/editar-producto/:id' element={<EditarProducto></EditarProducto>}></Route>
            <Route exact path='/administrar-usuarios' element={<AdministradorUsuarios></AdministradorUsuarios>}></Route>
            <Route exact path='/administrar-usuarios/agregar-usuario' element={<AgregarUsuario></AgregarUsuario>}></Route>
            <Route exact path='/administrar-usuarios/editar-usuario/:id' element={<EditarUsuario></EditarUsuario>}></Route>
            <Route exact path='*' element={<Error404></Error404>}></Route>
        </Routes>
        </>
    )
}

export default RutasAdministrador;