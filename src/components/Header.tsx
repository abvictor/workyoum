import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Flex
      width="100vw"
      height={100}
      bgColor="green.400"
      p="4"
      align="center"
      justifyContent="space-between"
    >
      <Flex>
        <Link href="/">
          <Text fontSize={["2xl", "3xl"]} color="white" letterSpacing={1} fontWeight="medium">
            Workyoum
          </Text>
        </Link>
      </Flex>
      <Flex display="flex" gap={2}>
        <Link href="/users/create">
          <Button
            bgColor="green.300"
            color="white"
            _hover={{ bgColor: "green.500" }}
            size={["sm", "md"]}
          >
            Register
          </Button>
        </Link>
        <Link href="/users/signin">
          <Button
            bgColor="green.300"
            color="white"
            _hover={{ bgColor: "green.500" }}
            size={["sm", "md"]}
          >
            Sign In
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
