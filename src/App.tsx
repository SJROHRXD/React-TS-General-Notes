import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Components } from "./pages/Components";
import { CustomHooks } from "./pages/CustomHooks";
import { Hooks } from "./pages/Hooks";
import { Props } from "./pages/Props";
import { State } from "./pages/State";
import { Navbar } from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/props" element={<Props />} />
          <Route path="/state" element={<State />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/customhooks" element={<CustomHooks />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
