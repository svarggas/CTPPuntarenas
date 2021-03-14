import React from "react";
import { useHistory } from "react-router-dom";

export default function Lost() {
  const history = useHistory();

  return (
    <>
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-gray-700">
                ¡Parece que estás perdido!
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Con este botón regresaras a la pantalla anterior.
              </p>
              <div className="mt-12">
                <span
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-red-600 active:bg-gray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 cursor-pointer"
                  onClick={ history.goBack }
                >
                  <i className="fas fa-backward"></i> Regresar
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-600">
          <img
            className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
            src={require("assets/img/404.svg")}
            alt="..."
          />
        </div>
      </section>
    </>
  );
}