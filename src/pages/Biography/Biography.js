import { BIO } from "../../bio/bio";

import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Button from "../../components/Button/Button";

import s from "./Biography.module.scss";

const Biography = ({ id, onBack }) => {
    const character = BIO[id];

    const handleBackClick = () => {
        onBack();
    };

    return (
        <Container>
            <div className={s.root}>
                <Button onClick={handleBackClick} black>
                    Go Back!
                </Button>
                {character.map((bio, index) => {
                    if (bio.type.match(/h\d+/)) {
                        return (
                            <Heading
                                key={index}
                                className={s.text}
                                level={Number(bio.type.match(/\d+/)[0])}
                            >
                                {bio.text}
                            </Heading>
                        );
                    } else if (bio.type === "paragraph") {
                        return (
                            <Text key={index} className={s.text}>
                                {bio.text}
                            </Text>
                        );
                    } else if (bio.type === "img") {
                        return (
                            <img key={index} src={bio.src} alt="biography" />
                        );
                    }
                })}
            </div>
        </Container>
    );
};

export default Biography;
