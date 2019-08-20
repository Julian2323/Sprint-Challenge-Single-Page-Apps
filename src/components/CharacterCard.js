import React from "react";
import styled from "styled-components";



const Styledh1 = styled.h1`
  color: red;
`

const Styledh2 = styled.h2 `
  color: grey;
`
const Container = styled.div `
  border: 2px solid black;
`


const CharacterCard = props => {
  return (
      <>
        <Container className='character-container'>
          <img src={props.image} alt={props.name} />
          <Styledh1>Name: {props.name} </Styledh1>
          <Styledh2>Species: {props.species} </Styledh2>
          <Styledh2>Gender: {props.gender} </Styledh2>
        </Container>
      </>
    )
};


export default CharacterCard;