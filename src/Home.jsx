import "./Home.css";
import Navbar from "./components/Navbar";
import CornerText from "./components/CornerText";
import CouplePortrait from "./components/CouplePortrait";
import boga2 from "./assets/boga2.png";

export default function Home() {
  return (
    <div className="home">
      {/* <Navbar /> */}
      <main className="home-main">
        <CornerText position="top-left" lines={["Vi skal gifte oss!", ""]} />
        <CornerText position="top-right" lines={["Oslo", ""]} />

        <CouplePortrait
          photo={boga2}
          nameTop="Betina"
          nameBottom="Ali"
        />

        <CornerText position="bottom-left" lines={["22. og 23. oktober,", "2027"]} />
        <CornerText position="bottom-right" lines={["Formell invitasjon", "kommer"]} />
      </main>
    </div>
  );
}

