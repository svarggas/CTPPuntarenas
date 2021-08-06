import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import axios from "axios"
import SharedContext from "../../../SharedContext";

const CardTable = ({ color }) => {

  const history = useHistory();
  const urlParams = new URLSearchParams(window.location.search);

  const getNextLocation = username => {
    let location, next = urlParams.get("s");
    if (next === 'users') history.push({ pathname: 'Handler', search:`?user=${username}` })
    if (next === 'privileges') history.push({ pathname: '../privileges/Handler', search: `?user=${username}`})
    return location
  }

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
      alert("Algo salio mal")
    }
  }

  useEffect(() => { loadUsers() }, [])

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
            <h3 className="text-gray-100 text-xl font-bold">Usuarios</h3>
            <Link to="Add"
              className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            >
              Agregar Nuevo
            </Link>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Nombre
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Cédula
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Estado
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Seleccionar
                </th>
              </tr>
            </thead>

            <tbody>

              { 
                userList.map( mappedUser => {
                  return (
                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4 text-left items-center">
                        <span
                          className={
                            "ml-3 font-bold " +
                            +(color === "light" ? "text-gray-700" : "text-white")
                          }
                        >
                          { mappedUser.name }
                        </span>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4">
                        { mappedUser.identification }
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4">
                        <i className={ (mappedUser.status ? "text-green-500" : "text-red-500") + " fas fa-circle mr-2"}></i> 
                        { mappedUser.status ? 'Activo' : 'Inactivo'}
                      </td>
                      <td className="px-6 align-middle text-sm whitespace-no-wrap p-4 text-center">
                          <button onClick={ () => getNextLocation(mappedUser.user) }
                            className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 border rounded-full"
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

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

export default CardTable