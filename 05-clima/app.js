const argv = require('yargs')
    .options({
        descripcion: {
            alias: 'd',
            desc: 'ciudad pais',
            demand: true
        }
    })
    .argv;

console.log(argv.descripcion);