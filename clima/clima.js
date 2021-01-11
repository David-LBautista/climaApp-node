const axios = require('axios').default;
const lugar = require('../lugar/lugar');


const getClima = async(lat, lng) => {

    let appid = '2319a3c51c439a67e6b6fb67bcd0d72b';
    let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appid}&units=metric`;

    const resp = await axios.get(URL);
    return `${resp.data.main.temp} C`;
};

module.exports = {
    getClima
};