const CurrencyResult = ({ result }) =>
  result > 0 && (
    <div>
      <h2>Converted Amount: </h2>
      <p test-id="result">{result}</p>
    </div>
  );

export default CurrencyResult;
