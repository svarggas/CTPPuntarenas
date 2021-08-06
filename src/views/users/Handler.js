import React from "react";

// components
import CardUserPriv from "components/Cards/users/CardUserPriv.js";

export default function Handler() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <CardUserPriv />
        </div>
      </div>
    </>
  );
}