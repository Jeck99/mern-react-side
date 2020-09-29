
import React from 'react'
import styled from 'styled-components'

import Logo from "./Logo";
import Links from "./Links";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
margin-bottom: 20 px;
`
const Container = styled.div.attrs({
    className:'container'
})`
max-width: 100%;
padding-right: 0;
padding-left: 0;
margin-right: 0; 
margin-left: 0;`

const AuthNav = () => {
    const { isAuthenticated } = useAuth0();
    return (
      <Nav className="justify-content-end">
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </Nav>
    );
  };
class NavBar extends React.Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Logo />
                    <Links />
                    <AuthNav />
                </Nav>
            </Container>
        )
    }
}

export default NavBar