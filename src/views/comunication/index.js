import React from "react";

// components
import TableInbox from "components/Cards/comunication/CardInbox.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <TableInbox color="dark"/>
        </div>
      </div>
    </>
  );
}
