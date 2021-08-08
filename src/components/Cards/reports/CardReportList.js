import React, { useContext } from "react";
import PropTypes from "prop-types";

import { ReportUsers } from "components/Reports/Users";
import { ReportAttendance } from "components/Reports/Attendance";
import { ReportJustified } from "components/Reports/Justified";
import SharedContext from "../../../SharedContext";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const CardTable = ({ color }) => {

  const { user } = useContext(SharedContext)

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
            <h3 className="text-gray-100 text-xl font-bold">Lista</h3>
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
                  } style={{ width:"20%" }}
                >
                  Nombre
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  } style={{ width:"10%" }}
                >
                  Área
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  } style={{ width:"60%" }}
                >
                  Descripción
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-blue-800 text-blue-300 border-blue-700")
                  } style={{ width:"10%" }}
                >
                  Generar
                </th>
              </tr>
            </thead>

            <tbody>

                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4 text-left items-center">
                        <span className={ "ml-3 font-bold" } >
                            Datos de usuarios
                        </span>
                    </th>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4 text-left items-center">
                        Usuarios
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4">
                        Lista de usuarios con los datos registrados en el sistema
                    </td>
                    <td className="px-6 align-middle p-4 text-center">
                        <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full"
                          onClick={ async () => pdfMake.createPdf(await ReportUsers(user.apiURL)).download() }
                        >
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </td>
                </tr>

                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4 text-left items-center">
                        <span className={ "ml-3 font-bold" } >
                            Asistencia por usuario
                        </span>
                    </th>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4 text-left items-center">
                        Asistencia
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4">
                        Resumen de cada usuario de asistencia registrada
                    </td>
                    <td className="px-6 align-middle p-4 text-center">
                        <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full"
                          onClick={ async () => pdfMake.createPdf(await ReportAttendance(user.apiURL)).download() }
                        >
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </td>
                </tr>

                <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4 text-left items-center">
                        <span className={ "ml-3 font-bold" } >
                            Lista de justificaciones
                        </span>
                    </th>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4 text-left items-center">
                        Asistencia
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4">
                        Lista de justificaciones con relación a sus usuarios
                    </td>
                    <td className="px-6 align-middle p-4 text-center">
                        <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full"
                          onClick={ async () => pdfMake.createPdf(await ReportJustified(user.apiURL)).download() }
                        >
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </td>
                </tr>

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