const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
console.log(argv);

let comando = argv._[0];
switch (comando) {
    case 'crear':
        // console.log('crear');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break
    case 'listar':
        console.log('listar');
        break
    case 'actualizar':
        console.log('actualiza');
        break
    default:
        console.log('default');
}