import React from "react";
import tableData from './tableData';

class TableNav extends React.Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }
    }
    updateSearch(event) {
        this.setState(search.event.target.value)
    }
    render() {
        let filteredEmployees = this.props.tableData.filter((employee) => {
            return employee.first_name.indexOf(this.state.search) !== -1;
     
        })
    return (
        <div className="navbar">
            <input type="text" value={this.state.search} 
            onChange={this.updateSearch.bind(this)}
            placeholder="Search.."></input>
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
    )
   
    }
}

export default TableNav