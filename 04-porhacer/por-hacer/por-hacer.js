const fs = require('fs');

let listadoPorhacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorhacer);
    fs.writeFile('bd/data.json', data, 'utf8', (err) => {
        if (err) {
            throw new Error('no se pudo guardar ', err);
        }

    });
}

const cargarDB = () => {
    try {
        listadoPorhacer = require('../bd/data.json');
    } catch (error) {
        listadoPorhacer = [];
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorhacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorhacer;
}

const actualizar = (descripcion, estado = true) => {
    cargarDB();
    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorhacer[index].completado = estado;
    }
    guardarDB();
    return listadoPorhacer[index];
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcion);
    let msg = 'no se pudo borrar';
    if (index >= 0) {
        listadoPorhacer.splice(index, 1);
        msg = 'se borro con exito ';
    }
    guardarDB();
    return msg;

}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}