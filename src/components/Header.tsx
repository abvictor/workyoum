import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Flex
      width="100vw"
      height={100}
      bgColor="green.500"
      p="4"
      align="center"
      justifyContent="space-between"
    >
      <Flex>
        <Link href="/">
          <Text fontSize="4xl" color="white" letterSpacing={1}>
            Workyoum
          </Text>
        </Link>
      </Flex>
      <Flex display="flex" gap={2}>
        <Link href="/users/register">
          <Button bgColor="green.400" color="white">
            Register
          </Button>
        </Link>
        <Link href="/signin">
          <Button bgColor="green.400" color="white">
            Sign In
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
