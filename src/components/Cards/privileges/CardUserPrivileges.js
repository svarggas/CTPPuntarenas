import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import axios from "axios"
import SharedContext from "../../../SharedContext";

const CardTable = ({ color }) => {

  const history = useHistory();
  const urlParams = new URLSearchParams(window.location.search);

  const { user } = useContext(SharedContext)

  const [ privList, setPrivList ] = useState([])
  const loadPrivileges = async () => {
    try {
      const endpoint = `privilege/get/${urlParams.get('user')}`
      const list = await axios({
        method: 'GET',
        url: `${user.apiURL}/${endpoint}`
      });
      setPrivList(list.data.result)
    } catch (error) {
      alert("Algo salio mal")
    }
  }

  const deletePriv = async idPriv => {
    try {
      const endpoint = `privilege/delete/${idPriv}`
      const msgReturned = await axios({
        method: 'DELETE',
        url: `${user.apiURL}/${endpoint}`
      });
      loadPrivileges()
      alert(msgReturned.data)
    } catch (error) {
      alert("Algo salio mal")
    }
  }

  const addPriv = () => history.push({ pathname: '/privileges/Add', search: `?user=${urlParams.get('user')}` })

  useEffect(() => { loadPrivileges() }, [])

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
            <h3 className="text-gray-100 text-xl font-bold">
              Asignados
            </h3>
            <button to="Add"
              className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              onClick={() => addPriv()}
            >
              Asignar
            </button>
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
                    Privilegio
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                    Descripción
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  }
                >
                  Eliminar
                </th>
              </tr>
            </thead>

            <tbody>

              {
                privList.map( priv => {
                  return (
                    <tr key={priv._id} >
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4 text-left items-center">
                        <span className={
                            "ml-3 font-bold " +
                            + (color === "light" ? "text-gray-700" : "text-white")
                          } style={{"textTransform": "capitalize"}}>

                          { priv.name === "users" ? "Usuarios" : null }
                          { priv.name === "privileges" ? "Privilegios" : null }
                          { priv.name === "attendance" ? "Asistencia" : null }
                          { priv.name === "reports" ? "Reportes" : null }
                          
                        </span>
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4">
                        
                      { priv.name === "users" ? "Acceso a administrar los usuarios" : null }
                      { priv.name === "privileges" ? "Acceso a administrar privilegios de los usuarios" : null }
                      { priv.name === "attendance" ? "Acceso a justificar ausencias" : null }
                      { priv.name === "reports" ? "Acceso a reportes del sistema" : null }
                        
                      </td>
                      <td className="px-6 align-middle text-sm whitespace-no-wrap p-4 text-center">
                        <button type="button"
                          className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full"
                          onClick={() => deletePriv(priv._id)}
                        >
                          <i className="fas fa-trash"></i>
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

CardTable.defaultProps = { color: "light", };

CardTable.propTypes = { 
  color: PropTypes.oneOf(["light", "dark"]),
};

export default CardTable