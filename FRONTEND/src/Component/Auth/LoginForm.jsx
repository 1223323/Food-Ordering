import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../State/Authentication/Action"; // Adjust the path to your Action.js file

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the loginUser action with formData and navigate
    dispatch(
      loginUser({
        userData: formData,
        navigate,
      })
    );
  };

  return (
    <Box
      sx={{
        maxWidth: "400px",
        margin: "auto",
        padding: "2rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        mt: 4,
      }}
    >
      <Typography variant="h5" textAlign="center" mb={3}>
        Login to Your Account
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>

        <Typography textAlign="center">
          Don't have an account?{" "}
          <Button onClick={() => navigate("/account/register")}>Register</Button>
        </Typography>
      </form>
    </Box>
  );
};

export default LoginForm;