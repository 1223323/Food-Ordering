import React from "react";
import { Button, Card } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export const AddressCart = ({ item, showButton,handleSelectAddress }) => {


  return (
    <Card className="flex gap-5 w-64 p-5">
      <HomeIcon />
      <div className="space-y-3 text-gray-500">
        <h1 className="text-lg font-semibold">Home</h1>
        <p>123 Main Street, New York, NY</p>
        {showButton && (
          <Button variant="outlined" fullWidth onClick={() => handleSelectAddress(item)}>Select</Button>
        )}
      </div>
    </Card>
  );
};
