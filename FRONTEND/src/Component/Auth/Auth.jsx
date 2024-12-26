import { Box, Modal } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { style } from "../Cart/Cart";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClose = () => {
    navigate("/");
  };
  return (
    <>
      <Modal
        open={
          location.pathname === "/account/LoginForm" || location.pathname === "/account/register"
        }
        onClose={handleClose}
      >
        <Box sx={style}>{location.pathname === "/account/register" ? <RegisterForm /> : <LoginForm />}
        </Box>
      </Modal>
    </>
  );
};
