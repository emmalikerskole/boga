import "./Home.css";
import Navbar from "./components/Navbar";
import CornerText from "./components/CornerText";
import CouplePortrait from "./components/CouplePortrait";
import bogs from "./assets/bogs.jpg";

export default function Home() {
  return (
    <div className="home">
      {/* <Navbar /> */}
      <main className="home-main">
        <CornerText position="top-left" lines={["Vi skal gifte oss i", "Oktober!"]} />
        <CornerText position="top-right" lines={["Gamlebyen,", "Oslo"]} />

        <CouplePortrait
          photo={bogs}
          nameTop="Betina"
          nameBottom="Ali"
        />

        <CornerText position="bottom-left" lines={["1. og 2. oktober,", "2027"]} />
        <CornerText position="bottom-right" lines={["Formell invitasjon", "kommer"]} />
      </main>
    </div>
  );
}

