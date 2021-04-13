const { Box } = require("@chakra-ui/layout");

const CurrencyCard = ({ children }) => (
  <Box
    maxW="sm"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    p={7}
    boxShadow="base"
    bgColor="white"
  >
    {children}
  </Box>
);

export default CurrencyCard;
