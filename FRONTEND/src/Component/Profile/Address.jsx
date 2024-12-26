import React from "react";

const Address = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold text-center">My Addresses</h1>
      <div className="flex flex-col gap-5 mt-8">
        {/* Address cards will be mapped here */}
        <div className="border p-5 rounded-md">
          <h2 className="font-medium">Home</h2>
          <p className="text-gray-600 mt-2">
            123 Main Street
            <br />
            Apartment 4B
            <br />
            New York, NY 10001
          </p>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-fit">
          Add New Address
        </button>
      </div>
    </div>
  );
};

export default Address;
