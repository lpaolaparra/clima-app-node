const axios = require('axios');

const getLugarLatLong = async ( direccion ) =>{

    const encodedURL = encodeURI( direccion);
    console.log(encodedURL);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'x-rapidapi-key' : 'f9847fcf67msh3fce7c40c2a29efp16d6fdjsn511e26704c39'},
    });
    const respuesta = await instance.get() ;

        if(respuesta.data.Results.length === 0){
            throw new Error(`No hay resultados para ${direccion}`);
        }

        const data = respuesta.data.Results[0];
        const dir = data.name;
        const latitud = data.lat;
        const longitud = data.lon;
       
    return {
        dir,
        latitud,
        longitud
    }
}

module.exports = {
    getLugarLatLong,
}
