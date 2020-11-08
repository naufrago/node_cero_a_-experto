const fs = require('fs');
let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`la base ${base} no es un numero`);
            return;
        }
        let txt = '';
        for (let i = 1; i <= 10; i++) {
            txt = txt + `${base} * ${i} = ${base*i}\n`;

        }

        console.log(txt);


        fs.writeFile(`tablas/tabladel${base}.txt`, txt, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabladel${base}.txt`);
            }

        });
    })
}


module.exports = {
    crearArchivo
}