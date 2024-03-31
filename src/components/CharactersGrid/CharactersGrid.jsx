import "./CharactersGrid.css";
import {CharacterCard} from "../";

const CharactersGrid = ({ characters, onDeleteCharacter }) => {
  return (
    <div className="main__characters">
      {
      characters.map(character => {
        return <CharacterCard  key={character.id} onDeleteCharacter={onDeleteCharacter}  {...character} />
      })
      }
    </div>
  );
};

export default CharactersGrid;