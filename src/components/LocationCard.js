import React from "react";
import styled from "styled-components";



const Styledh2 = styled.h2`
  color: red;
`

const Styledh3 = styled.h3 `
  color: grey;
`
const Container = styled.div `
  border: 2px solid black;
`







const LocationCard = props => {
  return (
    <>
      <Container className='locations-container'>
        <Styledh2> {props.name} </Styledh2>
        <Styledh3> {props.type} </Styledh3>
        <Styledh3> {props.dimension} </Styledh3>
        {/* <div> {props.residents.count} </div>     */}
      </Container>
    </>

  )
};


export default LocationCard;