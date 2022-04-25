import cn from "classnames";

import { useEffect, useState } from "react";

import Container from "../Container";
import s from "./Header.module.scss";
import logoPng from "../../assets/logo.png";

const MENU = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

const Header = () => {
    const [smallHeader, setSmallHeader] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function handleScroll() {
        if (window.scrollY > 60) {
            setSmallHeader(true);
        }
        if (window.scrollY < 60) {
            setSmallHeader(false);
        }
    }

    return (
        <header className={s.root}>
            <div
                className={cn(s.header, {
                    [s.small]: smallHeader,
                })}
            >
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
