import React from "react";
function TableItem({ employee }) {
    return (
        <tr>
            <td>{employee.first_name} </td>
            <td>{employee.last_name} </td>
            <td>{employee.title} </td>
        </tr>

    )
}

function UserTable(props) {
    return (
        <table>
            <thead>
                <th filterkey="first_name">First name</th>
                <th filterkey="last_name">Last name</th>
                <th filterkey="title">Title</th>
            </thead>
            <tbody>
                {tableData.map((e, i) => <TableItem key={i} employee={e} />)}
            </tbody>
        </table>
    )
}
export default UserTable;