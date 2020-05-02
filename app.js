const lugar = require('./lugar/lugar');
const clima =  require('./clima/clima');

const argv = require('yargs')
                .option({
                    direccion:{
                        alias:'d',
                        desc:'Direccion de la ciudad para obtener el clima',
                        demand:true
                    }  
                }).argv;

/* lugar.getLugarLatLong(argv.direccion)
                .then(res => console.log(res)) */

/* clima.getClima(40.750000,-74.000000)
                .then(resp => console.log(resp))
                .catch(err => console.log(err)) */
const getInfo = async (direccion) =>{

    try {
        const coords = await lugar.getLugarLatLong(direccion);
        const temp = await clima.getClima(coords.latitud,coords.longitud);
         return `El clima de ${coords.dir} es de ${temp}.`;
    } catch (error) {
        return  `No se pudo determinar el clima de ${direccion}`
    }
}

getInfo(argv.direccion)
        .then( res => console.log(res))
        .catch(err => console.log(err))
