import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import EventIcon from "@mui/icons-material/Event";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Drawer, useMediaQuery, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const menu = [
  { title: "Orders", icon: <ShoppingBagIcon /> },
  { title: "Favorites", icon: <FavoriteIcon /> },
  { title: "Address", icon: <HomeIcon /> },
  { title: "Payments", icon: <AccountBalanceWalletIcon /> },
  { title: "Notification", icon: <NotificationsActiveIcon /> },
  { title: "Events", icon: <EventIcon /> },
  { title: "Logout", icon: <LogoutIcon /> },
];
const ProfileNavigation = ({ open, handleClose }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const Navigate = useNavigate();

  const handleNavigate = (item) => {
    Navigate(`/my-profile/${item.title.toLowerCase()}`);
  };

  return (
    <div>
      <Drawer
        variant={isSmallScreen ? "temporary" : "permanent"}
        onClose={handleClose}
        open={isSmallScreen ? open : true}
        anchor="left"
        sx={{ zIndex: -1, position: "sticky" }}
      >
        <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-centre text-xl gap-20 pt-20">
          {menu.map((item, i) => (
            <div
              key={i}
              onClick={() => handleNavigate(item)}
              className="px-5 flex items-center space-x-5 cursor-pointer gap-4"
            >
              {item.icon}
              <span>{item.title}</span>
              {i === menu.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </Drawer>
    </div>
  );
};
export default ProfileNavigation; // Exporting the component
