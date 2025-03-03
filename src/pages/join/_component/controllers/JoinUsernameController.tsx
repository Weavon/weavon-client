import { useEffect } from "react";

import { Controller, useFormContext } from "react-hook-form";

import { Box, Button, TextField } from "@mui/material";

import styled from "styled-components";

import useAuthUsernameExistenceQuery from "@apis/auth/hooks/useAuthUsernameExistenceQuery";

import JoinFormSchema from "@pages/join/_schema/JoinFormSchema";

import useToastStore from "@stores/useToastStore";

const JoinUsernameController = () => {
  const { showInfo, showWarning, showError } = useToastStore();

  const { control, watch } = useFormContext<JoinFormSchema>();

  const enteredUsername = watch("username");
  const { data: usernameExist, refetch: validateUsernameDuplication } =
    useAuthUsernameExistenceQuery({
      username: enteredUsername,
    });

  const handleCheck = () => {
    if (enteredUsername) {
      validateUsernameDuplication();
    } else {
      showWarning("Please enter a username");
    }
  };

  useEffect(() => {
    if (usernameExist) {
      showError("Username already exists");
    } else if (usernameExist === false) {
      showInfo(`Username ${enteredUsername} is not used`);
    }
  }, [usernameExist]);

  return (
    <Controller
      name="username"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <JoinUsernameContainer>
          <UsernameInput
            type="text"
            placeholder="Username"
            onChange={field.onChange}
            error={!!error || usernameExist}
          />
          <UsernameCheckButton onClick={handleCheck}>Check</UsernameCheckButton>
        </JoinUsernameContainer>
      )}
    />
  );
};

const JoinUsernameContainer = styled(Box)`
  width: 100%;

  margin: 10px;

  display: flex;
`;

const UsernameInput = styled(TextField)`
  width: 100%;
`;

const UsernameCheckButton = styled(Button)``;

export default JoinUsernameController;
