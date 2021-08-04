import React from "react";
import CardUser from "components/Cards/users/CardUser.js";

export default function Settings() {
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