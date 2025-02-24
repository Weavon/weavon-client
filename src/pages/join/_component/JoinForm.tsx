import { FormProvider, useForm } from "react-hook-form";

import { Box } from "@mui/material";

import styled from "styled-components";

import JoinFormSchema from "@pages/join/_schema/JoinFormSchema";
import JoinUsernameController from "@pages/join/_component/controllers/JoinUsernameController";
import JoinPasswordController from "@pages/join/_component/controllers/JoinPasswordController";
import JoinPasswordConfirmController from "@pages/join/_component/controllers/JoinPasswordConfirmController";

const JoinForm = () => {
  const method = useForm<JoinFormSchema>({
    defaultValues: {
      username: "",
      password: "",
      passwordConfirm: "",
    },
  });

  return (
    <FormProvider {...method}>
      <JoinFormContainer>
        <JoinUsernameController />
        <JoinPasswordController />
        <JoinPasswordConfirmController />
      </JoinFormContainer>
    </FormProvider>
  );
};

const JoinFormContainer = styled(Box)`
  width: 300px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default JoinForm;
