import { useState } from "react";

import { CHARACTERS } from "../../constantData/CHARACTERS";

import Container from "../../components/Container";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Slider from "../../components/Slider";
import CharacterCard from "../../components/CharacterCard";
import Footer from "../../components/Footer";

import s from "./Main.module.scss";
import Layout from "../../components/Layout/Layout";

const Main = () => {
    const [characters, setCharacters] = useState(CHARACTERS);
    const [bioId, setBioId] = useState(null);

    const handleLikeClick = (id) => {
        console.log(id);

        setCharacters((prevState) => {
            return prevState.map((character) =>
                character.id === id
                    ? { ...character, isLike: !character.isLike }
                    : character
            );
        });
    };

    const onReadBio = (id) => {
        setBioId(id);
    };

    return (
        <>
            <Slider />
            <section className={s.cardSection}>
                <Container>
                    <div className={s.cardTitle}>
                        <Heading backLine>Marvel Cards</Heading>
                        <Heading level={2}>Collect your best five</Heading>
                    </div>
                    <div className={s.cardWrap}>
                        {characters.map((character) => {
                            return (
                                <div key={character.id}>
                                    <CharacterCard
                                        id={character.id}
                                        name={character.name}
                                        src={character.thumbnail.path}
                                        description={character.description}
                                        humanName={character.humanName}
                                        isLike={character.isLike}
                                        onLike={handleLikeClick}
                                        onReadBio={onReadBio}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Main;
