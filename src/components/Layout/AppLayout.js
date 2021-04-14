import { Box, Center, Container, Heading } from "@chakra-ui/layout";
import Head from "next/head";
import { ArrowRightIcon } from "@chakra-ui/icons";

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
      <Heading as="h1" size="sm" color="gray.700" pb={5}>
        <Center justifyContent="flex-start">
          <ArrowRightIcon w={2} h={2} color="orange.400" />
          <ArrowRightIcon w={2} h={2} mr={2} color="teal.400" />
          Currency converter
        </Center>
      </Heading>

      {children}
    </Container>
  </Box>
);

export default AppLayout;
