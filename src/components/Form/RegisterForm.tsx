import { Box, Button, Flex, FormControl, FormLabel, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Input/Input";
import * as yup from "yup";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { UserRegister } from "../../@types/types";

const registerUserSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email("Please, insert a valid e-mail").required(),
  password: yup
    .string()
    .required("Must have an password")
    .min(8, "Password should have at least 8 characters"),
  password_confirmation: yup.string().oneOf([null, yup.ref("password")], "Passwords must match"),
});

const RegisterForm = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(registerUserSchema),
  });

  const handleUserCreate: SubmitHandler<UserRegister> = async (user) => {
    console.log(user);
  };

  return (
    <Box mt={12}>
      <Stack
        w={500}
        h={400}
        bgColor="green.200"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        borderRadius={8}
      >
        <FormControl
          as="form"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          onSubmit={handleSubmit(handleUserCreate)}
        >
          <FormLabel>
            Your best e-mail:
            <Input
              placeholder="ex: johndoe@email.com"
              type="email"
              {...register("email")}
              error={formState.errors.email}
            />
          </FormLabel>
          <FormLabel>
            An safe password:
            <Input
              placeholder=""
              type="password"
              {...register("password")}
              error={formState.errors.password}
            />
          </FormLabel>
          <FormLabel>
            Confirm your password
            <Input
              placeholder=""
              type="password"
              {...register("password_confirmation")}
              error={formState.errors.password_confirmation}
            />
          </FormLabel>
          <Button
            color="white"
            bgColor="green.400"
            mt="6"
            type="submit"
            isLoading={formState.isSubmitting}
          >
            Create account
          </Button>
        </FormControl>
      </Stack>

      <Flex display="flex" justifyContent="space-around" align="center" mt={6} h="auto">
        <Text fontSize="2xl">Sign in with</Text>
        <FaGithub size={42} />
        <FcGoogle size={42} />
      </Flex>
    </Box>
  );
};

export default RegisterForm;
