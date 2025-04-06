import { Outlet } from "react-router-dom";

import Loading from "@components/global/Loading";
import Toast from "@components/global/Toast";

const CommonRouter = () => {
  return (
    <>
      <Loading />
      <Toast />
      <Outlet />
    </>
  );
};

export default CommonRouter;
