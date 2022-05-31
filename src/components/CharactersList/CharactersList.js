import { useState, useContext, useEffect } from "react";
import charactersContext from "../../contexts/charactersContext";

import CharacterCard from "../../components/CharacterCard";

import { CHARACTERS } from "../../constantData/CHARACTERS";

import s from "./CharactersList.module.scss";

const CharactersList = () => {
    const [characters, setCharacters] = useState(CHARACTERS);
    const { likedHeroes, setLikedHeroes } = useContext(charactersContext);

    //при изменении массива likedHeroes он записывается в localStorage, затем изменяется characters: если character.id есть в массиве likedHeroes, то ставится лайк, если нет убирается.
    useEffect(() => {
        localStorage.likedHeroes = JSON.stringify(likedHeroes);

        setCharacters((prevState) => {
            return prevState.map((character) => {
                return likedHeroes.includes(character.id)
                    ? { ...character, isLike: true }
                    : { ...character, isLike: false };
            });
        });
    }, [likedHeroes]);

    //по клику на сердечко в массив likedHeroes добавляется id, если его нет, и удаляется, если есть
    const handleLikeClick = (id) => {
        if (!likedHeroes.includes(id)) {
            setLikedHeroes([...likedHeroes, id]);
        } else {
            const newArr = [...likedHeroes];
            newArr.splice(newArr.indexOf(id), 1);
            setLikedHeroes(newArr);
        }
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
