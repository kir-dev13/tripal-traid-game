import { useState } from "react";
import CharacterCard from "../../components/CharacterCard";

import { CHARACTERS } from "../../constantData/CHARACTERS";

import s from "./CharactersList.module.scss";

const CharactersList = () => {
    const [characters, setCharacters] = useState(CHARACTERS);

    const handleLikeClick = (id) => {
        setCharacters((prevState) => {
            return prevState.map((character) =>
                character.id === id
                    ? { ...character, isLike: !character.isLike }
                    : character
            );
        });
    };

    return (
        <div className={s.root}>
            {characters.map((character) => {
                return (
                    <CharacterCard
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        src={character.thumbnail.path}
                        description={character.description}
                        humanName={character.humanName}
                        isLike={character.isLike}
                        onLike={handleLikeClick}
                    />
                );
            })}
        </div>
    );
};

export default CharactersList;
