import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detect dark mode
    const checkDarkMode = () => {
      const dark = document.documentElement.classList.contains("dark");
      setIsDarkMode(dark);
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    generateStars();
    startShootingStars(); // start periodic shooting stars

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  // Generate a random shooting star occasionally
  const startShootingStars = () => {
    const createShootingStar = () => {
      const id = Date.now();
      const newStar = {
        id,
        x: Math.random() * 100,
        y: Math.random() * 50,
        duration: Math.random() * 1.5 + 0.8, // fast streak
      };
      setShootingStars((prev) => [...prev, newStar]);

      // remove it after animation ends
      setTimeout(() => {
        setShootingStars((prev) => prev.filter((s) => s.id !== id));
      }, newStar.duration * 1000);
    };

    // create shooting stars at random intervals
    setInterval(() => {
      if (isDarkMode) createShootingStar();
    }, 2500 + Math.random() * 3000);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Twinkling stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {/* Shooting stars (dark mode only) */}
      {isDarkMode &&
        shootingStars.map((s) => (
          <div
            key={s.id}
            className="shooting-star"
            style={{
              left: s.x + "%",
              top: s.y + "%",
              animation: `shoot ${s.duration}s linear forwards`,
            }}
          />
        ))}
    </div>
  );
};
