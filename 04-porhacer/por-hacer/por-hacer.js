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
const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorhacer.push(porHacer);
    guardarDB();
    return porHacer;
}

module.exports = {
    crear
}