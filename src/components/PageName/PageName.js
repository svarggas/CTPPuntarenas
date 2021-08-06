export default () => {

    const pathLocation = window.location.pathname + window.location.search;
    
    switch (pathLocation) {
        // Home
        case "/home/":
            return "Mi Perfil";
        // Comunication
        case "/comunication/Compose":
            return "Redactar mensaje";
        case "/comunication/Inbox":
            return "Mensajes recibidos";
        case "/comunication/Deleted":
            return "Mensajes eliminados";
        case "/comunication/Sended":
            return "Mensajes enviados";
        case "/comunication/Search":
        return "Buscador de mensajes";
        // Users
        case "/users/List?s=users":
            return "Listado de funcionarios";
        case "/users/Add":
            return "Agregar funcionario";
        // Attendance
        case "/attendance/Justify":
            return "Justificación de ausencias";
        // Reports
        case "/reports/List":
            return "Reportes";
        // Privileges
        case "/users/List?s=privileges":
            return "Privilegios, listado de funcionarios";
        case "/privileges/Add":
            return "Agregar privilegios al funcionario";
        // Change Password
        case "/home/ChangePassword":
            return "Cambiar contraseña";
        default: {
            // With queryString params
            if ( ((pathLocation.match())["input"]).includes("/users/Handler") ) return "Edición de usuario"
            if ( ((pathLocation.match())["input"]).includes("/privileges/Handler") ) return "Privilegios relacionados al usuario"
            return "-"
        }
    }
}