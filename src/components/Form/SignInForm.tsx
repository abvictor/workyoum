import { Box, Button, Flex, FormControl, FormLabel, Stack, Text } from "@chakra-ui/react";
import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserDataSignIn } from "../../@types/types";

const SignInSchema = yup.object().shape({
  email: yup.string().email().required("User e-mail required to login"),
  password: yup.string().required("Password is required to login"),
});

const SignInForm = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  const handleUserSignIn = async (data: UserDataSignIn) => {
    console.log(data);
  };
  return (
    <Box
      w={500}
      h={320}
      bgColor="green.400"
      display="flex"
      justifyContent="center"
      borderRadius="8"
    >
      <FormControl
        as="form"
        display="flex"
        justifyContent="center"
        onSubmit={handleSubmit(handleUserSignIn)}
      >
        <Stack>
          <Flex display="flex" align="center" justifyContent="center" mt="4">
            <Text fontSize="2xl" fontWeight="medium">
              Sign in
            </Text>
          </Flex>
          <FormLabel>User e-mail</FormLabel>
          <Input
            type="email"
            placeholder="ex: johndoe@email.com"
            error={formState.errors.email}
            {...register("email")}
          />
          <FormLabel>User password</FormLabel>
          <Input
            type="password"
            placeholder="********"
            error={formState.errors.password}
            {...register("password")}
          />
          <Flex display="flex" justifyContent="center">
            <Button
              bgColor="green.300"
              _hover={{ bgColor: "green.600" }}
              mt="4"
              isLoading={formState.isSubmitting}
              type="submit"
            >
              Enter
            </Button>
          </Flex>
        </Stack>
      </FormControl>
    </Box>
  );
};

export default SignInForm;
