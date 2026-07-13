import Polaroid from "./Polaroid";
import { polaroidPhotos } from "../data/polaroidPhotos";
import "./DecadeSlide.css";

export default function DecadeSlide({ decade, index }) {
  const photos = polaroidPhotos[decade.animation] || [];

  return (
    <section
      className="slide"
      style={{
        backgroundColor: decade.colors.bg,
        color: decade.colors.text,
      }}
    >
      {/* Background gradient accent */}
      <div
        className="slide-bg-accent"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${decade.colors.accent}12 0%, transparent 70%)`,
        }}
      ></div>

      {/* Depth layers */}
      <div className="slide-depth-1"></div>
      <div className="slide-depth-2"></div>

      {/* Polaroids */}
      <div className="polaroids-container">
        {photos.map((photo, i) => (
          <Polaroid key={i} {...photo} />
        ))}
      </div>

      {/* Content */}
      <div className="slide-content">
        <div className="slide-year-wrapper">
          <span
            className="slide-year"
            style={{ color: decade.colors.accent }}
          >
            {decade.year}
          </span>
        </div>
        <h2 className="slide-title">
          {decade.title.split("\n").map((line, j) => (
            <span key={j}>
              {line}
              {j < decade.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h2>
        <p
          className="slide-subtitle"
          style={{ color: decade.colors.accent }}
        >
          {decade.subtitle}
        </p>
        <p className="slide-description">{decade.description}</p>

        {/* Progress indicator */}
        <div className="slide-progress">
          <span className="slide-counter">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(8).padStart(2, "0")}
          </span>
          <div
            className="slide-progress-bar"
            style={{
              backgroundColor: decade.colors.accent,
              width: `${((index + 1) / 8) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
