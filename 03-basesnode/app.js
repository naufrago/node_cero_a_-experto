const { crearArchivo } = require('./multiplicar/multiplicar.js')



let arg = process.argv;
let parametro = arg[2];
let base = parametro.split('=')[1];
console.log(parametro)

crearArchivo(base)
    .then(archivo => {
        console.log(`archivo creado de nombre ${archivo}`);
    })
    .catch(e => {
        console.log(e);
    })





// let txt = '';
// for (let i = 1; i <= 10; i++) {
//     txt = txt + `${base} * ${i} = ${base*i}\n`;

// }

// console.log(txt);

// fs.writeFile(`tablas/tabladel${base}.txt`, txt, 'utf8', (err) => {
//     if (err) throw err;
//     console.log('el archivo fue guardado');
// });