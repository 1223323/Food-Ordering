import React, { useState } from "react";
import ProfileNavigation from "./ProfileNavigation";
import UserProfile from "./UserProfile";
import Address from "./Address";
import Favorites from "./Favorites";
import { Routes, Route } from "react-router-dom";
import Orders from "./Orders";

const Profile = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="lg:flex h-screen">
      {/* Sidebar */}
      <div className="sticky h-full lg:w-[20%] bg-gray-800">
        <ProfileNavigation
          open={openSidebar}
          handleClose={() => setOpenSidebar(false)}
        />
      </div>

      {/* Main Content */}
      <div className="flex-grow flex justify-center items-center bg-gray-100">
        <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/address" element={<Address />} />
          <Route path="/favorites" element={<Favorites />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
