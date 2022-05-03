import CharactersList from "../../components/CharactersList/CharactersList";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Slider from "../../components/Slider";
import s from "./Main.module.scss";

const Main = () => {
    return (
        <>
            <Slider />
            <section className={s.cardSection}>
                <Container>
                    <div className={s.cardTitle}>
                        <Heading backLine>Marvel Cards</Heading>
                        <Heading level={2}>Collect your best five</Heading>
                    </div>
                    <CharactersList />
                </Container>
            </section>
        </>
    );
};

export default Main;
