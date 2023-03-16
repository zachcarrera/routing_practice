import "./App.css";
import { Routes, Navigate, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Number } from "./components/Number";
import { ColorWord } from "./components/ColorWord";
import { NotFound } from "./components/NotFound";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/:number/" element={<Number />} />
                <Route
                    path="/:word/:textColor/:bgColor"
                    element={<ColorWord />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
