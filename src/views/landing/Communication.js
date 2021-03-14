import React from "react";

// components
import CardCommunication from "components/Cards/comunication/CardCommunication.js";

export default function Communication() {
    return (
      <>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-8/12 px-4">
              <div className="flex flex-wrap">
                  <div className="w-full lg:w-12  /12 px-4">
                      <CardCommunication />
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </>
    );
  }
  
