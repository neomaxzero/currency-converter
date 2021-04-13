import CurrencyDateInfo from "components/CurrencyDateInfo";
import CurrencyResult from "components/CurrencyResult";
import React, { useEffect, useState } from "react";
import CurrencyForm from "components/CurrencyForm";
import getLatestRates from "repository/rates";

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
          <CurrencyDateInfo date={ratesResult.date} />
          <CurrencyForm
            calculateConversion={calculateConversion}
            selectSource={selectSource}
            selectedSource={selectedSource}
            symbols={symbols}
            selectTarget={selectTarget}
            selectedTarget={selectedTarget}
            amount={amount}
            setAmount={setAmount}
          />
          <CurrencyResult result={conversionResult} />
        </>
      )}
    </main>
  );
}

export default MainPage;
