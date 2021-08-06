import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = props => {

  const [collapseShow, setCollapseShow] = useState("hidden");

  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center w-full mx-auto">

          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Brand */}
          <p
            className="md:block text-center md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
          >
            <i className="fas fa-school"></i> CTP. Puntarenas
          </p>
          
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <p
                    className="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
                    to="/home/"
                  >
                    <i className="fas fa-school"></i> CTP. Puntarenas
                  </p>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Heading */}
            <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Mi perfil
            </h6>

            {/* Users */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/home/") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/home/"
                >
                  <i
                    className={
                      "fas fa-user mr-2 text-sm " +
                      (window.location.href.indexOf("/home/") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Ingresar
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Heading */}
            <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Comunicación
            </h6>

            {/* Comunication */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/comunication/Compose") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/comunication/Compose"
                >
                  <i
                    className={
                      "fas fa-pen mr-2 text-sm " +
                      (window.location.href.indexOf("/comunication/Compose") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Redactar
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/comunication/Inbox") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/comunication/Inbox"
                >
                  <i
                    className={
                      "fas fa-list-alt mr-2 text-sm " +
                      (window.location.href.indexOf("/comunication/Inbox") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Buzón
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/comunication/Deleted") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/comunication/Deleted"
                >
                  <i
                    className={
                      "fas fa-trash-alt mr-2 text-sm " +
                      (window.location.href.indexOf("/comunication/Deleted") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Eliminados
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Heading */}
            <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Funcionarios
            </h6>

            {/* Funcionarios */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/users/List?s=users") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/users/List?s=users"
                >
                  <i
                    className={
                      "fas fa-users mr-2 text-sm " +
                      (window.location.href.indexOf("/users/List?s=users") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Lista
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/users/Add") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/users/Add"
                >
                  <i
                    className={
                      "fas fa-user-plus mr-2 text-sm " +
                      (window.location.href.indexOf("/users/Add") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Agregar
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Heading */}
            <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Asistencia
            </h6>

            {/* Asistencia */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/attendance/Justify") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/attendance/Justify"
                >
                  <i
                    className={
                      "fas fa-calendar-check mr-2 text-sm " +
                      (window.location.href.indexOf("/attendance/Justify") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Justificar
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Heading */}
            <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Reportes
            </h6>

            {/* Reportes */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/reports/List") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/reports/List"
                >
                  <i
                    className={
                      "fas fa-list-alt mr-2 text-sm " +
                      (window.location.href.indexOf("/reports/List") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Lista
                </Link>
              </li>

            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Heading */}
            <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Privilegios
            </h6>

            {/* Privilegios */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/users/List?s=privileges") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/users/List?s=privileges"
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf("/users/List?s=privileges") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Administrar
                </Link>
              </li>

            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Last - Utilities */}
            <h6 className="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Otros
            </h6>

            {/* Utilities */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/home/ChangePassword") !== -1
                      ? "text-blue-500 hover:text-blue-600"
                      : "text-gray-800 hover:text-gray-600")
                  }
                  to="/home/ChangePassword"
                >
                  <i
                    className={
                      "fas fa-edit mr-2 text-sm " +
                      (window.location.href.indexOf("/home/ChangePassword") !== -1
                        ? "opacity-75"
                        : "text-gray-400")
                    }
                  ></i>{" "}
                  Cambiar contraseña
                </Link>
              </li>

              <li className="items-center">
                <button type="button" onClick={() => props.logout()}
                  className={ "text-xs uppercase py-3 font-bold block text-gray-800 hover:text-gray-600" } >
                  <i
                    className={ "fas fa-sign-out-alt mr-2 text-sm text-gray-400" }
                  ></i>{" "}
                  Log out
                </button>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}

export default SideBar