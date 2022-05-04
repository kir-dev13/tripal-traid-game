import { Outlet, useMatch } from "react-router-dom";
import Container from "../Container";

import Footer from "../Footer";
import Header from "../Header";
import s from "./Layout.module.scss";

const Layout = () => {
    const match = useMatch({ path: "/" });
    return (
        <>
            <Header />
            {match !== null ? (
                <Outlet />
            ) : (
                <div className={s.container}>
                    <Container>
                        <Outlet />
                    </Container>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Layout;
