import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(res => {
            setCharacters(res.data.results);
            console.log(res.data.results);
        })
        .catch(err => {
            console.log(err);
        });
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      <div>
        {characters.map(character => {
          return <CharacterCard name={character.name} species={character.species} image={character.image} gender={character.gender} />
        })}
      </div>
    </section>
  );
}
