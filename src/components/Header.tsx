import { Box, Button, Flex, Text } from "@chakra-ui/react";

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
        <Text fontSize="4xl" color="white" letterSpacing={1}>
          Workyoum
        </Text>
      </Flex>
      <Flex display="flex" gap={2}>
        <Button bgColor="green.300" color="white">
          Register
        </Button>
        <Button bgColor="green.300" color="white">
          Sign In
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
