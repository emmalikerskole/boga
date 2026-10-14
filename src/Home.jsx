import "./Home.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <main className="home-main">
        <h1 className="home-title">Velkommen</h1>
      </main>
    </div>
  );
}