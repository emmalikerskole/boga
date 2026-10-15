import { HashRouter, Routes, Route } from "react-router-dom";
import PasswordGate from "./Passord";
import Home from "./Home";

export default function App() {
  return (
    <PasswordGate>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </PasswordGate>
  );
}