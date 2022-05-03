import cn from "classnames";
import { useLayoutEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logoPng from "../../assets/logo.png";
import Container from "../Container";
import s from "./Header.module.scss";

const MENU = [
    {
        title: "Main",
        href: "/",
    },
    {
        title: "Characters",
        href: "/characters",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contacts",
        href: "/contacts",
    },
];

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
                        {MENU.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink
                                        to={item.href}
                                        className={({ isActive }) => {
                                            return isActive ? s.active : null;
                                        }}
                                    >
                                        {item.title}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </Container>
            </div>
        </header>
    );
};

export default Header;
