import Container from "../../components/Container";
import CharactersList from "../../components/CharactersList/CharactersList";
import s from "./Characters.module.scss";

const Characters = () => {
    return (
            <div className={s.root}>
                <Container>
                    <CharactersList/>
                </Container>
            </div>
        )
};

export default Characters