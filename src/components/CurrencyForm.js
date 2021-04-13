const CurrencyForm = ({
  calculateConversion,
  selectSource,
  selectedSource,
  symbols,
  selectTarget,
  selectedTarget,
  amount,
  setAmount,
}) => {
  return (
    <form onSubmit={calculateConversion}>
      <div>
        <label htmlFor="source">Source</label>
        <select
          name="source"
          onChange={selectSource}
          value={selectedSource}
          test-id="source"
        >
          {symbols.map((symbol) => (
            <option value={symbol}>{symbol} </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="target">Target</label>
        <select
          name="target"
          onChange={selectTarget}
          value={selectedTarget}
          test-id="target"
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
          test-id="amount"
        ></input>
      </div>
      <button test-id="convert">Convert</button>
    </form>
  );
};

export default CurrencyForm;
