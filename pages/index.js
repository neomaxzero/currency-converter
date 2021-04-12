import React, { useEffect, useState } from "react";
import getLatestRates from "../repository/rates";

function MainPage() {
  const [ratesResult, setRatesResult] = useState(null);
  const [selectedTarget, setSelectedTarget] = useState(null);
  const [selectedSource, setSelectedSource] = useState("EUR");

  const [symbols, setSymbols] = useState([]);
  const [amount, setAmount] = useState(0);
  const [triggerCalculation, setTriggerCalculation] = useState(false);
  const [conversionResult, setConversionResult] = useState(0);

  const selectTarget = ({ target }) => {
    setSelectedTarget(target.value);
  };

  const selectSource = ({ target }) => {
    setSelectedSource(target.value);
  };

  const calculateConversion = (event) => {
    event.preventDefault();
    setTriggerCalculation((trigger) => !trigger);
  };

  useEffect(() => {
    const getRates = async () => {
      const rates = await getLatestRates(selectedSource);
      // Not always we receive the source symbol in the list
      if (!rates.rates[rates.base]) {
        rates.rates[rates.base] = 1;
      }
      // TODO: Calculate and save and not useState.
      const allSymbols = Object.keys(rates.rates);
      setSymbols(allSymbols);
      setRatesResult(rates);
      setSelectedTarget(allSymbols[0]);
    };

    getRates();
  }, [selectedSource]);

  useEffect(() => {
    if (!ratesResult || !selectedTarget) return;

    const valueTarget = Number(ratesResult.rates[selectedTarget]);
    const valueAmount = Number(amount);
    const result = (valueAmount * valueTarget).toFixed(3);
    setConversionResult(result);
  }, [selectedTarget, setConversionResult, triggerCalculation, ratesResult]);

  return (
    <main>
      <h1>Currency converter</h1>
      {!ratesResult ? (
        "Loading..."
      ) : (
        <>
          <div>Updated:{ratesResult.date}</div>
          <form onSubmit={calculateConversion}>
            <div>
              <label htmlFor="source">Source</label>
              <select
                name="source"
                onChange={selectSource}
                value={selectedSource}
              >
                {symbols.map((symbol) => (
                  <option value={symbol}>{symbol} </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="target">Target</label>
              {/* <SymbolSelector symbols={targets}  */}
              <select
                name="target"
                onChange={selectTarget}
                value={selectedTarget}
              >
                {symbols.map((symbol) => (
                  <option value={symbol}>{symbol} </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="amount">Amount</label>
              <input
                name="amount"
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
              ></input>
            </div>
            <button>Convert</button>
          </form>
          {conversionResult > 0 && (
            <div>
              <h2>Converted Amount: </h2>
              <p>{conversionResult}</p>
            </div>
          )}
        </>
      )}
    </main>
  );
}

export default MainPage;
