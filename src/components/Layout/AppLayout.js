import { Box, Container, Heading } from "@chakra-ui/layout";
import Head from "next/head";

const AppLayout = ({ children }) => (
  <Box
    as="main"
    h="100vh"
    w="100vw"
    bgGradient="linear(to-b, gray.50, teal.100)"
    p={6}
  >
    <Head>
      <title>Currency Converter</title>
    </Head>

    <Container maxW="container.xl">
      <Heading as="h1" size="md" color="black" pb={5}>
        Currency converter
      </Heading>

      {children}
    </Container>
  </Box>
);

export default AppLayout;
