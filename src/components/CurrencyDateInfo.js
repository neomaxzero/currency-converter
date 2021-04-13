import { Box, Text } from "@chakra-ui/layout";

const CurrencyDateInfo = ({ date }) => (
  <Box>
    <Text fontSize="sm" color="gray.500" mt={2}>
      Last updated: <span test-id="date">{date}</span>
    </Text>
  </Box>
);

export default CurrencyDateInfo;
