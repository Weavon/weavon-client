interface AuthRouterProps {
  children?: React.ReactNode;
}

const AuthRouter = ({ children }: AuthRouterProps) => {
  // TODO - check authentication and redirect if not authenticated.

  return children;
};

export default AuthRouter;
