import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "./pages/Main/Main";
import Biography from "./pages/Biography";

import "./App.scss";

function App() {
    return (
        <Routes>
            {/* <Route path="/" element={<Main />} />
            <Route path="/bio" element={<Biography id={1011334} />} /> */}
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="bio/:id" element={<Biography id={1011334} />} />
            </Route>
        </Routes>
    );
}

export default App;
