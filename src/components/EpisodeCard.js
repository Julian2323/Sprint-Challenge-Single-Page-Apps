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







const EpisodeCard = props => {
  return (
      <>
        <Container>
          <Styledh2>Name: {props.name} </Styledh2>
          <Styledh3>Air Date: {props.air_date} </Styledh3>
          <Styledh3>Episode: {props.episode} </Styledh3>
        </Container>
      </>
    )
};


export default EpisodeCard;