import { useEffect, useState } from "react"

export default function CoinChecker(){

    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);

    const [money, setMoney] = useState(0);
    const [coin, setCoin] = useState(1);
    const [selectedCoin, setSelectedCoin] = useState(0);
    const [flip, setFlip] = useState(true);

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
                setSelectedCoin(json[0].quotes.USD.price);
            });
    }, [])

    const selectOnChange = (e) => {
        setCoin(e.target[e.target.selectedIndex].value);
        console.log(coin)
    }

    const inputOnChange = (e) => {
        if(flip){
            setMoney(e.target.value);
        }
        else{
            setCoin(e.target.value);
        }
    }

    const onClick = () => {
        setFlip((current) => !current);
        setMoney(0);
        setCoin(0);
    }

    return(
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            <hr></hr>
            {loading ? <strong>loading...</strong> : 
            
            <div>
                <input value={flip ? money : coin * selectedCoin} type="number" disabled={!flip} onChange={inputOnChange}/> USD <br />
                <input value={flip ? money / selectedCoin : coin} type="number" disabled={flip} onChange={inputOnChange} /> Coin <br />
                <button onClick={onClick}>Flip Convert</button>
                {/* <ul>
                {coins.map((item) =>
                    <li key={item.id}>
                        {item.name}({item.symbol}) : {item.quotes.USD.price} USD
                    </li>
                )}
                </ul> */}
                <br />
                <select onChange={selectOnChange}>
                    {coins.map((item) =>
                        <option key={item.id} value={item.quotes.USD.price}>
                            {item.name}({item.symbol})
                        </option>
                    )}
                </select>
            </div>
            }
            
        </div>
    )
}