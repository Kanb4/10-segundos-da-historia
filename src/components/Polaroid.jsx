import { useRef, useState } from "react";
import "./Polaroid.css";

export default function Polaroid({ src, alt, caption, rotate, delay, x, y }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const tiltX = ((e.clientY - centerY) / (rect.height / 2)) * 10;
    const tiltY = ((e.clientX - centerX) / (rect.width / 2)) * -10;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      className="polaroid-wrapper"
      style={{
        left: x,
        top: y,
        animationDelay: `${delay}s`,
      }}
    >
      <div
        ref={ref}
        className={`polaroid ${loaded ? "loaded" : ""}`}
        style={{
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) rotate(${rotate}deg)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="polaroid-image">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
          <div className="polaroid-grain"></div>
        </div>
        <div className="polaroid-border">
          <span className="polaroid-caption">{caption}</span>
        </div>
      </div>
    </div>
  );
}
