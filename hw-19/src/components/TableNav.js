import React, { useState } from "react";
import tableData from './tableData';
import UserTable from "./UserTable";

function TableNav() {
    const [search, setSearch] = useState('');
    const updateSearch = (event) => {
        setSearch(event.target.value);
    }
    const filterEmployees = () => {
        if (search === '') {
            return tableData
        }
        return tableData.filter((tableItem) => {
            return tableItem.first_name.includes(search);
        })
    }
    return (
        <div>
            <div className="navbar">
                <input type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={updateSearch}></input>
                <div className="dropdown">
                    <button className="dropbtn">Filter by
            <i class="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="firstname" >First Name</a>
                        <a href="#">Last Name</a>
                        <a href="#">Title</a>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TableNav