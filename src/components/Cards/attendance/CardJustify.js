import React from "react";

export default function CardTable() {

  return (
    <>
        <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-300 border-0 mt-12 pt-6">

            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>

                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                Información requerida para realizar justificación
                </h6>

                <div className="flex flex-wrap">

                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-password">
                                Usuario
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
                            htmlFor="grid-password">
                            Fecha
                        </label>
                        <input
                            type="date"
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