import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import charactersContext from "./contexts/charactersContext";

import Layout from "./components/Layout";
import AboutGame from "./pages/AboutGame";
import Biography from "./pages/Biography";
import Characters from "./pages/Characters";
import Contacts from "./pages/Contacts";
import Main from "./pages/Main";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import "./App.scss";

function App() {
    //достаем из localStorage массив с id лайкнутых героев и записываем в state
    const [likedHeroes, setLikedHeroes] = useState(
        localStorage.likedHeroes
            ? JSON.parse(localStorage.likedHeroes)
            : null || []
    );

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            window.addEventListener(
                "load",
                () => {
                    document
                        .getElementById(location.hash.slice(1))
                        .scrollIntoView({
                            block: "center",
                            behavior: "smooth",
                        });
                },
                {
                    once: true,
                }
            );
        } else {
            window.scrollTo(0, 0);
        }
    }, [location.pathname, location.hash]);

    return (
        <charactersContext.Provider
            value={{
                likedHeroes,
                setLikedHeroes,
            }}
        >
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="characters/:id" element={<Biography />} />
                    <Route path="characters" element={<Characters />} />
                    <Route path="about" element={<AboutGame />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </charactersContext.Provider>
    );
}

export default App;
