import cn from "classnames";

import { Link, useNavigate } from "react-router-dom";
import { useLayoutEffect, useState } from "react";

import Container from "../Container";
import logoPng from "../../assets/logo.png";
import s from "./Header.module.scss";

const Header = () => {
    const [smallHeader, setSmallHeader] = useState(false);
    const navigate = useNavigate();

    useLayoutEffect(() => {
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

    const handleLogoClick = () => {
        navigate("/");
    };

    return (
        <header className={s.root}>
            <div
                className={cn(s.header, {
                    [s.small]: smallHeader,
                })}
            >
                <Container className={s.headerWrap}>
                    <div onClick={handleLogoClick} className={s.logo}>
                        <img src={logoPng} alt="" />
                    </div>
                    <ul className={s.nav}>
                        <li>
                            <Link to="/">Main</Link>
                            <Link to="/Bio">Bio</Link>
                            <Link to="#">Character</Link>
                            <Link to="#">About Game</Link>
                            <Link to="#">Contacts</Link>
                        </li>
                    </ul>
                </Container>
            </div>
        </header>
    );
};

export default Header;
