import Container from "./components/Container";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import Text from "./components/Text/Text";

import "./App.css";

function App() {
    return (
        <>
            <Header />
            <Slider />
            <Container>
                <Text el="p" className={"someclass"} strong italic disabled>
                    Это жирный курсивный и недоступный текст домашнего задания 2
                </Text>
                <Text>Это простой текст домашнего задания 2</Text>
                <Text el="div">
                    <Text>Текст в блоке</Text>
                </Text>
            </Container>

            <Footer />
        </>
    );
}

export default App;
