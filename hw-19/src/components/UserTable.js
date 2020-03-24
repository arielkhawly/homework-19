import React from "react";

function UserTable() {
    const tableData = [
        {
            first_name: 'Jane',
            last_name: 'Lane',
            title: 'Engineer'
        },
        {
            first_name: 'John',
            last_name: 'Doe',
            title: 'Manager'
        },
        {
            first_name: 'Ariel',
            last_name: 'Khawly',
            title: 'Developer'
        },
        {
            first_name: 'Laura',
            last_name: 'Palmer',
            title: 'Engineer'
        },
        {
            first_name: 'Dana',
            last_name: 'Scully',
            title: 'Manager'
        },
        {
            first_name: 'Larry',
            last_name: 'David',
            title: 'Developer'
        },
        {
            first_name: 'Emily',
            last_name: 'Dickinson',
            title: 'Engineer'
        },
        {
            first_name: 'Annie',
            last_name: 'Oakley',
            title: 'Manager'
        },
        {
            first_name: 'John',
            last_name: 'Mulaney',
            title: 'Developer'
        },
        {
            first_name: 'Lana',
            last_name: 'Del Rey',
            title: 'Engineer'
        }
    ]
    console.log({ tableData })
    return (
        <table>
            <thead>
                <th>First name</th>
                <th>Last name</th>
                <th>Title</th>
            </thead>
            <tr>
                <td>{tableData[0].first_name} </td>
                <td>{tableData[0].last_name} </td>
                <td>{tableData[0].title} </td>
            </tr>
            <tbody>
            <tr>
                <td>{tableData[1].first_name} </td>
                <td>{tableData[1].last_name} </td>
                <td>{tableData[1].title} </td>
            </tr>
            <tr>
                <td>{tableData[2].first_name} </td>
                <td>{tableData[2].last_name} </td>
                <td>{tableData[2].title} </td>
            </tr>
            <tr>
                <td>{tableData[3].first_name} </td>
                <td>{tableData[3].last_name} </td>
                <td>{tableData[3].title} </td>
            </tr>
            <tr>
                <td>{tableData[4].first_name} </td>
                <td>{tableData[4].last_name} </td>
                <td>{tableData[4].title} </td>
            </tr>
            <tr>
                <td>{tableData[5].first_name} </td>
                <td>{tableData[5].last_name} </td>
                <td>{tableData[5].title} </td>
            </tr>
            <tr>
                <td>{tableData[6].first_name} </td>
                <td>{tableData[6].last_name} </td>
                <td>{tableData[6].title} </td>
            </tr>
            <tr>
                <td>{tableData[7].first_name} </td>
                <td>{tableData[7].last_name} </td>
                <td>{tableData[7].title} </td>
            </tr>
            <tr>
                <td>{tableData[8].first_name} </td>
                <td>{tableData[8].last_name} </td>
                <td>{tableData[8].title} </td>
            </tr>
            <tr>
                <td>{tableData[9].first_name} </td>
                <td>{tableData[9].last_name} </td>
                <td>{tableData[9].title} </td>
            </tr>
            </tbody>
        </table>

    )
}
export default UserTable;