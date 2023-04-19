import { useState, useEffect } from "react";

export default function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money, setMoney] = useState();
    const [coinPrice, setCoinPrice] = useState(0);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((res) => res.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        setMoney(e.target[1].value);
        setCoinPrice((coinPrice) => (coinPrice = e.target[0].selectedOptions[0].value));
        console.log(e.target[0].selectedOptions[0].value);
    };

    const onChange = (e) => {
        setMoney(e.target.value);
    };
    return (
        <div>
            <h1>The Coins! ({coins.length})</h1>

            <form onSubmit={onSubmit}>
                {loading ? <strong>Loading...</strong> : null}
                <select name="coins">
                    {coins.map((coin) => {
                        return (
                            <option
                                key={coin.id}
                                value={coin.quotes.USD.price}
                            >
                                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
                            </option>
                        );
                    })}
                    {/* 이걸 작성할때 화살표 함수 문법에 주의 하자  li를 return 해줘야 함!*/}
                </select>

                <input
                    id="USD"
                    type="number"
                    placeholder="your money"
                    value={money}
                    onChange={onChange}
                />
                <label htmlFor="USD">USD</label>
                <button>Change</button>
            </form>

            {money === undefined ? null : (
                <div>
                    <h2>코인 가격 : {coinPrice}</h2>
                    <h2>구매 개수 : {money / coinPrice}</h2>
                </div>
            )}
        </div>
    );
}
