import Container from "../Container";
import Heading from "../Heading/Heading";

import s from "./slider.module.css";
import logoPng from "../../assets/logo.png";

const Slider = () => {
    return (
        <section className={s.section}>
            <div className={s.slider}>
                <Container className={s.sliderContent}>
                    <Heading level={1}>Это заголовок</Heading>
                    <Heading level={2} className={s.subheader} black>
                        Wow.Wow.Wow
                    </Heading>
                    <div className={s.image}>
                        <img src={logoPng} alt="logo" />
                    </div>
                    <div className={s.call}>
                        <button className={s.button}>Wow</button>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Slider;
