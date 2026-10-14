import { useEffect, useRef, useState } from "react";
import "./Eksempel1.css";

// Edit the three slides here
const slides = [
  { title: "Side 1", text: "Dette er den første side.", color: "#ffe4ef" },
  { title: "Side 2", text: "Dette er den anden side.", color: "#e4f1ff" },
  { title: "Side 3", text: "Dette er den tredje side.", color: "#e9ffe4" },
];

export default function Eksempel1() {
  const containerRef = useRef(null);
  const slideRefs = useRef([]);
  const [active, setActive] = useState(0);

  // Track which slide is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      { root: containerRef.current, threshold: 0.6 }
    );
    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function goTo(index) {
    slideRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="slideshow">
      <div className="slides" ref={containerRef}>
        {slides.map((slide, i) => (
          <section
            key={i}
            data-index={i}
            ref={(el) => (slideRefs.current[i] = el)}
            className="slide"
            style={{ background: slide.color }}
          >
            <h2 className="slide-title">{slide.title}</h2>
            <p className="slide-text">{slide.text}</p>

            {i < slides.length - 1 && (
              <button
                className="slide-next"
                onClick={() => goTo(i + 1)}
                aria-label="Næste side"
              >
                ↓
              </button>
            )}
          </section>
        ))}
      </div>

      <div className="slide-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`slide-dot ${active === i ? "is-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Gå til side ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}