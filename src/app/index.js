import React from 'react';
import { NavBar } from '../components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Add, Edit, Table, BasicTable, Profile } from "../pages";
import 'bootstrap/dist/css/bootstrap.min.css'
import Auth0ProviderWithHistory from "../auth0-provider-with-history";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, error } = useAuth0();
  if (error) { return <div>Oops... {error.message}</div>; }
  if (isLoading) { return <div> loading...</div>; }
  return (
    <BrowserRouter >
      <Auth0ProviderWithHistory>
        <NavBar />
        <Switch>
          <Route path="/students/data" exact component={Table} />
          <Route path="/students/add" exact component={Add} />
          <Route path="/students/edit/:id" exact component={Edit} />
          <Route path="/mui-table" exact component={BasicTable} />
          <Route path="/profile" exact component={Profile} />
          {/* <Route path="/conatact-page" exact component={ContactPage} /> */}
        </Switch>
      </Auth0ProviderWithHistory>
    </BrowserRouter >
  );
}

export default App;
