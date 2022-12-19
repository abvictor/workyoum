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
        <Text fontWeight="medium" fontSize="4xl" mt="20" position="absolute">
          Get several connections for jobs around the world
        </Text>
      </Flex>

      <Flex justifyContent="center" align="center" mt={-15}>
        <Image
          src={background}
          alt="World map with connections between countries"
          width={800}
          height={1060}
        />
      </Flex>
      <Flex display="flex" flexDir="column" align="center" mt={-54}>
        <Text color="green.400" fontSize="6xl" fontWeight="medium" letterSpacing={1}>
          Workyoum
        </Text>
      </Flex>
      <Flex display="flex" justifyContent="center" flexDir="column" align="center">
        <Text fontWeight="medium" fontSize="larger">
          is a new way to make connections and provide experiences between developers and customers.
        </Text>

        <Link href="/users/register">
          <Button
            bgColor="green.400"
            color="white"
            w="xs"
            h={12}
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
