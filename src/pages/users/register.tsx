import { Box } from "@chakra-ui/react";
import React from "react";
import RegisterForm from "../../components/Form/RegisterForm";

const userRegister = () => {
  return (
    <Box display="flex" alignContent="center" justifyContent="center" mt="8">
      <RegisterForm />
    </Box>
  );
};

export default userRegister;
