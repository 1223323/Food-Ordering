import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";

const UserProfile = () => {
  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-gray-800 text-white rounded-lg shadow-lg flex flex-col items-center">
        <AccountCircleIcon sx={{ fontSize: "9rem", color: "white" }} />
        <h1 className="py-5 text-2xl font-semibold">Jash Chauhan</h1>
        <p>Email: jashchauhan@gmail.com</p>
        <Button
          variant="contained"
          sx={{
            marginTop: "2rem",
            backgroundColor: "#ff3366",
            color: "white",
          }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
