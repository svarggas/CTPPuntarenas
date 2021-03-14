import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import userGreen from 'assets/img/userGreen.png';
import userIndigo from 'assets/img/userIndigo.png';
import userPink from 'assets/img/userPink.png';
import userYellow from 'assets/img/userYellow.png';
import userPurple from 'assets/img/userPurple.png';
import userBlack from 'assets/img/userBlack.png';

export default function CardTable({ color }) {

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
            <div>
                <Link to="Compose"
                className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                >
                    Redactar
                </Link>
                <Link to="Search"
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                >
                    Buscar
                </Link>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto text-gray-900">
            <table className="w-full bg-transparent border-collapse">

                <tbody className="bg-gray-200">

                    <tr className="bg-white border-4 border-gray-200">
                        <td className="p-4 text-gray-900 text-9xl"
                            style={{ width:"5%" }}
                        >
                            <div className="flex items-center">
                                <img alt="" src={userGreen} 
                                    style={{ width:"45px" }}/>
                            </div>
                        </td>
                        <td className="p-4 text-left"
                            style={{ width:"70%"}}
                        >

                            <span className="font-semibold">
                                Rafael Alejandro Barboza Rojas
                            </span><br/>
                            Lorem Ipsum

                        </td>
                        <td className="p-4 text-center text-xl"
                            style={{ width:"5%" }}
                        >
                            <i className="fas fa-eye"></i>
                        </td>
                        <td className="p-4 text-center"
                            style={{ width:"10%" }}
                        >
                            <span>Funcionario</span>
                        </td>
                        <td className="p-4 text-center"
                            style={{ width:"10%" }}
                        >
                            <span>05/06/2020<br/>10:00</span>
                        </td>
                        <td className="p-4 text-center text-xl"
                            style={{ width:"5%" }}
                        >
                            <Link to="Message"
                                className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full"
                            >
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </td>
                    </tr>

                    <tr className="bg-white border-4 border-gray-200">
                        <td className="p-4 text-gray-900 text-9xl"
                            style={{ width:"5%" }}
                        >
                            <div className="flex items-center">
                                <img alt="" src={userIndigo} 
                                    style={{ width:"45px" }}/>
                            </div>
                        </td>
                        <td className="p-4 text-left"
                            style={{ width:"70%"}}
                        >

                            <span className="font-semibold">
                                Victoria Vargas Rojas
                            </span><br/>
                            Lorem Ipsum

                        </td>
                        <td className="p-4 text-center text-xl"
                            style={{ width:"5%" }}
                        >
                            <i className="fas fa-eye-slash"></i>
                        </td>
                        <td className="p-4 text-center"
                            style={{ width:"10%" }}
                        >
                            <span>Ex Alumno</span>
                        </td>
                        <td className="p-4 text-center"
                            style={{ width:"10%" }}
                        >
                            <span>05/06/2020<br/>10:00</span>
                        </td>
                        <td className="p-4 text-center text-xl"
                            style={{ width:"5%" }}
                        >
                            <Link to="Message"
                                className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full"
                            >
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </td>
                    </tr>

                    <tr className="bg-white border-4 border-gray-200">
                        <td className="p-4 text-gray-900 text-9xl"
                            style={{ width:"5%" }}
                        >
                            <div className="flex items-center">
                                <img alt="" src={userPink} 
                                    style={{ width:"45px" }}/>
                            </div>
                        </td>
                        <td className="p-4 text-left"
                            style={{ width:"70%"}}
                        >

                            <span className="font-semibold">
                                Jimena Vargas Perez
                            </span><br/>
                            Lorem Ipsum

                        </td>
                        <td className="p-4 text-center text-xl"
                            style={{ width:"5%" }}
                        >
                            <i className="fas fa-eye"></i>
                        </td>
                        <td className="p-4 text-center"
                            style={{ width:"10%" }}
                        >
                            <span>Alumno</span>
                        </td>
                        <td className="p-4 text-center"
                            style={{ width:"10%" }}
                        >
                            <span>05/06/2020<br/>10:00</span>
                        </td>
                        <td className="p-4 text-center text-xl"
                            style={{ width:"5%" }}
                        >
                            <Link to="Message"
                                className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full"
                            >
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </td>
                    </tr>

                    <tr className="bg-white border-4 border-gray-200">
                        <td className="p-4 text-gray-900 text-9xl"
                            style={{ width:"5%" }}
                        >
                            <div className="flex items-center">
                                <img alt="" src={userPurple} 
                                    style={{ width:"45px" }}/>
                            </div>
                        </td>
                        <td className="p-4 text-left"
                            style={{ width:"70%"}}
                        >

                            <span className="font-semibold">
                                Sebastián Rojas
                            </span><br/>
                            Lorem Ipsum

                        </td>
                        <td className="p-4 text-center text-xl"
                            style={{ width:"5%" }}
                        >
                            <i className="fas fa-eye-slash"></i>
                        </td>
                        <td className="p-4 text-center"
                            style={{ width:"10%" }}
                        >
                            <span>Padre</span>
                        </td>
                        <td className="p-4 text-center"
                            style={{ width:"10%" }}
                        >
                            <span>05/06/2020<br/>10:00</span>
                        </td>
                        <td className="p-4 text-center text-xl"
                            style={{ width:"5%" }}
                        >
                            <Link to="Message"
                                className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full"
                            >
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </td>
                    </tr>

                    <tr className="bg-white border-4 border-gray-200">
                        <td className="p-4 text-gray-900 text-9xl"
                            style={{ width:"5%" }}
                        >
                            <div className="flex items-center">
                                <img alt="" src={userYellow} 
                                    style={{ width:"45px" }}/>
                            </div>
                        </td>
                        <td className="p-4 text-left"
                            style={{ width:"70%"}}
                        >

                            <span className="font-semibold">
                                Daniel Villalobos Vargas
                            </span><br/>
                            Lorem Ipsum

                        </td>
                        <td className="p-4 text-center text-xl"
                            style={{ width:"5%" }}
                        >
                            <i className="fas fa-eye-slash"></i>
                        </td>
                        <td className="p-4 text-center"
                            style={{ width:"10%" }}
                        >
                            <span>Interesado</span>
                        </td>
                        <td className="p-4 text-center"
                            style={{ width:"10%" }}
                        >
                            <span>05/06/2020<br/>10:00</span>
                        </td>
                        <td className="p-4 text-center text-xl"
                            style={{ width:"5%" }}
                        >
                            <Link to="Message"
                                className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full"
                            >
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </td>
                    </tr>

                    <tr className="bg-white border-4 border-gray-200">
                        <td className="p-4 text-gray-900 text-9xl"
                            style={{ width:"5%" }}
                        >
                            <div className="flex items-center">
                                <img alt="" src={userBlack} 
                                    style={{ width:"45px" }}/>
                            </div>
                        </td>
                        <td className="p-4 text-left"
                            style={{ width:"70%"}}
                        >

                            <span className="font-semibold">
                                Zenya Malena Rojas Gugoltz
                            </span><br/>
                            Lorem Ipsum

                        </td>
                        <td className="p-4 text-center text-xl"
                            style={{ width:"5%" }}
                        >
                            <i className="fas fa-eye-slash"></i>
                        </td>
                        <td className="p-4 text-center"
                            style={{ width:"10%" }}
                        >
                            <span>Otro</span>
                        </td>
                        <td className="p-4 text-center"
                            style={{ width:"10%" }}
                        >
                            <span>05/06/2020<br/>10:00</span>
                        </td>
                        <td className="p-4 text-center text-xl"
                            style={{ width:"5%" }}
                        >
                            <Link to="Message"
                                className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full"
                            >
                                <i className="fas fa-arrow-right"></i>
                            </Link>
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