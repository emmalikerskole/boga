import { BrowserRouter, Routes, Route } from "react-router-dom";
import PasswordGate from "./Passord";
import Home from "./Home";

export default function App() {
  return (
    <PasswordGate>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </PasswordGate>
  );
}
