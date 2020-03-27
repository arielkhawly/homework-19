import React from "react";

function TableFilter() {
    return (
        <div className="navbar">
            <input type="text" placeholder="Search.."></input>
            <div className="dropdown">
                <button className="dropbtn">Filter by
            <i class="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#">First Name</a>
                    <a href="#">Last Name</a>
                    <a href="#">Title</a>
                </div>
            </div>
        </div>
    )
}
export default TableFilter