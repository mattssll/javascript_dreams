import React from "react";
import "./styles.css";

export default function App() {
  const [currency, setCurrency] = React.useState('USD');
  const [rates, setRates] = React.useState({});

  React.useEffect(() => {
    fetch('https://api.ratesapi.io/api/latest?base=' + currency).then(res => res.json()).then(data => {
      setRates(data.rates);
    });
  }, [currency]);

  const setUSD = () => setCurrency('USD');
  const setEUR = () => setCurrency('EUR');

  return (
    <div className="App">
      <h1>Part 4: The Effect Hook</h1>
      <button onClick={setUSD}>USD</button> <button onClick={setEUR}>EUR</button>
      <h2>{currency} Exchange Rates</h2>
      {Object.keys(rates).map(currency => <li>{currency}: {rates[currency]}</li>)}
    </div>
  );
}

