import React from "react";

function TableFilter() {
    return(
        <div class="navbar">
        <div class="dropdown">
          <button class="dropbtn">Filter by
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">First Name</a>
            <a href="#">Last Name</a>
            <a href="#">Title</a>
          </div>
        </div> 
      </div>
    )
}
export default TableFilter