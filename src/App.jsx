import { BrowserRouter, Routes, Route } from "react-router-dom";
import PasswordGate from "./PasswordGate";
import Layout from "./components/Layout";
import Home from "./Home";
import Eksempel1 from "./Eksempel1";

export default function App() {
  return (
    <PasswordGate>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/1" element={<Eksempel1 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PasswordGate>
  );
}
