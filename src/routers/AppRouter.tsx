import LoginPage from "@pages/login/LoginPage";
import AuthRouter from "@routers/AuthRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <AuthRouter>
        {/* Route pages which authentication is necessary */}
      </AuthRouter>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
