import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios"
import SharedContext from "../../../SharedContext";
import Swal from 'sweetalert2'

const CardTable = () => {

    const history = useHistory();
    const { user } = useContext(SharedContext)
    const [ userList, setUserList ] = useState([])

    const loadUsers = async () => {
      try {
        const endpoint = `functionary/getList/all`
        const list = await axios({
          method: 'GET',
          url: `${user.apiURL}/${endpoint}`
        });
        setUserList(list.data.User)
      } catch (error) {
        Swal.fire(
  '¡Error!',
  'Algo salio mal al intentar la operación.',
  'error'
)
      }
    }

    const sendMessage = () => {

        const user_from = user.data._id,
            user_to = document.getElementById('sendTo').value,
            title = document.getElementById('affair').value,
            description = document.getElementById('description').value

        if (description) {

            Swal.fire({
                title: '¿Desea enviar el mensaje?',
                showCancelButton: true,
                confirmButtonText: `Enviar`,
            }).then( async (result) => {
                if (result.isConfirmed) {
                    try {
                        const endpoint = `message/send`
                        const returnedValue = await axios({
                            method: 'POST',
                            url: `${user.apiURL}/${endpoint}`,
                            data: {
                                user_from: user_from,
                                user_to: user_to,
                                title: title,
                                description: description
                            }
                        });
                        if (returnedValue) {
                            Swal.fire('¡Mensaje enviado!', '', 'success')
                            history.push({ pathname: 'Inbox' })
                        }
                    } catch (error) {
                        Swal.fire(
  '¡Error!',
  'Algo salio mal al intentar la operación.',
  'error'
)
                    }
                }
            })
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Espacios vacios',
                text: 'Por favor complete todos los para enviar el mensaje'
              })
        }
    }
  
    useEffect(() => { 
        loadUsers() 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <>
        <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-300 border-0 mt-12 pt-6">

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
                                    {
                                        userList.map( mappedUser => {
                                            return (
                                                mappedUser._id !== user.data._id ?
                                                    <option value={ mappedUser._id } key={ mappedUser.user } > 
                                                        { mappedUser.name } 
                                                    </option>
                                                    :
                                                    null
                                            )
                                        })
                                    }
                            </select>
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
                            htmlFor="affair">
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
                            htmlFor="description">
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
                            onClick={() => sendMessage()}
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

export default CardTable