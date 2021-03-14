import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Navbar from "components/Navbars/UtilitiesNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views
import ForgotPassword from "views/utilities/ForgotPassword.js";

export default function Utilities() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png") + ")",
            }}
          ></div>
          <Switch>
            <Route path="/utilities/ForgotPassword" exact component={ForgotPassword} />
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}