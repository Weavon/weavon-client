import { useNavigate } from "react-router-dom";

import { Avatar, Box, Typography } from "@mui/material";

import styled from "styled-components";

import palette from "@assets/colors/palette";

const Header = () => {
  const nav = useNavigate();

  const handleHomeClick = () => {
    nav("/");
  };

  return (
    <HeaderWrapper>
      <Home variant="h5" onClick={handleHomeClick}>
        Weavon
      </Home>
      <Profile />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(Box)`
  width: 100%;
  height: 50px;

  padding: 10px 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${palette.primary.main};
`;

const Home = styled(Typography)`
  font-weight: bolder;
  color: white;
  cursor: pointer;
`;

const Profile = styled(Avatar)`
  width: 30px !important;
  height: 30px !important;
`;

export default Header;
