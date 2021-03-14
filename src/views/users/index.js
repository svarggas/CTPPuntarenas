import React from "react";

// components
import TableUsers from "components/Cards/users/CardTableUsers.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <TableUsers color="dark"/>
        </div>
      </div>
    </>
  );
}
