import React, { useState, useEffect, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2'
import SharedContext from "../../../SharedContext";

const CardUserPriv = () => {

  const history = useHistory()
  const userHandled = new URLSearchParams(useLocation().search).get('user');
  const { user } = useContext(SharedContext)

  const [ userData, setUserData] = useState({})
  const loadUser = async () => {
    try {
      const endpoint = `functionary/getList/${userHandled}`
      const data = await axios({
        method: 'GET',
        url: `${user.apiURL}/${endpoint}`
      });
      setUserData(data.data.User[0])
    } catch (error) {
      Swal.fire(
  '¡Error!',
  'Algo salio mal al intentar la operación.',
  'error'
)
    }
  }

  const updateUser = async () => {

    const button = document.getElementById('btnUpdate')
    button.disabled = true
    button.classList.remove('bg-blue-500');
    button.classList.add('bg-gray-900');

    const _user = userData.user,
      identification = document.getElementById('identification').value,
      name = document.getElementById('name').value,
      address = document.getElementById('address').value,
      cellphone = document.getElementById('cellphone').value,
      telephone = document.getElementById('telephone').value,
      email = document.getElementById('email').value,
      comments = document.getElementById('comments').value

    try {
      const endpoint = `functionary/update/${user.data._id}`
      await axios({
        method: 'PUT',
        url: `${user.apiURL}/${endpoint}`,
        data: {
          user: _user,
          identification: identification,
          name: name,
          address: address,
          cellphone: cellphone,
          telephone: telephone,
          email: email,
          comments: comments
        }
      });

      button.disabled = false
      button.classList.add('bg-blue-500');
      button.classList.remove('bg-gray-900');

      Swal.fire('Información actualizada');
      
    } catch (error) {
      Swal.fire(
  '¡Error!',
  'Algo salio mal al intentar la operación.',
  'error'
)
    }
  }

  const changeStatus = async () => {

    let newStatus = null
    userData.status ? newStatus = false : newStatus = true

    try {
      const endpoint = `functionary/updateStatus/${userData._id}`
      await axios({
        method: 'PUT',
        url: `${user.apiURL}/${endpoint}`,
        data: {
          status: newStatus
        }
      });

      Swal.fire("El estado del usario se cambio con exito")
      
    } catch (error) {
      Swal.fire(
  '¡Error!',
  'Algo salio mal al intentar la operación.',
  'error'
)
    }

  }

  const deleteUser = async () => {

    try {
      const endpoint = `functionary/delete/${userData._id}`
      await axios({
        method: 'DELETE',
        url: `${user.apiURL}/${endpoint}`
      });
      history.push({
        pathname: '/users/List',
        search: '?s=users'
      })

    } catch (error) {
      Swal.fire(
  '¡Error!',
  'Algo salio mal al intentar la operación.',
  'error'
)
    }

  }

  useEffect(() => { 
    loadUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateUser, changeStatus])

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-gray-800 text-xl font-bold">
              <i className={ (userData.status ? "text-green-500" : "text-red-500") + " fas fa-circle mr-2"}></i> { userData.name }
            </h6>
            <div>
             <button
                className="bg-green-500 text-white active:bg-green-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button" onClick={ () => updateUser() } id="btnUpdate" name="btnUpdate" >
                Actualizar
              </button>
              <button
                className="bg-blue-600 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button" onClick={ () => changeStatus() } >
                Cambiar estado
              </button>
              <button
                className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button" onClick={ () => deleteUser() } >
                Eliminar
              </button>
            </div>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Información de usuario
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="user"
                  >
                    Usuario
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    id="user" name="user" defaultValue={ userData.user } readOnly
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="identification"
                  >
                    Cédula
                  </label>
                  <input
                    type="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    id="identification" name="identification" defaultValue={ userData.identification }
                  />
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    id="name" name="name" defaultValue={ userData.name }
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-gray-400" />

            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Información de contacto
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="address"
                  >
                    Dirección
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    id="address" name="address" defaultValue={ userData.address }
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="cellphone"
                  >
                    Celular
                  </label>
                  <input
                    type="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    id="cellphone" name="cellphone" defaultValue={ userData.cellphone }
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="telephone"
                  >
                    Teléfono de casa
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    id="telephone" name="telephone" defaultValue={ userData.telephone }
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    id="email" name="email" defaultValue={ userData.email }
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-gray-400" />

            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
              Otro
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="comments"
                  >
                    Otra información importante
                  </label>
                  <textarea
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    rows="4" id="comments" name="comments" defaultValue={ userData.comments }
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CardUserPriv