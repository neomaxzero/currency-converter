const BASE_API = "https://api.ratesapi.io/api";

const getLatestRatesURL = (baseSymbol) =>
  `${BASE_API}/latest?base=${baseSymbol}`;

const getLatestRates = (baseSymbol) =>
  fetch(getLatestRatesURL(baseSymbol)).then((response) => response.json());

export default getLatestRates;
