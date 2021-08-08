import axios from 'axios';

export const ReportAttendance = apiURL => {

    const docDefinition = async () => {

        const body = [],
            data = await getAttendance()

        let userAttendance, row, attendance, attendanceType, userName, userJustified
        for (let keyUserGroup in data) {
            if (data.hasOwnProperty(keyUserGroup)) {

                userAttendance = data[keyUserGroup].attendance
                userName = await getUserById(data[keyUserGroup]._id.user)
                console.log(data[keyUserGroup]._id.user)
                body.push([{ text: `Usuario: ${userName ? userName : "-"}`, colSpan: 6, alignment: 'center' }, {}, {}, {}, {}, {}])
                body.push(['Fecha', 'IP', 'Tipo', 'Justificado por', 'Fecha de just.', 'Descripción de just.'])

                for (let keyAttendance in userAttendance) {

                    attendance = userAttendance[keyAttendance]
                    row = []

                    if (attendance.type.toString() === "absence") attendanceType = "Ausente"
                    else if (attendance.type.toString() === "justified") attendanceType = "Justificado"
                    else attendanceType = "Presente"

                    if (!attendance.justified_by) userJustified = ''
                    else userJustified = await getUserById(attendance.justified_by)

                    row.push(formatDate(attendance.date))
                    row.push(attendance.ip.toString())
                    row.push(attendanceType)
                    row.push(userJustified)
                    row.push(attendance.justified_date ? formatDate(attendance.justified_date) : '')
                    row.push(attendance.justified_description ? attendance.justified_description.toString() : '')

                    body.push(row);

                }

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

    const getAttendance = async () => {
        try {
            const endpoint = `binnacle/getList/all`
            const list = await axios({
                method: 'GET',
                url: `${apiURL}/${endpoint}`
            });
            return (list.data.Attendance)
        } catch (error) {
            alert("Algo salio mal")
        }
    }

    const formatDate = dateRecieved => {
        const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
        const dateObj = new Date(dateRecieved);
        const month = monthNames[dateObj.getMonth()];
        const day = String(dateObj.getDate()).padStart(2, '0');
        const year = dateObj.getFullYear();
        return month + ', ' + day + ', ' + year;
    }

    const getUserById = async userId => {
        try {
            const endpoint = `functionary/getById/${userId}`
            const data = await axios({
                method: 'GET',
                url: `${apiURL}/${endpoint}`
            });

            let result = ""
            if (data.data.User.length !== 0) result = data.data.User.name
            return result

        } catch (error) {
            alert("Algo salio mal")
        }
    }

    return docDefinition()

}