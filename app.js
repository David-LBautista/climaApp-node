const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


/*lugar.getLugar(argv.direccion)
    .then(res => {
        console.log(res);
    });

clima.getClima(15.0646, 120.7198)
    .then(resp => {
        console.log(resp);
    }).catch(err => console.log(err));*/

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugar(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `El clima de ${coords.direccion} es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
};


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);