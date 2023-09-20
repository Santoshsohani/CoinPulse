import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./displayList.css"

const DataCard = () => {
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        // Function to fetch data from the CoinGecko API
        const fetchCryptoData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1');
                setCryptos(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Fetch data when the component mounts
        fetchCryptoData();
    }, []);

    return (
        <div>
            <h1 style={{textAlign:"center", marginTop:"2em"}}>Top 10 Cryptocurrencies</h1>
            <ul className='displayList'>
                {cryptos.map((crypto) => (
                    <li key={crypto.id}>
                        <div>
                            <img src={crypto.image} alt={crypto.name} style={{ width: 50, height: 50,margin:'auto' }} />
                            <h3 >{crypto.name}</h3>
                            <p>Symbol: {crypto.symbol}</p>
                            <p >Current Price: ${crypto.current_price}</p>
                            <p>Market Cap: ${crypto.market_cap}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataCard;
