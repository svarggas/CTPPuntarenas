import React, { useContext } from "react";

// components
import CardUser from "components/Cards/users/CardUser.js";
import SharedContext from "../../SharedContext";

export default function Settings() {

  const { user, setUser } = useContext(SharedContext)
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