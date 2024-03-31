import { useEffect } from 'react';
import './CharacterCard.css';

const CharacterCard = ({id, name, status, species, type, gender, image, onDeleteCharacter}) => {

  
  const deleteCHaracter = (id) => {
    onDeleteCharacter(id);
   };

  return (
    <div className="main__character">
      <figure className="main__character__figure">
        <img src={image} alt={image} className="main__character__img" />
        <figcaption className="main__character__name">
          {name} <span className="main__character__id">#{id}</span>
        </figcaption>
      </figure>
      <div className="main__character__description">
        <p className="main__character__status">
            <span className="bold">Status: {status} </span>
            <span className={status === "Alive" ? "status green" : "status red"}></span></p>
            <p className="main__character__specie"><span className="bold">Especie:</span> {species} </p>
            <p className="main__character__type"><span className="bold">Tipo:</span> {type} </p>
            <p className="main__character__gender"><span className="bold">Gender:</span> {gender} </p>
      </div>
      <button data-id={id} className="main__character__delete" onClick={() => { deleteCHaracter(id) }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="25px" height="25px">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
        </svg>
      </button>
    </div>
    );
};


export default CharacterCard;
