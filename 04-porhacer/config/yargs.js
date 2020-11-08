const argv = require('yargs')
    .command('crear', 'crear una tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('actualizar', 'actualizar el estado de la tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            alias: 'c',
            default: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}