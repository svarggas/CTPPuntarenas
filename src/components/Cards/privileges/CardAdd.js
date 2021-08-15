import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"
import Swal from 'sweetalert2'
import SharedContext from "../../../SharedContext";

const CardAdd = () => {

    const history = useHistory();
    const urlParams = new URLSearchParams(window.location.search);

    const { user } = useContext(SharedContext)
    const assignPriv = async () => {

        const privilegeSelected = document.getElementById('privileges').value
        if (privilegeSelected) {
            try {
                
                const endpoint = `privilege/add`
                await axios({
                    method: 'POST',
                    url: `${user.apiURL}/${endpoint}`,
                    data: {
                        user: urlParams.get('user'),
                        privilege: privilegeSelected
                    }
                });

                Swal.fire("Privilegio agregado")
                history.push({ pathname: '/privileges/Handler', search: `?user=${urlParams.get('user')}` })

            } catch (error) {
                Swal.fire(
  '¡Error!',
  'Algo salio mal al intentar la operación.',
  'error'
)
            }
        } else {
            Swal.fire("No se ha seleccionado ningun privilegio apra ser asignado")
        }
    }

  return (
    <>
        <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-300 border-0 mt-12 pt-6">

            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>

                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    Privilegios para los módulos del sistema
                </h6>

                <div className="flex flex-wrap">

                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Lista
                            </label>
                            <select className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white 
                                rounded text-md shadow focus:outline-none focus:shadow-outline w-full 
                                ease-linear transition-all duration-150" size="4"
                                id="privileges" name="privileges">
                                    <option value="privileges">Privilegios</option>
                                    <option value="attendance">Asistencia</option>
                                    <option value="reports">Reportes</option>
                                    <option value="users">Usuarios</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3 text-right">
                        <button type="button"
                            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            id="sendMessage" name="sendMessage"
                            onClick={() => assignPriv()}
                            >
                                Asignar
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

export default CardAdd