import React, { useContext } from "react";
import SharedContext from "../../SharedContext";
import axios from "axios";
import Swal from 'sweetalert2'

const ChangePassword = () => {

  const { user } = useContext(SharedContext)

  const changePassword = async () => {
    
    const currentPassword = document.getElementById('currentPassword').value,
      newPassword = document.getElementById('newPassword').value,
      newPasswordConfirm = document.getElementById('newPasswordConfirm').value

    if(newPassword !== newPasswordConfirm) {

      Swal.fire("La contraseña nueva y su confirmación no calzan")

    } else {

      if(currentPassword && newPassword && newPasswordConfirm) {

        const button = document.getElementById('btnUpdate')
        button.disabled = true
        button.classList.remove('bg-blue-500');
        button.classList.add('bg-gray-900');

        try {
          const endpoint = `user/changePassword`
          const msgReturned = await axios({
            method: 'PUT',
            url: `${user.apiURL}/${endpoint}`,
            data: {
              userId: user.data._id,
              password: newPassword
            }
          });

          button.disabled = false
          button.classList.add('bg-blue-500');
          button.classList.remove('bg-gray-900');

          Swal.fire(msgReturned.data);
          
        } catch (error) { Swal.fire("Algo salio mal") }

      } else {

        if(!currentPassword || !newPassword || !newPasswordConfirm) Swal.fire("Todos los datos deben ser ingresados")

      }
    }

  }

  return (
    <>
      <div className="flex flex-wrap flex-col content-center">
        <div className="w-full lg:w-8/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-300 border-0 mb-12 mt-12">

              <div className="rounded-t mb-0 px-6 py-6 mb-12 mt-12">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-lg font-bold">
                    Por favor complete los espacios a continuación con el fin de realizar<br/> el cambio de contraseña de su usuario.
                  </h6>
                </div>
              </div>

              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="currentPassword"
                    >
                      Contraseña actual
                    </label>
                    <input 
                      type="password" id="currentPassword" name="currentPassword"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="newPassword"
                    >
                      Contraseña nueva
                    </label>
                    <input
                      type="password" id="newPassword" name="newPassword"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="newPasswordConfirm"
                    >
                      Confirmación de contraseña nueva
                    </label>
                    <input
                      type="password" id="newPasswordConfirm" name="newPasswordConfirm"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blue-900 text-white active:bg-blue-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button" id="btnUpdate" name="btnUpdate" onClick={() => changePassword()}
                    >
                      Cambiar contraseña
                    </button>
                  </div>

                </form>
              </div>

            </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword