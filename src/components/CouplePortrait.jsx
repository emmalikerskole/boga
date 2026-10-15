import "./CouplePortrait.css";

export default function CouplePortrait({ photo, nameTop, nameBottom }) {
  return (
    <figure className="couple">
      <span className="couple-name couple-name--top">{nameTop}</span>
      <img
        className="couple-photo"
        src={photo}
        alt={`${nameTop} og ${nameBottom}`}
      />
      <span className="couple-name couple-name--bottom">{nameBottom}</span>
    </figure>
  );
}
