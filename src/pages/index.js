import CurrencyDateInfo from "components/CurrencyDateInfo";
import CurrencyResult from "components/CurrencyResult";
import React, { useEffect, useState } from "react";
import CurrencyForm from "components/CurrencyForm";
import getLatestRates from "repository/rates";
import AppLayout from "components/Layout/AppLayout";
import CurrencyCard from "components/CurrencyCard";
import { Flex } from "@chakra-ui/layout";

function MainPage() {
  const [ratesResult, setRatesResult] = useState(null);
  const [selectedTarget, setSelectedTarget] = useState("GBP");
  const [selectedSource, setSelectedSource] = useState("EUR");

  const [symbols, setSymbols] = useState([]);
  const [amount, setAmount] = useState();
  const [triggerCalculation, setTriggerCalculation] = useState(false);
  const [conversionResult, setConversionResult] = useState();

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

  const onSwitch = () => {
    setSelectedSource(selectedTarget);
    setSelectedTarget(selectedSource);
  };

  useEffect(() => {
    const getRates = async () => {
      const rates = await getLatestRates(selectedSource);

      if (!rates.rates[rates.base]) {
        rates.rates[rates.base] = 1;
      }

      const allSymbols = Object.keys(rates.rates);
      setSymbols(allSymbols);
      setRatesResult(rates);
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
    <AppLayout>
      {!ratesResult ? (
        "Loading..."
      ) : (
        <Flex
          justify="center"
          mt={{ sm: 8 }}
          alignItems="center"
          direction="column"
        >
          <CurrencyCard>
            <CurrencyForm
              calculateConversion={calculateConversion}
              selectSource={selectSource}
              selectedSource={selectedSource}
              symbols={symbols}
              selectTarget={selectTarget}
              selectedTarget={selectedTarget}
              amount={amount}
              setAmount={setAmount}
              onSwitch={onSwitch}
            />
          </CurrencyCard>
          <CurrencyDateInfo date={ratesResult.date} />
          <CurrencyResult result={conversionResult} />
        </Flex>
      )}
    </AppLayout>
  );
}

export default MainPage;
