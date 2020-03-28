import React, { useState, Fragment } from "react";
import tableData from './tableData';
import UserTable from "./UserTable";


function TableNav() {
    const [search, setSearch] = useState('');
    const updateSearch = (event) => {
        setSearch(event.target.value.toLowerCase());
    }
    const employeeList = tableData.filter(({ first_name }) => first_name.toLowerCase().includes(search))
    const [sort, setSort] = useState('default');
    const sortTypes = {
        default: (a, b) => a,
        firstName: (a, b) => (a.first_name > b.first_name) ? 1 : ((a.first_name < b.first_name) ? -1 : 0),
        lastName: (a, b) => (a.last_name > b.last_name) ? 1 : ((a.last_name < b.last_name) ? -1 : 0),
        title: (a, b) => (a.title > b.title) ? 1 : ((a.title < b.title) ? -1 : 0),

}


    return (
        <Fragment>
            <div>
                <div className="navbar">
                    <input type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={updateSearch}></input>
                    <div className="dropdown">
                        <button className="dropbtn">Sort by
            <i class="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a onClick={() => setSort('firstName')}>First Name</a>
                            <a onClick={() => setSort('lastName')}>Last Name</a>
                            <a onClick={() => setSort('title')}>Title</a>
                        </div>
                    </div>
                </div>
            </div>
            <UserTable employeeList={employeeList.sort(sortTypes[sort])} />
        </Fragment >

    )

}

export default TableNav