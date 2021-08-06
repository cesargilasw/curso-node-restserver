
const { response } = require('express');

const usuariosGet = (req = request, res = response ) => {
    const { q, nombre = 'No Name', apikey, page = 1, limit } = req.query;
    res.json({
        msg: 'Get World - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPost = (req, res = response ) => {
    const {nombre, edad} = req.body;
    res.json({
        msg: 'Post World - Controlador',
        nombre: nombre,
        edad: edad
    });
}

const usuariosPut = (req, res = response ) => {
    const id = req.params.id;

    res.json({
        msg: 'Put World - Controlador',
        id: id
    });
}

const usuariosPatch = (req, res = response ) => {
    
    res.json({
        msg: 'Patch World - Controlador'
    });
}

const usuariosDelete = (req, res = response ) => {
    
    res.json({
        msg: 'Delete World - Controlador'
    });
}








module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

}