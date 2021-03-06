import React from "react";

// components
import Navbar from "components/Navbars/AuthNavbar.js";
import FooterLanding from "components/Footers/FooterLanding.js";
import GoogleMap from "components/Maps/Map.js";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1404&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    "Saber, Trabajo y Ser"
                  </h1>
                  <h2 className="text-white font-semibold text-4xl">
                    1974
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-angle-up"></i>
                    </div>
                    <h6 className="text-xl font-semibold">S??timo, Octavo, Noveno</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Recibiras Ingl??s Conversacional, adem??s de 2 talleres basados en la 
                      especialidad escojida cuando llegue a 10mo.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Obtengo 2 t??tulos</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      1. Bachillerato en Educaci??n Diversificada<br/>
                      2. T??cnico medio en la especialidad elejida
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-angle-double-up"></i>
                    </div>
                    <h6 className="text-xl font-semibold">D??cimo</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Ser?? posible elegir entre las 12 especialidades que ofrecemos a todos nuestros estudiantes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-monument text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Historia
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  En 1967 se propone la moci??n durante una de las sesiones municipales de ceder parte de la finca el Socorrito al Ministerio de Educaci??n P??blica con el fin de crear una Instituci??n Educativa de car??cter t??cnico.   
                  Se redacta el proyecto de ley para la Asamblea Legislativa y es aprobado el 5 de enero de 1968, en la ley N?? 4062. 
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Seg??n la ley anterior el establecimiento educativo tendr??a que impartir b??sicamente una educaci??n profesional seg??n los planes y programas que le se??alar?? el Consejo Superior de Educaci??n. Se inicia entonces, en su primera etapa con un costo de ??l.263.500.oo los cuales son aportados por el Gobierno y el Banco de Desarrollo Interamericano (B.I.D.) bajo el programa de Alianza para el Progreso. 
                  En 1973 se inicia la segunda y ??ltima etapa con el aporte financiero del Estado por un monto de ??2.893.000.oo en los primeros meses de 1975, cuando se hac??an los ??ltimos retoques a la planta f??sica. 
                  Sin embargo, en el a??o 1974 ya se hab??an comenzado los primeros cursos lectivos con los niveles de s??timo y d??cimo, impartiendo cuatro especialidades.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blue-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Brindando servicios desde 1974
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Educaci??n de calidad, impulsando al pa??s.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300">
                    <i className="fas fa-bolt text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">Ventajas de estudiar en un Colegio T??cnico</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Aparte del hecho que sales con un t??tulo de T??cnico despu??s de finalizar el colegio, estas son algunas de las ventajas al estudiar con
                    nosotros: 
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            1.
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                          Inserci??n laboral casi inmediata.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            2.
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Puestos disponibles con un alto nivel de especializaci??n.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            3.
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Complementaci??n de estudios universitarios.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            4.
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Contribuyes con la competitividad del pa??s.
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-900">
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
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-24">
            <h3 className="text-3xl mb-2 font-semibold leading-normal text-white" >Localizaci??n</h3>
            <h4 className="text-white">Provincia de Puntarenas, Barranca, Riojalandia, C. 226.</h4><br/>
            <GoogleMap/>
          </div>
        </section> 

      </main>
      <FooterLanding />
    </>
  );
}