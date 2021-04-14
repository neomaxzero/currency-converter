import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { UpDownIcon } from "@chakra-ui/icons";
import PropTypes from "prop-types";

const CurrencyForm = ({
  calculateConversion,
  selectSource,
  selectedSource,
  symbols,
  selectTarget,
  selectedTarget,
  amount,
  setAmount,
  onSwitch,
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
              <option value={symbol} key={`${symbol}-source`}>
                {symbol}
              </option>
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
              <option value={symbol} key={`${symbol}-target`}>
                {symbol}{" "}
              </option>
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
      <Flex justify="space-between" mt={6}>
        <Tooltip label="Swap FROM and TO" fontSize="md">
          <Button onClick={onSwitch} test-id="swap">
            <UpDownIcon />
          </Button>
        </Tooltip>
        <Button
          type="submit"
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

CurrencyForm.propTypes = {
  calculateConversion: PropTypes.func.isRequired,
  selectSource: PropTypes.func.isRequired,
  selectedSource: PropTypes.string,
  symbols: PropTypes.arrayOf(PropTypes.string),
  selectTarget: PropTypes.func.isRequired,
  selectedTarget: PropTypes.string,
  amount: PropTypes.string,
  setAmount: PropTypes.func.isRequired,
  onSwitch: PropTypes.func.isRequired,
};

CurrencyForm.defaultProps = {
  amount: "",
};

export default CurrencyForm;
