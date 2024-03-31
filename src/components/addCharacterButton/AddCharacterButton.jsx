import "./AddCharacterButton.css";
import getCharacter from "../../helpers/getCharacter";

const AddCharacterButton = ({ onAddChacarter }) => {
  const addCharacter = async () => {
    const character = await getCharacter();
    onAddChacarter(character);
  };

  return (
    <button className="main__button" id="main__button" onClick={addCharacter}>
      Agregar personaje
    </button>
  );
};

export default AddCharacterButton;
