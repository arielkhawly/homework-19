import {React, Fragment} from 'react';
import tableData from './components/tableData';
import UserTable from './components/UserTable';
import './App.css';
import TableFilter from './components/TableFilter';

function App() {
  const employeeComponents = tableData.map((e) => <UserTable employee={e} />)
  return (
<Fragment>
    <TableFilter />
</Fragment>
    <table>
      <thead>
        <th filterkey="first_name">First name</th>
        <th filterkey="last_name">Last name</th>
        <th filterkey="title">Title</th>
      </thead>
      <tbody>
        {employeeComponents}
      </tbody>
    </table>
    </Fragment>
  )
}

export default App;
