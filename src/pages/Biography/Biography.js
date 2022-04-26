import { BIO } from "../../constantData/BIO";

import Container from "../../components/Container";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer";

import s from "./Biography.module.scss";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";

const Biography = () => {
    const { id } = useParams();

    const character = BIO[id];

    return (
        <div className={s.root}>
            <Container>
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
                            <div key={index} className={s.imgWrap}>
                                <img src={bio.src} alt="biography" />
                            </div>
                        );
                    }
                })}
            </Container>
        </div>
    );
};

export default Biography;
