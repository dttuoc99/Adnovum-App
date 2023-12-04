import axios from 'axios';
const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {
        symbol: 'MSFT',
        function: 'TIME_SERIES_INTRADAY',
        interval: '5min',
        output_size: 'compact',
        datatype: 'json'
    },
    headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
    }
};

async function getData() {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

