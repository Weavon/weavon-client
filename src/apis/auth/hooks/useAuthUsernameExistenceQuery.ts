import { useQuery } from "@tanstack/react-query";

import { RestErrorResponse, RestResponse } from "@apis/_models/RestResponse";
import { AuthUsernameExistenceRequest } from "@apis/auth/models/AuthUsernameExistence";

import rest from "@utils/rest";

const useAuthUsernameExistenceQuery = (
  request: Partial<AuthUsernameExistenceRequest>
) => {
  const queryFn = async () => {
    return await rest.get(`/auth/username/${request.username}/existence`);
  };

  return useQuery<RestResponse<boolean>, RestErrorResponse, boolean>({
    queryKey: generateQueryKey(request),
    queryFn,
    enabled: false,
    select: (data) => data.data.value,
  });
};

const generateQueryKey = (request: Partial<AuthUsernameExistenceRequest>) => {
  return ["auth", "username", request.username, "existence"];
};

export default useAuthUsernameExistenceQuery;
