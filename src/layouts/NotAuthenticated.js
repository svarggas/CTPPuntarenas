import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views
import Login from "views/landing/Login.js";
import Communication from "views/landing/Communication.js";

export default function NotAuthenticated() {
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
            <Route path="/landing/Login" exact component={Login} />
            <Route path="/landing/Communication" exact component={Communication} />
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}