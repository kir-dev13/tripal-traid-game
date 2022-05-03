import CharactersList from "../../components/CharactersList/CharactersList";
import s from "./Characters.module.scss";

const Characters = () => {
    return (
        <div className={s.root}>
            <CharactersList />
        </div>
    );
};

export default Characters;
