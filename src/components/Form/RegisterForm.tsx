import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Stack, Text } from "@chakra-ui/react";
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
  function: yup.number().required("Please, choose an option"),
});

const RegisterForm = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(registerUserSchema),
  });

  const handleUserCreate: SubmitHandler<UserRegister> = async (user) => {
    console.log(user);
  };

  return (
    <Box>
      <Stack
        maxWidth={[360, 500]}
        maxHeight={[450, 500]}
        bgColor="green.400"
        alignItems="center"
        justifyContent="center"
        borderRadius={8}
        p="8"
      >
        <Text fontSize={["2xl", "3xl"]} fontWeight="medium">
          Registration
        </Text>

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
          <Text fontSize={["xl", "2xl"]}>Register as...</Text>
          <Flex display="flex" align="center" justify="center" mt="4">
            <Flex display="flex" gap="2">
              <Text>Developer</Text>
              <Checkbox size="lg" name="developer" type="radio" value={1} />
              <Text>Hirer</Text>
              <Checkbox size="lg" value={2} name="hirer" type="radio" />
            </Flex>
          </Flex>
          <Button
            color="white"
            bgColor="green.300"
            mt="4"
            type="submit"
            isLoading={formState.isSubmitting}
            _hover={{ bgColor: "green.500" }}
          >
            Create account
          </Button>
        </FormControl>
      </Stack>

      <Flex display="flex" gap="4" justifyContent="space-around" align="center" mt={6} h="auto">
        <Flex display="flex" align="center" gap="4">
          <Text>Log in with</Text> <FaGithub size={42} />
          <Text>Log in with</Text> <FcGoogle size={42} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default RegisterForm;
