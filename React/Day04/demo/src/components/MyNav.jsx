import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { CounterContext } from '../context/counterContext'

export function MyNav() {
    let { count } = useContext( CounterContext )
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="nav-link" to='/'>Home</NavLink>
                        <NavLink className="nav-link" to='/products'>Products</NavLink>
                        <NavLink className="nav-link" to='/users'>Users</NavLink>
                        <NavLink className="nav-link" to='/counter'>Counter ({count} )</NavLink>
                        <NavLink className="nav-link" to='/products/0/edit'>Add Product</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
