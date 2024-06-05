import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/header/Header";


export const App = () => {
    return (
        <div className="App">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};