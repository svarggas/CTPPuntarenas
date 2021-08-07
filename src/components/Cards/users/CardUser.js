import axios from "axios";
import React, { useContext } from "react";
import jwtDecode from 'jwt-decode';
import SharedContext from "../../../SharedContext";

const CardUser = () => {

  const { user, setUser } = useContext(SharedContext)

  const updateUser = async () => {

    const button = document.getElementById('btnUpdate')
    button.disabled = true
    button.classList.remove('bg-blue-500');
    button.classList.add('bg-gray-900');

    const _user = user.data.user,
      comments = user.data.comments,
      identification = document.getElementById('identification').value,
      name = document.getElementById('name').value,
      address = document.getElementById('address').value,
      cellphone = document.getElementById('cellphone').value,
      telephone = document.getElementById('telephone').value,
      email = document.getElementById('email').value,
      notes = document.getElementById('notes').value

    try {
      const endpoint = `functionary/update/${user.data._id}`
      const newUserData = await axios({
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
          other: notes,
          comments: comments
        }
      });

      await updateUserSession(newUserData.data);

      button.disabled = false
      button.classList.add('bg-blue-500');
      button.classList.remove('bg-gray-900');

      alert('Información actualizada');
      
    } catch (error) {
      alert("Algo salio mal")
    }
  }

  const updateUserSession = async data => {

    localStorage.removeItem('uid')
    localStorage.setItem('uid', data.token)

    const localToken = localStorage.getItem('uid')
    const domain = user.apiURL
    const decodedData = jwtDecode(localToken)

    await setUser({
      "apiURL": domain,
      "data": decodedData.user,
      "logged": true
    })

  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-gray-800 text-xl font-bold">
              { user.data.name }
            </h6>
            <button
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button" onClick={() => updateUser()} id="btnUpdate" name="btnUpdate"
            >
              Actualizar
            </button>
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
                    id="user" name="user" readOnly
                    defaultValue={ user.data.user ? user.data.user : "" }
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
                    id="identification" name="identification"
                    defaultValue={ user.data.identification ? user.data.identification : "" }
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
                    id="name" name="name"
                    defaultValue={ user.data.name ? user.data.name : "" }
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
                    id="address" name="address"
                    defaultValue={ user.data.address ? user.data.address : "" }
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
                    id="cellphone" name="cellphone"
                    defaultValue={ user.data.cellphone ? user.data.cellphone : "" }
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
                    id="telephone" name="telephone"
                    defaultValue={ user.data.telephone ? user.data.telephone : "" }
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
                    id="email" name="email"
                    defaultValue={ user.data.email ? user.data.email : "" }
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
                    htmlFor="notes"
                  >
                    Mis apuntes
                  </label>
                  <textarea
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    rows="4" id="notes" name="notes"
                    defaultValue={ user.data.other ? user.data.other : "" }
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

export default CardUser