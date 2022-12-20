import { Box, Button, Flex, Text } from "@chakra-ui/react";
import background from "../assets/background.svg";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Workyoum | Home</title>
      </Head>
      <Flex p="6" display="flex" align="center" justifyContent="center">
        <Text
          textAlign="center"
          fontWeight="semibold"
          fontSize="4xl"
          position="absolute"
          zIndex={999}
          color="green.500"
          mt={["40", "56"]}
        >
          Get several connections for jobs around the world
        </Text>
      </Flex>

      <Flex justifyContent="center" align="center" mt={["36", "-15"]}>
        <Image
          src={background}
          alt="World map with connections between countries"
          style={{ opacity: 0.7 }}
          width={800}
          height={1060}
        />
      </Flex>
      <Flex display="flex" flexDir="column" align="center" mt={-54}>
        <Text
          color="green.400"
          fontSize={["4xl", "6xl"]}
          fontWeight="semibold"
          letterSpacing={1}
          zIndex={999}
          mt={["16", "0"]}
        >
          Workyoum
        </Text>
      </Flex>
      <Flex display="flex" justifyContent="center" flexDir="column" align="center">
        <Text fontWeight="medium" fontSize="larger" textAlign="center" mt={["4", "0"]}>
          is a new way to make connections and provide experiences between developers and customers.
        </Text>

        <Link href="/users/register">
          <Button
            bgColor="green.400"
            color="white"
            size={["md", "lg"]}
            mt="8"
            _hover={{ bgColor: "green.500" }}
            onClick={() => {}}
          >
            Experience now
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
