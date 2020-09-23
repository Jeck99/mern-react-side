import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse'
})``
const List = styled.div.attrs({
    className: 'navbar-nav mr-auto'
})``
const Item = styled.div.attrs({
    className: 'collpase navbar-collapse'
})``
class Links extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">Back Home</Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/students/data" className="nav-link">Table</Link>
                        </Item>
                        <Item>
                            <Link to="/students/add" className="nav-link">Add</Link>
                        </Item>
                        <Item>
                            <Link to="/students/edit" className="nav-link">Edit</Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}
export default Links