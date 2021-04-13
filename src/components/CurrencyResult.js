import { Box, Flex, Text } from "@chakra-ui/layout";
import { Collapse } from "@chakra-ui/transition";

const CurrencyResult = ({ result }) => {
  return (
    <Collapse in={result > 0} animateOpacity>
      <Flex
        maxW="lg"
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={7}
        bgColor="white"
        mt={8}
        direction="column"
        alignItems="center"
      >
        <Text color="green.800" fontSize="sm">
          Converted Amount{" "}
        </Text>
        <Text fontSize="3xl" test-id="result">
          {result}
        </Text>
      </Flex>
    </Collapse>
  );
};

export default CurrencyResult;
