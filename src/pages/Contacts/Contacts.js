import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Text from "../../components/Text";

import photo from "../../assets/photo.jpg";
import s from "./Contacts.module.scss";

const Contacts = () => {
    return (
        <div className={s.root}>
            <Container>
                <Heading className={s.heading} level={2}>
                    Липовецкий Кирилл Михайлович
                </Heading>
                <div className={s.imgWrap}>
                    <img src={photo} alt="creator" />
                </div>
                <Text el="p">
                    1987 г.р. Звукоинженер, заслуженный сомелье-фрилансер города
                    Москвы.
                </Text>
            </Container>
        </div>
    );
};

export default Contacts;
