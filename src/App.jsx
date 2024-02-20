import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TimerPage from "./components/pages/TimerPages";
import ColorPalettePage from "./components/pages/ColorPalettePage";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <h1>Тестовое задание</h1>
      <div className="block">
        <div>
        <Link to="/timer" className="Link">Таймер</Link>
        <Link to="/color-palette" className="Link">Цветовая палитра</Link>
        </div>
      
        <Routes>
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/color-palette" element={<ColorPalettePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

