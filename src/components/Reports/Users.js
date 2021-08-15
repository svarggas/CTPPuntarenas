import axios from 'axios';
import Swal from 'sweetalert2'

export const ReportUsers = apiURL => {

    const docDefinition = async () => {
        const header = ['Nombre', 'Estado', 'Identificación', 'Email', 'Dirección', 'Celular', 'Teléfono'],
            body = [header,],
            data = await getUsers()

        let user, row
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                user = data[key]
                row = []

                row.push(user.name.toString());
                row.push(user.status ? "Activo" : "Inactivo");
                row.push(user.identification.toString());
                row.push(user.email.toString());
                row.push(user.address.toString());
                row.push(user.cellphone.toString());
                row.push(user.telephone.toString());

                body.push(row);
            }
        }

        return {
            content: [{
                table: {
                    headerRows: 1,
                    width: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                    body: body
                }
            }]
        }

    };

    const getUsers = async () => {
        try {
            const endpoint = `functionary/getList/all`
            const list = await axios({
                method: 'GET',
                url: `${apiURL}/${endpoint}`
            });
            return (list.data.User)
        } catch (error) {
            Swal.fire("Algo salio mal")
        }
    }

    return docDefinition()

}