import React from "react";
function UserTable({ employee }) {
    return (
        <tr>
            <td>{employee.first_name} </td>
            <td>{employee.last_name} </td>
            <td>{employee.title} </td>
        </tr>

    )
}
export default UserTable;