import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";



const Container = styled.div `
    border: 2px solid black;
    display: flex;
    justify-content: space-evenly;
`

const StyledLink = styled.link `
    color: black;
`





// TODO: Add missing tabs below
export default function TabNav() {
    return (
        <>

            <Container className="nav-links">
                <NavLink className="some-nav" to="/character">
                Characters
                </NavLink>
                <NavLink className="some-nav" to="/episode">
                Episodes
                </NavLink>
                <NavLink className="some-nav" to="/location">
                Locations
                </NavLink>
            </Container>

        </>
    )
};
