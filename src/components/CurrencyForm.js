import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";

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
      <VStack spacing={4}>
        <FormControl id="source">
          <FormLabel>From</FormLabel>
          <Select
            name="source"
            onChange={selectSource}
            value={selectedSource}
            test-id="source"
          >
            {symbols.map((symbol) => (
              <option value={symbol}>{symbol} </option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="target">
          <FormLabel>To</FormLabel>
          <Select
            name="target"
            onChange={selectTarget}
            value={selectedTarget}
            test-id="target"
          >
            {symbols.map((symbol) => (
              <option value={symbol}>{symbol} </option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="amount">
          <FormLabel>Amount</FormLabel>
          <Input
            name="amount"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            test-id="amount"
            required
            type="number"
          />
        </FormControl>
      </VStack>
      <Flex justify="flex-end">
        <Button
          mt={6}
          test-id="convert"
          bgColor="orange.400"
          color="white"
          disabled={!amount}
        >
          Convert
        </Button>
      </Flex>
    </form>
  );
};

export default CurrencyForm;
