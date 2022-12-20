import { Box, Button, Flex, FormControl, FormLabel, Stack, Text, Link } from "@chakra-ui/react";
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
      maxWidth={[380, 500]}
      bgColor="green.400"
      filled
      display="flex"
      justifyContent="center"
      borderRadius="8"
      p="4"
    >
      <FormControl
        as="form"
        display="flex"
        justifyContent="center"
        onSubmit={handleSubmit(handleUserSignIn)}
      >
        <Stack>
          <Flex display="flex" align="center" justifyContent="center" mt="4">
            <Text fontSize={["2xl", "3xl"]} fontWeight="medium">
              Sign in
            </Text>
          </Flex>
          <hr style={{ opacity: 0.5 }} />
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
          <Link href="/users/passwordrecovery">Forgot you password? We can help you here!</Link>
          <Flex display="flex" justifyContent="center">
            <Button
              bgColor="green.300"
              _hover={{ bgColor: "green.600" }}
              isLoading={formState.isSubmitting}
              type="submit"
              mt={["0", "8"]}
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
