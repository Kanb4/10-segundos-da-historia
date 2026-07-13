import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { decades } from "./data/decades";
import DecadeSlide from "./components/DecadeSlide";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".slide");

    const tween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + scrollRef.current.offsetWidth,
      },
    });

    // Animate each slide's content on enter
    sections.forEach((section, i) => {
      const content = section.querySelector(".slide-content");
      const shapes = section.querySelectorAll(".shape");

      gsap.fromTo(
        content,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            containerAnimation: tween,
            start: "left 80%",
            end: "left 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      shapes.forEach((shape, j) => {
        gsap.fromTo(
          shape,
          { opacity: 0, scale: 0, rotation: -90 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            delay: j * 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: section,
              containerAnimation: tween,
              start: "left 70%",
              end: "left 30%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="app">
      {/* Hero / Intro */}
      <div className="hero">
        <div className="hero-content">
          <div className="hero-year">
            <span className="hero-number">10</span>
            <span className="hero-unit">seg</span>
          </div>
          <h1 className="hero-title">
            Segundos da<br />História
          </h1>
          <p className="hero-subtitle">O Brasil em motion design</p>
          <div className="scroll-hint">
            <span>role para explorar</span>
            <div className="scroll-arrow">→</div>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="hero-shape shape-1"></div>
          <div className="hero-shape shape-2"></div>
          <div className="hero-shape shape-3"></div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="scroll-container" ref={containerRef}>
        <div className="slides-wrapper" ref={scrollRef}>
          {decades.map((decade, i) => (
            <DecadeSlide key={i} decade={decade} index={i} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>
          Design & Motion por <strong>Seu Nome</strong> — 2026
        </p>
      </footer>
    </div>
  );
}

export default App;
