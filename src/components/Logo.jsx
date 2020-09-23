import React from 'react'
import styled from 'styled-components'

import logo from '../../src/clear_logo.png'

const Wrapper = styled.a.attrs({
    className:'navbar-brand'
})``

class Logo extends React.Component{
    render(){
        return(
            <Wrapper href="google.com">
                <img width="50" height="50" src={logo} alt="logo-indi"/>
            </Wrapper>
        )
    }

}

export default Logo;