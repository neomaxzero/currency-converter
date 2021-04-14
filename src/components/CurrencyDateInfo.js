import { Box, Text } from "@chakra-ui/layout";
import PropTypes from "prop-types";

const CurrencyDateInfo = ({ date }) => (
  <Box>
    <Text fontSize="sm" color="gray.500" mt={2}>
      Last updated: <span test-id="date">{date}</span>
    </Text>
  </Box>
);

CurrencyDateInfo.propTypes = {
  date: PropTypes.string.isRequired,
};

export default CurrencyDateInfo;
