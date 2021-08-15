import React from "react";

export default function HeaderAuthenticated(props) {
  return (
    <>
      <div className="relative bg-blue-600" 
        style={{ padding: '60px 0 60px 0', marginBottom: '30px' }}
      >
        <div className="px-4 md:px-10 mx-auto w-full">
            <div className="flex flex-wrap">
              <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-gray-200">
                { props.name }
              </h2>
            </div>
        </div>
      </div>
    </>
  );
}
