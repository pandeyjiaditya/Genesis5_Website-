import React from "react";
import "./index.css";

const aboutImage = "/character1.png";
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
const snorlax =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const [underlineStyle, setUnderlineStyle] = React.useState({
    left: 0,
    width: 0,
  });
  const [isVisible, setIsVisible] = React.useState({
    home: false,
    about: false,
    prizes: false,
    memories: false,
    faqs: false,
  });

  const navRefs = React.useRef({
    home: null,
    about: null,
    memories: null,
    faqs: null,
  });

  React.useEffect(() => {
    setTimeout(() => setIsVisible((p) => ({ ...p, home: true })), 120);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (!id) return;
          setIsVisible((prev) => ({ ...prev, [id]: entry.isIntersecting }));
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

      <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-black z-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={snorlax}
              alt="Snorlax"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              style={{ filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))" }}
            />
            <div className="text-xl sm:text-2xl font-normal">
              G<span className="text-red-600">DX</span>R
            </div>
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
            {/* Nav Pokemon mascot that follows underline - to the left of text */}
            <img
              src={pikachu}
              alt="Pikachu"
              className="nav-pokemon-static"
              style={{
                left: underlineStyle.left + "px",
              }}
            />

            <div className="flex items-center gap-6 xl:gap-8 text-base xl:text-lg">
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
                className="block w-full text-left px-4 py-2 text-xl hover:bg-gray-900 rounded"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-2 text-xl hover:bg-gray-900 rounded"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("memories")}
                className="block w-full text-left px-4 py-2 text-xl hover:bg-gray-900 rounded"
              >
                Memories
              </button>
              <button
                onClick={() => scrollToSection("faqs")}
                className="block w-full text-left px-4 py-2 text-xl hover:bg-gray-900 rounded"
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
        className="relative min-h-screen pt-16 sm:pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto flex items-center"
      >
        <div className="relative w-full">
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center">
              <div className="genesis-wrapper relative">
                {/* Pokemon decorations around the title */}
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
              className="text-base sm:text-xl md:text-2xl lg:text-[28px] mt-4 sm:mt-6 max-w-xl text-center mx-auto"
              style={{ fontFamily: "'Livvic', sans-serif" }}
            >
              REALITY CAN BE WHATEVER WE WANT
            </p>

            <div className="text-center">
              <button
                onClick={handleRegisterClick}
                className="mt-6 sm:mt-8 lg:mt-10 bg-[#0f79c4] text-white text-lg sm:text-2xl lg:text-3xl px-8 sm:px-12 lg:px-14 py-3 sm:py-4 rounded-xl lg:rounded-2xl hover:bg-[#0d6aac] hover:scale-105 transition-all duration-300"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-[1440px] mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-[500px] xl:w-[550px] flex-shrink-0 transition-all duration-1000">
            <img
              src={aboutImage}
              alt="Character"
              className="w-full h-auto object-contain max-h-[500px] lg:max-h-[600px]"
              style={{ filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))" }}
            />
          </div>

          <div className="flex-1">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black leading-tight mb-4 sm:mb-6 lg:mb-8"
              style={{ fontFamily: "'Londrina Solid', sans-serif" }}
            >
              ABOUT GENESIS
            </h2>

            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] leading-relaxed mb-6 sm:mb-8 lg:mb-10"
              style={{ fontFamily: "'Livvic', sans-serif" }}
            >
              Rev your engines and fasten your seat belts as the GDXR Club
              kick-starts the Fourth Edition of Genesis - your ticket to an
              adventure...
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div
                className="border border-[#87c4ea] rounded-2xl px-4 py-3"
                style={{ fontFamily: "'Livvic', sans-serif" }}
              >
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                  Stage 1: Online Game Jam Round
                </p>
              </div>

              <div
                className="border border-[#87c4ea] rounded-2xl px-4 py-3"
                style={{ fontFamily: "'Livvic', sans-serif" }}
              >
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
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
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[96px] font-black mb-2 sm:mb-4"
            style={{ fontFamily: "'Londrina Solid', sans-serif" }}
          >
            PRIZE POOL
          </h2>
          <p
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[96px] italic"
            style={{ fontFamily: "'Mea Culpa', cursive" }}
          >
            +goodies
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-6 sm:gap-8 lg:gap-16 mt-12 sm:mt-16 lg:mt-20">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full mb-4">
              <img src={prize3Circle} alt="" className="w-full h-full" />
            </div>
            <div className="bg-white border-[3px] border-[#5a9dd7] rounded-3xl w-[260px] h-[200px] flex items-center justify-center">
              <p
                className="text-5xl font-black text-[#05427b]"
                style={{ fontFamily: "'Londrina Solid', sans-serif" }}
              >
                15k
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center sm:-mt-8 lg:-mt-16">
            <div className="w-24 h-24 rounded-full mb-4">
              <img src={prize1Circle} alt="" className="w-full h-full" />
            </div>
            <div className="relative w-[300px] h-[230px]">
              <img
                src={prize1Badge}
                alt=""
                className="w-full h-full object-cover"
              />
              <p
                className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl lg:text-[96px] font-black text-white"
                style={{ fontFamily: "'Londrina Solid', sans-serif" }}
              >
                17.5K
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full mb-4">
              <img src={prize2Circle} alt="" className="w-full h-full" />
            </div>
            <div className="bg-white border-[3px] border-[#5a9dd7] rounded-3xl w-[262px] h-[200px] flex items-center justify-center">
              <p
                className="text-5xl font-black text-[#05427b]"
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
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[96px] font-black text-center mb-8 sm:mb-12 lg:mb-16"
          style={{ fontFamily: "'Londrina Solid', sans-serif" }}
        >
          MEMORIES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-[#d9d9d9] w-full h-[200px] rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
          ))}
        </div>
      </section>

      <section
        id="faqs"
        className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-[1440px] mx-auto"
      >
        <h2
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[96px] font-black text-center mb-8 sm:mb-12 lg:mb-16"
          style={{ fontFamily: "'Londrina Solid', sans-serif" }}
        >
          FAQS
        </h2>
        <div className="max-w-4xl mx-auto text-center text-lg sm:text-xl lg:text-2xl">
          <p>Coming soon...</p>
        </div>
      </section>
    </div>
  );
}
