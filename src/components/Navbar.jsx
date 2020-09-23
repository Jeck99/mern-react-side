
import React from 'react'
import styled from 'styled-components'

import Logo from "./Logo";
import Links from "./Links";

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
class NavBar extends React.Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default NavBar