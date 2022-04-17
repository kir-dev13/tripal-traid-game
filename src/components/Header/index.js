import Container from "../Container";
import s from "./header.module.scss";
import logoPng from "../../assets/logo.png";

const MENU = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

const Header = () => {
    return (
        <header className={s.root}>
            <div className={s.header}>
                <Container className={s.headerWrap}>
                    <div className={s.logo}>
                        <img src={logoPng} alt="" />
                    </div>
                    <ul className={s.nav}>
                        {MENU.map((item, i) => (
                            <li key={i}>
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </Container>
            </div>
        </header>
    );
};

export default Header;
