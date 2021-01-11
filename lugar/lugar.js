const axios = require('axios').default;

const getLugar = async(direccion) => {

    const encodedUrl = encodeURI(direccion);

    let appid = '2319a3c51c439a67e6b6fb67bcd0d72b';
    let URL = `http://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=${appid}`;

    const resp = await axios.get(URL);
    const coords = resp.data.coord;

    return {
        direccion,
        lat: coords.lat,
        lon: coords.lon
    };
};

module.exports = {
    getLugar
};