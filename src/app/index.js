import React from 'react';
import { NavBar } from '../components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Add, Edit, Table,BasicTable } from "../pages";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter >
      <NavBar />
      <Switch>
        <Route path="/students/data" exact component={Table} />
        <Route path="/students/add" exact component={Add} />
        <Route path="/students/edit/:id" exact component={Edit} />
        <Route path="/mui-table" exact component={BasicTable} />
      </Switch>
    </BrowserRouter >
  );
}

export default App;
