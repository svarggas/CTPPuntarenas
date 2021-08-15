import React, { useContext, useState, useEffect } from "react";
import axios from "axios"
import Swal from 'sweetalert2'
import SharedContext from "../../../SharedContext";

const CardTable = () => {

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
        Swal.fire("Algo salio mal")
      }
    }
  
    useEffect(() => { 
      loadUsers()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const justifyAbsence = async () => {
    
        const _user = document.getElementById('userToJustify').value,
          date = document.getElementById('date').value,
          description = document.getElementById('description').value

        try {
          const endpoint = `binnacle/justify/${user.data._id}`
          const justify = await axios({
            method: 'PUT',
            url: `${user.apiURL}/${endpoint}`,
            data: {
              user: _user,
              date: date,
              justified_description: description,
            }
          });
    
          console.log(justify)
          Swal.fire('Información actualizada');
          
        } catch (error) {
          Swal.fire("Algo salio mal")
        }
    }

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
                                id="userToJustify" name="userToJustify">
                                    {
                                        userList.map( mappedUser => {
                                            return (
                                                <option value={ mappedUser._id } key={ mappedUser.user } > { mappedUser.name } </option>
                                            )
                                        })
                                    }
                            </select>
                        </div>
                    </div>

                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="date">
                            Fecha
                        </label>
                        <input
                            type="date"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            id="date" name="date"/>
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
                            id="sendMessage" name="sendMessage" onClick={ () => justifyAbsence() }
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