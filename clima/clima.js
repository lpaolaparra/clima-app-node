const axios = require('axios');

const getClima = async (lat,long) =>{

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=aa105d171768686f2ec6cbe1b2a6486e&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima,
}