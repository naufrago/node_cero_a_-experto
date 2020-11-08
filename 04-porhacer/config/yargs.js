const argv = require('yargs')
    .command('crear', 'crear una tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('listar', 'lista las tareas', {

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
    .command('borrar', 'borra una tarea', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}