import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">¡Mantengamonos en contacto!</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Email: lic.antonioobandochan@mep.go.cr
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                    <a href="https://www.facebook.com/Liceo-Antonio-Obando-Chan-157057644356518/">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Contacto directo
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <p className="text-gray-700 font-semibold block pb-2 text-sm">
                        Tél. 2660 0640
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Dirección
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <p className="text-gray-700 font-semibold block pb-2 text-sm">
                        Provincia de Puntarenas, Barranca, Riojalandia, C. 226.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © {new Date().getFullYear()} by KKS Development team.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
