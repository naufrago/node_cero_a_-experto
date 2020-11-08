let getuserid = (id, collback) => {
    let user = {
        name: 'yeison',
        id
    }

    if (id === 10) {
        collback('error en el id, no se encontro');
    } else {
        collback(null, user);

    }
}

getuserid(100, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('el usuario entregado por la bd es ', usuario);
})