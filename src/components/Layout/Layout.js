import { Outlet, useMatch } from "react-router-dom";
import Container from "../Container";

import Footer from "../Footer";
import Header from "../Header";
import s from "./Layout.module.scss";

const Layout = () => {
    const match = useMatch({ path: "/" });
    const login = useMatch({ path: "/login" });

    return (
        <>
            {!login ? <Header /> : null}
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
