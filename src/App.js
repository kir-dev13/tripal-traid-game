import { Route, Routes } from "react-router-dom";

import { useState } from "react";

import Layout from "./components/Layout";
import Main from "./pages/Main/Main";
import Biography from "./pages/Biography";
import Characters from "./pages/Characters";
import AboutGame from "./pages/AboutGame";
import Contacts from "./pages/Contacts";

import "./App.scss";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="bio/:id" element={<Biography />} />
                <Route path="characters" element={<Characters />} />
                <Route path="about" element={<AboutGame />} />
                <Route path="contacts" element={<Contacts />} />
            </Route>
        </Routes>
    );
}

export default App;
