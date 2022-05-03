import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout";
import AboutGame from "./pages/AboutGame";
import Biography from "./pages/Biography";
import Characters from "./pages/Characters";
import Contacts from "./pages/Contacts";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="characters/:id" element={<Biography />} />
                <Route path="characters" element={<Characters />} />
                <Route path="about" element={<AboutGame />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
