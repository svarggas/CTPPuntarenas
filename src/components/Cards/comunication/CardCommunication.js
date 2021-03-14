import React from "react";

// components

export default function CardMensajeFuncionarios() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex">
            <h6 className="text-gray-800 text-xl font-bold">Comunicación con la institución</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Destinatarios
            </h6>
            <div className="flex flex-wrap">

              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Para
                  </label>
                  <select className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white 
                    rounded text-sm shadow focus:outline-none focus:shadow-outline w-full 
                    ease-linear transition-all duration-150"
                    id="sendTo" name="sendTo">
                        <option value="">Seleccione un destinatario</option>
                        <optgroup label="Docentes">
                            <option value="">Juanita</option>
                        </optgroup>
                        <optgroup label="Funcionarios administrativos">
                            <option value="">Juanito</option>
                        </optgroup>
                  </select>
                </div>
              </div>

              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Correo al que desea recibir respuesta
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    id="replyTo" name="replyTo" placeholder="andres@gmail.com"
                  />
                </div>
              </div>

              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Relación al mensaje a enviar
                  </label>
                  <select className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white 
                    rounded text-sm shadow focus:outline-none focus:shadow-outline w-full 
                    ease-linear transition-all duration-150"
                    id="labelFrom" name="labelFrom">
                        <option value="">Seleccione una opción</option>
                        <option value="padre">Padre</option>
                        <option value="alumno">Alumno</option>
                        <option value="exalumno">Ex Alumno</option>
                        <option value="interesado">Interesado</option>
                        <option value="otro">Otro</option>
                  </select>
                  <span className="text-xs text-gray-600">
                    Esta opción no afecta el envío del mensaje
                  </span>
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-gray-400" />

            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Información del mensaje
            </h6>
            <div className="flex flex-wrap">

              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    Asunto
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    id="affair" name="affair"/>
                </div>
              </div>

              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    Descripción
                  </label>
                  <textarea
                    type="text" rows="8" 
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    id="description" name="description"
                  ></textarea>
                </div>
              </div>

              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3 text-right">
                <button type="button"
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    id="sendMessage" name="sendMessage"
                    >
                        Enviar
                    </button>
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}
