import React from "react";

// components
import CardReportList from "components/Cards/reports/CardReportList.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardReportList color="dark"/>
        </div>
      </div>
    </>
  );
}
