import "./Home.css";
import CornerText from "./components/CornerText";
import CouplePortrait from "./components/CouplePortrait";
import boga2 from "./assets/boga2.png";

export default function Home() {
  return (
    <div className="home">
      {/* Page 1 */}
      <section className="snap-page home-main">
        <CornerText position="top-left" lines={["Vi skal gifte oss!", ""]} />
        <CornerText position="top-right" lines={["Oslo", "TEST"]} />

        <CouplePortrait photo={boga2} nameTop="Betina" nameBottom="Ali" />

        <CornerText position="bottom-left" lines={["22. og 23. oktober,", "2027"]} />
        <CornerText position="bottom-right" lines={["Formell invitasjon", "kommer"]} />
      </section>

      {/* Page 2 */}
      <section className="snap-page page-two">
        <h2>Program</h2>
        <p>Sted & dato kommer.</p>
      </section>

      {/* Page 3 */}
      <section className="snap-page page-three">
        <h2>Praktisk info</h2>
        <p>Mer informasjon kommer.</p>
      </section>
    </div>
  );
}