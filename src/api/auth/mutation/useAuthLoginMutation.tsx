import { AuthLoginRequest } from "src/api/auth/model/AuthLogin";
import { RestErrorResponse, RestResponse } from "src/api/_common/RestResponse";
import rest from "@util/rest";
import { useMutation } from "@tanstack/react-query";

const useAuthLoginMutation = () => {
  const mutationFn = async (request: AuthLoginRequest) => {
    return await rest.post("/auth/login", request);
  };

  return useMutation<RestResponse<object>, RestErrorResponse, AuthLoginRequest>(
    {
      mutationFn,
    }
  );
};

export default useAuthLoginMutation;
