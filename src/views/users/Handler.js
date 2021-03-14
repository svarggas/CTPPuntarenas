import React from "react";

// components
import CardUser from "components/Cards/users/CardUserPriv.js";

export default function Handler() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <CardUser />
        </div>
      </div>
    </>
  );
}