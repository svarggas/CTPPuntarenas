import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2'
import SharedContext from "../../SharedContext";

const LogIn = () => {

  const { user, setUser } = useContext(SharedContext)
  const history = useHistory()
  
  const userLogIn = async () => {
    if (!user.logged){

      const domain = user.apiURL,
        endpoint = 'user/login',
        email = (document.querySelector('#userEmail')).value,
        password = (document.querySelector('#userPassword')).value;

      try {
        const loginUser = await axios({
          method: 'POST',
          url: `${user.apiURL}/${endpoint}`,
          data: {
            email,
            password
          }
        });

        if(!loginUser.data.userData) Swal.fire(loginUser.data)
        if(loginUser.data.userData && 
          loginUser.data.userData._doc && 
          !loginUser.data.userData._doc.status) Swal.fire("El usuario se encuentra inactivo")

        if(loginUser.data.userData && loginUser.data.userData._doc && loginUser.data.userData._doc.status) {
          localStorage.setItem('uid', loginUser.data.userData.token)
          await setUser({
            "apiURL": domain,
            "data": loginUser.data.userData._doc,
            "token": loginUser.data.userData.token,
            "privileges": loginUser.data.userData.privileges.map( result => result.name )
          })
          setTimeout(() => goTo('/home/'),1000);
        }
        
      } catch (error) { Swal.fire(
  '¡Error!',
  'Algo salio mal al intentar la operación.',
  'error'
) }
    }
  }

  const goTo = path => history.push(path)

  useEffect(() => {
    if (user.logged) goTo('/home/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-sm font-bold">
                    Ingrese sus credenciales para ingresar al sistema
                  </h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Usuario
                    </label>
                    <input
                      type="email"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      id="userEmail"
                      name="userEmail"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      id="userPassword"
                      name="userPassword"
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => userLogIn()}
                    >
                      Ingresar
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                &nbsp;
              </div>
              <div className="w-1/2 text-right">
                <Link to="/utilities/ForgotPassword" className="text-gray-300">
                  <small>¿Olvidó su contraseña?</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn