import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate, Link as RouterLink } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const validateFields = () => {
    const tempErrors = {};
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      tempErrors.email = "Invalid email address";
    }
    if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    return tempErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const tempErrors = validateFields();
    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);
    setFeedback("");

    // Simulate an API call (replace this with actual API logic)
    setTimeout(() => {
      setIsLoading(false);
      if (formData.email === "test@example.com" && formData.password === "123456") {
        setFeedback("Login successful!");
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setFeedback("Invalid email or password. Please try again.");
      }
    }, 2000);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Clear errors as user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        maxWidth: "400px",
        margin: "auto",
        padding: "2rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        borderRadius: "8px",
        mt: 4,
        bgcolor: "#181818", // Dark background
      }}
    >
      <Typography variant="h5" textAlign="center" mb={3} sx={{ color: "#fff" }}>
        Login
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
          error={Boolean(errors.email)}
          helperText={errors.email}
          sx={{
            backgroundColor: "#2c2c2c",
            color: "#fff",
            "& .MuiInputLabel-root": {
              color: "#fff",
            },
            "& .MuiInputBase-root": {
              color: "#fff",
            },
          }}
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
          error={Boolean(errors.password)}
          helperText={errors.password}
          sx={{
            backgroundColor: "#2c2c2c",
            color: "#fff",
            "& .MuiInputLabel-root": {
              color: "#fff",
            },
            "& .MuiInputBase-root": {
              color: "#fff",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
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
          sx={{
            mt: 3,
            mb: 2,
            padding: "0.8rem 0",
            bgcolor: "#e91e63", // Pink color
            color: "#fff",
            "&:hover": {
              bgcolor: "#c2185b", // Darker pink on hover
            },
          }}
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Login"}
        </Button>

        <Typography
          variant="body2"
          align="center"
          sx={{ color: feedback.includes("successful") ? "green" : "red", color: "#fff" }}
        >
          {feedback}
        </Typography>

        <Typography textAlign="center" mt={2} sx={{ color: "#fff" }}>
          New User?{" "}
          <RouterLink to="/account/register" style={{ color: "#e91e63", fontWeight: 600 }}>
            Register Here
          </RouterLink>
        </Typography>
      </form>
    </Box>
  );
};

export default LoginForm;
