import { Box } from "@chakra-ui/react";
import React from "react";
import RegisterForm from "../../components/Form/RegisterForm";

const UserRegister = () => {
  return (
    <Box display="flex" alignContent="center" justifyContent="center" mt="16">
      <RegisterForm />
    </Box>
  );
};

export default UserRegister;
