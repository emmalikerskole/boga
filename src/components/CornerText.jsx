import "./CornerText.css";

// position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
export default function CornerText({ position, lines }) {
  return (
    <p className={`corner-text corner-text--${position}`}>
      {lines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </p>
  );
}
