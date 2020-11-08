const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
console.log(argv);

let comando = argv._[0];
switch (comando) {
    case 'crear':
        // console.log('crear');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break
    case 'listar':
        // console.log('listar');
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('==========Por Hacer==========='.green);
            console.log(`la tarea es ${tarea.descripcion} y su estado es ${tarea.completado}`);
            console.log('=============================='.green);
        }

        break
    case 'actualizar':
        // console.log('actualiza');
        let tar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(tar);
        break
    case 'borrar':
        // console.log('actualiza');
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break
    default:
        console.log('default');
}