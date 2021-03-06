import React from "react";

// components
import CardUserPrivileges from "components/Cards/privileges/CardUserPrivileges.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardUserPrivileges color="dark"/>
        </div>
      </div>
    </>
  );
}
