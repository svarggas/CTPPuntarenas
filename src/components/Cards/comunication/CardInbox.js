import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2'

import userGreen from 'assets/img/userGreen.png';
import userIndigo from 'assets/img/userIndigo.png';
import userPink from 'assets/img/userPink.png';
import userYellow from 'assets/img/userYellow.png';
import userPurple from 'assets/img/userPurple.png';
import userBlack from 'assets/img/userBlack.png';

import SharedContext from "../../../SharedContext";

const CardTable = ({ color }) => {

    const history = useHistory();
    const { user } = useContext(SharedContext)
    const [ msgList, setMsgList ] = useState([])

    const loadMessages = async () => {
        try {
            const endpoint = `message/getInbox/${user.data._id}`
            const list = await axios({
                method: 'GET',
                url: `${user.apiURL}/${endpoint}`
            });
            
            for (const element of list.data.Inbox) {
                element.userSendName = await getUserName(element.user_from)
            }

            setMsgList(list.data.Inbox)
        } catch (error) {
            alert(error)
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
            alert("Algo salio mal")
        }
    }

    const deleteMessage = msgId => {
        Swal.fire({
            title: '¿Desea eliminar el mensaje seleccionado?',
            showCancelButton: true,
            confirmButtonText: `Eliminar`,
        }).then( async (result) => {
            if (result.isConfirmed) {
                try {
                    const endpoint = `message/delete/${msgId}`
                    await axios({
                        method: 'DELETE',
                        url: `${user.apiURL}/${endpoint}`
                    });
                    loadMessages()
                    Swal.fire('¡Eliminado!', '', 'success')
                } catch (error) {
                    alert("Algo salio mal")
                }
            }
        })
    }

    const avatars = [userGreen, userIndigo , userPink , userYellow , userPurple, userBlack]
    const getRandomAvatar = () => avatars[Math.floor(Math.random() * avatars.length)]

    const formatDate = date => {
        const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        const dateObj = new Date(date);
        const month = monthNames[dateObj.getMonth()];
        const day = String(dateObj.getDate()).padStart(2, '0');
        const year = dateObj.getFullYear();
        return `${day}-${month}-${year}`
    }

    useEffect(() => { loadMessages() }, [])

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h3 className="text-gray-100 text-xl font-bold">Bandeja</h3>
          </div>
        </div>

        <div className="block w-full overflow-x-auto text-gray-900">
            <table className="w-full bg-transparent border-collapse">

            <thead>
                <th colSpan="2" className="p-4 text-gray-300 text-9xl">Mensaje</th>
                <th className="p-4 text-gray-300 text-9xl text-center">Estado</th>
                <th className="p-4 text-gray-300 text-9xl text-center">Fecha</th>
                <th className="p-4 text-gray-300 text-9xl text-center">Eliminar</th>
                <th className="p-4 text-gray-300 text-9xl text-center">Ingresar</th>
            </thead>

                <tbody className="bg-gray-200">

                    {
                        msgList.map( msg => {
                            return(
                                <tr className="bg-white border-4 border-gray-200" key={ msg._id }>
                                    <td className="p-4 text-gray-900 text-9xl"
                                        style={{ width:"5%" }}
                                    >
                                        <div className="flex items-center">
                                            <img alt="" src={ getRandomAvatar() } 
                                                style={{ width:"45px" }}/>
                                        </div>
                                    </td>
                                    <td className="p-4 text-left" style={{ width:"40%"}} >

                                        <span className="font-semibold"> { msg.userSendName } </span><br/>
                                        { msg.title }

                                    </td>
                                    <td className="p-4 text-center text-xl"
                                        style={{ width:"5%" }}
                                    >
                                        { 
                                            msg.seen ? 
                                            <i className="fas fa-eye"></i> : 
                                            <i className="fas fa-eye-slash"></i> 
                                        }
                                    </td>
                                    <td className="p-4 text-center"
                                        style={{ width:"10%" }}
                                    >
                                        <span> { formatDate(msg.date) } </span>
                                    </td>
                                    <td className="p-4 text-center text-xl"
                                        style={{ width:"5%" }}
                                    >
                                        <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full"
                                            onClick={ () => deleteMessage(msg._id) }
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                    <td className="p-4 text-center text-xl"
                                        style={{ width:"5%" }}
                                    >
                                        <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full"
                                            onClick={ () => history.push({ pathname: 'Message', search:`?msg=${msg._id}` }) }
                                        >
                                            <i className="fas fa-arrow-right"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>

            </table>
        </div>
      </div>
    </>
  );
}

export default CardTable