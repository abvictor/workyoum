import { Box } from "@chakra-ui/react";
import React from "react";
import SignInForm from "../../components/Form/SignInForm";

const SignIn = () => {
  return (
    <Box display="flex" alignContent="center" justifyContent="center" mt="16">
      <SignInForm />
    </Box>
  );
};

export default SignIn;
