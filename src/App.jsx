import { useState } from "react";
import { Title, AddCharacterButton, CharactersGrid } from "./components/";

const App = () => {
  //estado de caracteres
  const [characters, setCharacters] = useState([]);

  const addCharacter = (character) => {
    setCharacters([character, ...characters]);
  };

  const deleteCharacter = (id) => {
    const newCharacters = characters.filter((char) => char.id !== id);

    setCharacters(newCharacters);
  };

  return (
    <div>
      <Title />
      <AddCharacterButton onAddChacarter={addCharacter} />
      <CharactersGrid characters={characters} onDeleteCharacter={deleteCharacter}/>
    </div>
  );
};

export default App;
