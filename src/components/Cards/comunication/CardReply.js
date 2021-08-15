import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2'
import SharedContext from "../../../SharedContext";

const CardTable = () => {

    const history = useHistory();
    const urlParams = new URLSearchParams(window.location.search);
    const { user } = useContext(SharedContext)
    const [ msg, setMsg ] = useState({})

    const loadMessage = async () => {
        try {
            const endpoint = `message/get/${urlParams.get('msg')}`
            const msg = await axios({
                method: 'GET',
                url: `${user.apiURL}/${endpoint}`
            });

            //msg.data.Message.userSend = await getUserName(msg.data.Message.user_from)
            msg.data.Message.user_from.includes('@')
                ?
                msg.data.Message.userSend = `${msg.data.Message.user_from}`
                :
                msg.data.Message.userSend = await getUserName(msg.data.Message.user_from)
            


            msg.data.Message.title = 'Re: ' + msg.data.Message.title
            setMsg(msg.data.Message)
        } catch (error) {
            Swal.fire("Algo salio mal")
        }   
    }

    const getUserName = async userId => {
        try {
            const endpoint = `functionary/getById/${userId}`
            const data = await axios({
              method: 'GET',
              url: `${user.apiURL}/${endpoint}`
            });
            return `${data.data.User.name}`
        } catch (error) {
            Swal.fire("Algo salio mal")
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
                        let endpoint = `message/send`
                        if(document.getElementById('sendTo').value.includes('@')) endpoint = 'message/sendExternal'

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
                        Swal.fire("Algo salio mal")
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
        loadMessage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <>
        <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-300 border-0 mt-12 pt-6">

            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>

                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase"> Respondiendo a: </h6>

                <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="sendTo"
                            >
                                Para
                            </label>
                            <select className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white 
                                rounded text-sm shadow focus:outline-none focus:shadow-outline w-full 
                                ease-linear transition-all duration-150"
                                id="sendTo" name="sendTo">
                                    <option value={msg.user_from} > { msg.userSend } </option>
                            </select>
                        </div>
                    </div>
                </div>

                <hr className="mt-6 border-b-1 border-gray-400" />

                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                Información de mensaje a responder
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
                            id="affair" name="affair" 
                            defaultValue={ msg.title } />
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
                        />
                        </div>
                    </div>

                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3 text-right">
                        <button type="button"
                            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                            id="sendMessage" name="sendMessage"
                            onClick={ () => sendMessage() }
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