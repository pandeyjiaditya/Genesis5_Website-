import React from "react";
import "./index.css";

const aboutImage = "/character1.png";
const navPokemon = "/nav.png";
const logo = "/logo.png";
const navUnderline =
  "https://www.figma.com/api/mcp/asset/ae47c3ad-dcb5-41f3-b627-8ed9b43ffbed";
const prize1Badge =
  "https://www.figma.com/api/mcp/asset/36de643e-8490-40ed-9fad-db161f36a237";
const prize1Circle =
  "https://www.figma.com/api/mcp/asset/0b6a251a-0227-44b0-8363-9a8f61ea54e4";
const prize2Circle =
  "https://www.figma.com/api/mcp/asset/f5e190df-d251-41a5-9a00-a06d7d04d240";
const prize3Circle =
  "https://www.figma.com/api/mcp/asset/57702666-5ebf-4b0c-8216-57d367d93a7e";

// Pokemon images
const pikachu =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png";
const bulbasaur =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png";
const charmander =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png";
const squirtle =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png";
const eevee =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png";
const jigglypuff =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png";
const meowth =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png";
const psyduck =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png";
const snorlax =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png";
const gengar =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const [underlineStyle, setUnderlineStyle] = React.useState({
    left: 0,
    width: 0,
  });
  const [floatingPokemonStyle, setFloatingPokemonStyle] = React.useState({
    left: "50%",
    top: "80px",
  });
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const navRefs = React.useRef({
    home: null,
    about: null,
    memories: null,
    faqs: null,
  });
  const floatingPokemonRef = React.useRef(null);
  const navButtonRef = React.useRef(null);

  // Countdown Timer Logic
  React.useEffect(() => {
    const targetDate = new Date("2026-02-14T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // Move floating Pokemon to nav button on hover
  const moveToNavButton = React.useCallback(() => {
    if (navButtonRef.current && floatingPokemonRef.current) {
      const buttonRect = navButtonRef.current.getBoundingClientRect();
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;

      setFloatingPokemonStyle({
        left: `${buttonCenterX}px`,
        top: `${buttonCenterY}px`,
      });
    }
  }, []);

  // Return to original position
  const returnToOriginal = React.useCallback(() => {
    setFloatingPokemonStyle({
      left: "50%",
      top: "80px",
    });
  }, []);

  React.useEffect(() => {
    setTimeout(() => {}, 120);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (!id) return;
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
    );

    ["about", "prizes", "memories", "faqs", "home"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const sections = ["home", "about", "prizes", "memories", "faqs"];
    let ticking = false;

    const calcActive = () => {
      const viewportMid = window.scrollY + window.innerHeight / 2;
      let current = "home";
      for (let id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (viewportMid >= top && viewportMid < bottom) {
          current = id;
          break;
        }
      }
      setActiveSection((prev) => (prev !== current ? current : prev));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(calcActive);
      }
    };

    calcActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  React.useEffect(() => {
    const update = () => {
      const ref = navRefs.current[activeSection];
      if (ref) {
        const left = ref.offsetLeft;
        const width = ref.offsetWidth;
        setUnderlineStyle({ left, width });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeSection]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleRegisterClick = () => {
    window.open(
      "https://unstop.com/o/iuvm4BM?lb=XXQIl8jQ&utm_medium=Share&utm_source=pankacha9021&utm_campaign=Online_coding_challenge",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen text-white">
      {/* Pokeball background decorations */}
      <div className="pokeball-bg-deco pokeball-1"></div>
      <div className="pokeball-bg-deco pokeball-2"></div>
      <div className="pokeball-bg-deco pokeball-3"></div>

      {/* Floating Pokemon - Fixed at top of Home section */}
      <img
        ref={floatingPokemonRef}
        id="floating-pokemon"
        src={navPokemon}
        alt="Floating Pokemon"
        className="floating-pokemon-home"
        style={{
          left: floatingPokemonStyle.left,
          top: floatingPokemonStyle.top,
        }}
      />

      <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-black z-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={logo}
              alt="Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
              style={{ filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))" }}
            />
            <div className="text-lg sm:text-xl lg:text-2xl font-normal">
              G<span className="text-red-600">DX</span>R
            </div>
            <button
              ref={navButtonRef}
              id="nav-button"
              onMouseEnter={moveToNavButton}
              onMouseLeave={returnToOriginal}
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <img
                src={eevee}
                alt="Eevee"
                className="w-full h-full object-contain"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))" }}
              />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen((s) => !s)}
            className="lg:hidden text-white p-2 hover:bg-gray-800 rounded"
            aria-label="menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div className="hidden lg:flex items-center relative">
            <div className="flex items-center gap-4 xl:gap-6 text-sm xl:text-base">
              <button
                ref={(el) => (navRefs.current.home = el)}
                onClick={() => scrollToSection("home")}
                className="relative hover:opacity-80 transition-opacity py-2"
              >
                Home
              </button>
              <button
                ref={(el) => (navRefs.current.about = el)}
                onClick={() => scrollToSection("about")}
                className="relative hover:opacity-80 transition-opacity py-2"
              >
                About
              </button>
              <button
                ref={(el) => (navRefs.current.memories = el)}
                onClick={() => scrollToSection("memories")}
                className="relative hover:opacity-80 transition-opacity py-2"
              >
                Memories
              </button>
              <button
                ref={(el) => (navRefs.current.faqs = el)}
                onClick={() => scrollToSection("faqs")}
                className="relative hover:opacity-80 transition-opacity py-2"
              >
                FAQS
              </button>
            </div>

            <div
              className="absolute bottom-0 h-[3px] transition-all duration-500 ease-out"
              style={{
                left: underlineStyle.left + "px",
                width: underlineStyle.width + "px",
              }}
            >
              <img
                src={navUnderline}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/95 border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-4 py-2 text-lg hover:bg-gray-900 rounded"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-2 text-lg hover:bg-gray-900 rounded"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("memories")}
                className="block w-full text-left px-4 py-2 text-lg hover:bg-gray-900 rounded"
              >
                Memories
              </button>
              <button
                onClick={() => scrollToSection("faqs")}
                className="block w-full text-left px-4 py-2 text-lg hover:bg-gray-900 rounded"
              >
                FAQS
              </button>
            </div>
          </div>
        )}

        <div className="h-[3px] sm:h-[4px] bg-[#87c4ea]" />
      </nav>

      <section
        id="home"
        className="relative min-h-screen pt-20 sm:pt-24 lg:pt-28 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto flex items-center"
      >
        <div className="relative w-full">
          <div className="relative z-10">
            <div className="flex flex-col items-center justify-center">
              <div className="genesis-wrapper relative">
                <img
                  src={pikachu}
                  alt="Pikachu"
                  className="pokemon-title-deco pokemon-title-deco-1"
                />
                <img
                  src={bulbasaur}
                  alt="Bulbasaur"
                  className="pokemon-title-deco pokemon-title-deco-2"
                />
                <img
                  src={charmander}
                  alt="Charmander"
                  className="pokemon-title-deco pokemon-title-deco-3"
                />
                <img
                  src={squirtle}
                  alt="Squirtle"
                  className="pokemon-title-deco pokemon-title-deco-4"
                />

                <h1 className="genesis-logo">
                  GENESIS <span className="genesis-number">5</span>
                </h1>
              </div>
            </div>

            <p
              className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] mt-4 sm:mt-6 max-w-xl text-center mx-auto px-4"
              style={{ fontFamily: "'Livvic', sans-serif" }}
            >
              REALITY CAN BE WHATEVER WE WANT
            </p>

            <div className="text-center">
              <button
                onClick={handleRegisterClick}
                className="mt-6 sm:mt-8 lg:mt-10 bg-[#0f79c4] text-white text-base sm:text-xl lg:text-2xl xl:text-3xl px-6 sm:px-10 lg:px-14 py-2 sm:py-3 lg:py-4 rounded-lg lg:rounded-xl hover:bg-[#0d6aac] hover:scale-105 transition-all duration-300"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                Register
              </button>
            </div>

            {/* Countdown Timer - Below Register Button */}
            <div className="mt-12 sm:mt-16 lg:mt-20 relative">
              {/* Pokemon decorations in front */}
              <img
                src={jigglypuff}
                alt="Jigglypuff"
                className="countdown-pokemon countdown-pokemon-1"
              />
              <img
                src={meowth}
                alt="Meowth"
                className="countdown-pokemon countdown-pokemon-2"
              />
              <img
                src={psyduck}
                alt="Psyduck"
                className="countdown-pokemon countdown-pokemon-3"
              />
              <img
                src={eevee}
                alt="Eevee"
                className="countdown-pokemon countdown-pokemon-4"
              />

              <div className="countdown-container text-center relative z-10">
                <h2 className="countdown-title">EVENT COUNTDOWN</h2>
                <p
                  className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6"
                  style={{
                    fontFamily: "'Livvic', sans-serif",
                    color: "#87c4ea",
                  }}
                >
                  Genesis 5 starts on Valentine's Day 2026! ❤️
                </p>
                <div className="countdown-grid">
                  <div className="countdown-item">
                    <div className="countdown-value">{timeLeft.days}</div>
                    <div className="countdown-label">Days</div>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-value">{timeLeft.hours}</div>
                    <div className="countdown-label">Hours</div>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-value">{timeLeft.minutes}</div>
                    <div className="countdown-label">Minutes</div>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-value">{timeLeft.seconds}</div>
                    <div className="countdown-label">Seconds</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-[1440px] mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-12 items-center">
          <div className="w-full sm:w-4/5 lg:w-[500px] xl:w-[600px] flex-shrink-0">
            <img
              src={aboutImage}
              alt="Character"
              className="w-full h-auto object-contain max-h-[400px] sm:max-h-[500px] lg:max-h-[600px]"
              style={{ filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))" }}
            />
          </div>

          <div className="flex-1 w-full">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-black leading-tight mb-3 sm:mb-4 lg:mb-6 text-center lg:text-left"
              style={{ fontFamily: "'Londrina Solid', sans-serif" }}
            >
              ABOUT GENESIS
            </h2>

            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-4 sm:mb-6 lg:mb-8 text-center lg:text-left"
              style={{ fontFamily: "'Livvic', sans-serif" }}
            >
              Rev your engines and fasten your seat belts as the GDXR Club
              kick-starts the Fourth Edition of Genesis - your ticket to an
              adventure that hits closer to home than ever! Returning after the
              2024 Last Edition, this 2025 Genesis isn't just about pixels and
              coding; it's about bringing the spirit of games to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6">
              <div
                className="border border-[#87c4ea] rounded-xl lg:rounded-2xl px-3 py-2 sm:px-4 sm:py-3"
                style={{ fontFamily: "'Livvic', sans-serif" }}
              >
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center sm:text-left">
                  Stage 1: Online Game Jam Round
                </p>
              </div>

              <div
                className="border border-[#87c4ea] rounded-xl lg:rounded-2xl px-3 py-2 sm:px-4 sm:py-3"
                style={{ fontFamily: "'Livvic', sans-serif" }}
              >
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center sm:text-left">
                  Stage 2: Offline Surprise Round
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="prizes"
        className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-[1440px] mx-auto"
      >
        <div className="text-center">
          <h2
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-black mb-2 sm:mb-4"
            style={{ fontFamily: "'Londrina Solid', sans-serif" }}
          >
            PRIZE POOL
          </h2>
          <p
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] italic"
            style={{ fontFamily: "'Mea Culpa', cursive" }}
          >
            +goodies
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-4 sm:gap-6 lg:gap-12 xl:gap-16 mt-8 sm:mt-12 lg:mt-16">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-3 sm:mb-4">
              <img src={prize3Circle} alt="" className="w-full h-full" />
            </div>
            <div className="bg-white border-[2px] sm:border-[3px] border-[#5a9dd7] rounded-2xl sm:rounded-3xl w-[200px] sm:w-[240px] lg:w-[260px] h-[150px] sm:h-[180px] lg:h-[200px] flex items-center justify-center">
              <p
                className="text-4xl sm:text-5xl font-black text-[#05427b]"
                style={{ fontFamily: "'Londrina Solid', sans-serif" }}
              >
                15k
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center sm:-mt-4 lg:-mt-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-3 sm:mb-4">
              <img src={prize1Circle} alt="" className="w-full h-full" />
            </div>
            <div className="relative w-[240px] sm:w-[280px] lg:w-[300px] h-[180px] sm:h-[210px] lg:h-[230px]">
              <img
                src={prize1Badge}
                alt=""
                className="w-full h-full object-cover"
              />
              <p
                className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl xl:text-[96px] font-black text-white"
                style={{ fontFamily: "'Londrina Solid', sans-serif" }}
              >
                17.5K
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-3 sm:mb-4">
              <img src={prize2Circle} alt="" className="w-full h-full" />
            </div>
            <div className="bg-white border-[2px] sm:border-[3px] border-[#5a9dd7] rounded-2xl sm:rounded-3xl w-[200px] sm:w-[242px] lg:w-[262px] h-[150px] sm:h-[180px] lg:h-[200px] flex items-center justify-center">
              <p
                className="text-4xl sm:text-5xl font-black text-[#05427b]"
                style={{ fontFamily: "'Londrina Solid', sans-serif" }}
              >
                12.5K
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="memories"
        className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-[1440px] mx-auto"
      >
        <h2
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-black text-center mb-6 sm:mb-10 lg:mb-16"
          style={{ fontFamily: "'Londrina Solid', sans-serif" }}
        >
          MEMORIES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 max-w-5xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-[#d9d9d9] w-full h-[160px] sm:h-[180px] lg:h-[200px] rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
          ))}
        </div>
      </section>

      <section
        id="faqs"
        className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-[1440px] mx-auto"
      >
        <h2
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-black text-center mb-6 sm:mb-10 lg:mb-16"
          style={{ fontFamily: "'Londrina Solid', sans-serif" }}
        >
          FAQS
        </h2>
        <div className="max-w-4xl mx-auto text-center text-base sm:text-lg lg:text-xl xl:text-2xl">
          <p>Coming soon...</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative bg-gradient-to-b from-[#0a0e27] to-[#050812] border-t border-[#87c4ea]/30 mt-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* Footer Top - Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-12 h-12 object-contain"
                  style={{
                    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))",
                  }}
                />
                <div className="text-2xl font-bold">
                  G<span className="text-red-600">DX</span>R
                </div>
              </div>
              <p
                className="text-[#87c4ea] text-sm leading-relaxed"
                style={{ fontFamily: "'Livvic', sans-serif" }}
              >
                Experience the ultimate game development competition. Join
                Genesis 5 and bring your creative visions to life!
              </p>
              <div className="flex gap-4">
                <img
                  src={snorlax}
                  alt="Snorlax"
                  className="w-16 h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  style={{
                    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))",
                  }}
                />
                <img
                  src={gengar}
                  alt="Gengar"
                  className="w-16 h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  style={{
                    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))",
                  }}
                />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3
                className="text-xl font-bold mb-4 text-[#ffe14d]"
                style={{ fontFamily: "'Londrina Solid', sans-serif" }}
              >
                Quick Links
              </h3>
              <ul className="space-y-2">
                {["Home", "About", "Prizes", "Memories", "FAQs"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-[#87c4ea] hover:text-white transition-colors text-sm"
                      style={{ fontFamily: "'Cairo', sans-serif" }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Event Info */}
            <div>
              <h3
                className="text-xl font-bold mb-4 text-[#ffe14d]"
                style={{ fontFamily: "'Londrina Solid', sans-serif" }}
              >
                Event Info
              </h3>
              <ul
                className="space-y-3 text-sm text-[#87c4ea]"
                style={{ fontFamily: "'Livvic', sans-serif" }}
              >
                <li className="flex items-start gap-2">
                  <span className="text-red-500">📅</span>
                  <span>Date: February 14, 2026</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500">🎮</span>
                  <span>Type: Game Development Competition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">💰</span>
                  <span>Prize Pool: ₹45,000 + Goodies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">👥</span>
                  <span>Format: Online & Offline Rounds</span>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3
                className="text-xl font-bold mb-4 text-[#ffe14d]"
                style={{ fontFamily: "'Londrina Solid', sans-serif" }}
              >
                Connect With Us
              </h3>
              <ul
                className="space-y-3 text-sm text-[#87c4ea]"
                style={{ fontFamily: "'Livvic', sans-serif" }}
              >
                <li className="flex items-center gap-2">
                  <span>📧</span>
                  <a
                    href="mailto:gdxr@example.com"
                    className="hover:text-white transition-colors"
                  >
                    gdxr@example.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span>📱</span>
                  <span>+91 XXXXX XXXXX</span>
                </li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#0f79c4] hover:bg-[#0d6aac] flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Discord"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#0f79c4] hover:bg-[#0d6aac] flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#0f79c4] hover:bg-[#0d6aac] flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-[#87c4ea]/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p
                className="text-sm text-[#87c4ea] text-center md:text-left"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                © 2025 AR-VR Club. All rights reserved. Made with ❤️ for game
                developers
              </p>
              <div
                className="flex gap-6 text-sm text-[#87c4ea]"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                <button className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
                <button className="hover:text-white transition-colors">
                  Terms of Service
                </button>
                <button className="hover:text-white transition-colors">
                  Code of Conduct
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Pokemon at bottom */}
        <div className="absolute bottom-4 left-4 opacity-20">
          <img src={pikachu} alt="" className="w-20 h-20 object-contain" />
        </div>
        <div className="absolute bottom-4 right-4 opacity-20">
          <img src={charmander} alt="" className="w-20 h-20 object-contain" />
        </div>
      </footer>
    </div>
  );
}
