import "./DecadeSlide.css";

const animations = {
  modernismo: (
    <>
      <div className="shape shape-circle"></div>
      <div className="shape shape-square"></div>
      <div className="shape shape-triangle"></div>
      <div className="shape shape-line-1"></div>
      <div className="shape shape-line-2"></div>
    </>
  ),
  copa: (
    <>
      <div className="shape shape-ball"></div>
      <div className="shape shape-crowd-1"></div>
      <div className="shape shape-crowd-2"></div>
      <div className="shape shape-crowd-3"></div>
      <div className="shape shape-wave"></div>
    </>
  ),
  bossa: (
    <>
      <div className="shape shape-wave-1"></div>
      <div className="shape shape-wave-2"></div>
      <div className="shape shape-wave-3"></div>
      <div className="shape shape-note-1"></div>
      <div className="shape shape-note-2"></div>
    </>
  ),
  aianove: (
    <>
      <div className="shape shape-bar-1"></div>
      <div className="shape shape-bar-2"></div>
      <div className="shape shape-bar-3"></div>
      <div className="shape shape-bar-4"></div>
      <div className="shape shape-crack"></div>
    </>
  ),
  diretas: (
    <>
      <div className="shape shape-placard-1"></div>
      <div className="shape shape-placard-2"></div>
      <div className="shape shape-placard-3"></div>
      <div className="shape shape-fist"></div>
      <div className="shape shape-star"></div>
    </>
  ),
  lula: (
    <>
      <div className="shape shape-flag-1"></div>
      <div className="shape shape-flag-2"></div>
      <div className="shape shape-people-1"></div>
      <div className="shape shape-people-2"></div>
      <div className="shape shape-people-3"></div>
    </>
  ),
  olimpiadas: (
    <>
      <div className="shape shape-ring-1"></div>
      <div className="shape shape-ring-2"></div>
      <div className="shape shape-ring-3"></div>
      <div className="shape shape-ring-4"></div>
      <div className="shape shape-ring-5"></div>
    </>
  ),
  futuro: (
    <>
      <div className="shape shape-glow-1"></div>
      <div className="shape shape-glow-2"></div>
      <div className="shape shape-glow-3"></div>
      <div className="shape shape-particle p1"></div>
      <div className="shape shape-particle p2"></div>
      <div className="shape shape-particle p3"></div>
      <div className="shape shape-particle p4"></div>
      <div className="shape shape-particle p5"></div>
    </>
  ),
};

export default function DecadeSlide({ decade, index }) {
  return (
    <section
      className="slide"
      style={{
        backgroundColor: decade.colors.bg,
        color: decade.colors.text,
      }}
    >
      {/* Background decoration */}
      <div
        className="slide-bg-accent"
        style={{ backgroundColor: decade.colors.accent + "15" }}
      ></div>

      {/* Shapes */}
      <div className="shapes-container">
        {animations[decade.animation]}
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
