import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Grid,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Ingredients Data (Dynamic)
const ingredientsData = [
  {
    category: "Nuts & Seeds",
    ingredients: ["Cashews"],
  },
  {
    category: "Protein",
    ingredients: ["Ground beef", "Bacon strips"],
  },
  {
    category: "Bread",
    ingredients: ["Hamburger buns"],
  },
  {
    category: "Vegetables",
    ingredients: ["Lettuce", "Tomato slices", "Pickles", "Onion slices"],
  },
  {
    category: "Condiments",
    ingredients: ["Ketchup"],
  },
];

const MenuCard = () => {
  return (
    <Accordion
      sx={{
        backgroundColor: "#f5f5f5", // Light gray background
        color: "#333", // Dark gray text for better readability
        borderRadius: 2,
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow
        marginBottom: 2,
        transition: "all 0.3s ease-in-out", // Smooth accordion expansion
        "&:hover": {
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)", // Hover effect to make the accordion "pop"
        },
      }}
    >
      {/* Accordion Summary */}
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#333" }} />}
        sx={{
          padding: 2,
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.05)", // Subtle hover effect
          },
        }}
      >
        <Box display="flex" alignItems="left" sx={{ width: "100%" }}>
          {/* Image with hover effect */}
          <Box
            component="img"
            src="https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_1280.jpg"
            alt="Burger"
            sx={{
              width: "80px",
              height: "80px",
              borderRadius: 1,
              marginRight: 2,
              transition: "all 0.3s ease", // Smooth transition for hover effect
              "&:hover": {
                transform: "scale(1.1)", // Image zoom effect
              },
            }}
          />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Burger
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              ₹499
            </Typography>
          </Box>
        </Box>
      </AccordionSummary>

      {/* Accordion Details */}
      <AccordionDetails>
        <Typography
          variant="body2"
          sx={{ color: "#666", marginBottom: 2 }}
        >
          A hamburger or simply burger is a food consisting of fillings—
          usually a patty of ground meat, typically beef—placed inside a
          sliced bun or bread roll.
        </Typography>

        {/* Dynamic Categories and Ingredients */}
        <Grid container spacing={2} justifyContent="space-between">
          {ingredientsData.map((item, index) => (
            <Grid 
              item 
              xs={12} 
              sm={4} 
              md={2} 
              key={index}
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'left' 
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 1,
                  textAlign: "left",
                  color: "#333", // Darker gray for category text
                }}
              >
                {item.category}
              </Typography>

              {/* Ingredients listed vertically */}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: '' 
              }}>
                {item.ingredients.map((ingredient, idx) => (
                  <FormControlLabel
                    key={idx}
                    control={<Checkbox sx={{ color: "#333" }} />}
                    label={ingredient}
                    sx={{ margin: 0, width: '100%', justifyContent: 'left' }}
                  />
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Add to Cart Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#e91e63",
            color: "#fff",
            marginTop: 3,
            width: "100%",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#d81b60", // Slightly darker hover effect
              transform: "scale(1.05)", // Subtle zoom effect on hover
            },
          }}
        >
          Add to Cart
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;