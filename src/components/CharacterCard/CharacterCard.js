import PropTypes from "prop-types";
import cn from "classnames";

import Heading from "../Heading/Heading";
import Text from "../Text/Text";

import { ReactComponent as Like } from "./assets/heart.svg";
import s from "./CharacterCard.module.scss";

const CharacterCard = ({
    id,
    name,
    src,
    humanName,
    description,
    isLike,
    onLike,
}) => {
    const handleClick = () => {
        onLike(id);
    };

    return (
        <div className={s.root}>
            <img src={src} alt={name} className={s.cardImage} />
            <div className={s.cardDetails}>
                <Heading level={2} className={s.cardName}>
                    {name}
                </Heading>
                <Heading level={3} className={s.cardHumanName}>
                    {humanName}
                </Heading>
                <Text el="p" className={s.cardDescription}>
                    {description}
                </Text>

                <div className={s.cardMeta}>
                    <div
                        onClick={handleClick}
                        className={cn(s.like, {
                            [s.active]: isLike,
                        })}
                    >
                        {<Like />}
                    </div>
                    <div className={s.readBio}>
                        <a href="#">Read bio</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

CharacterCard.defaultProps = {
    isLike: false,
};

CharacterCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    src: PropTypes.string,
    humanName: PropTypes.string,
    description: PropTypes.string,
    isLike: PropTypes.bool,
    onLikeClick: PropTypes.func,
};

export default CharacterCard;
