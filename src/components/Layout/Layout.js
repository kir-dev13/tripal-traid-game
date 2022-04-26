import { Outlet } from "react-router-dom";

import Footer from "../Footer";
import Header from "../Header";
import s from "./Layout.module.scss";

const Layout = () => {
    return (
        <div className={s.root}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
