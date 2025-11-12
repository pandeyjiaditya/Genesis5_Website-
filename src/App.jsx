import React from "react";
import "./index.css";

const aboutImage = "/character1.png";
const navPokemon = "/nav.png";
const logo = "/logo.png";

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
const mew =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png";
const togepi =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png";
const charizard =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png";
const gyarados =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png";
const dragonite =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png";
const mewtwo =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png";
const lapras =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png";
const alakazam =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png";
const arcanine =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png";
const blastoise = "blastoise.png";

const faqData = [
  {
    category: "Registration & Participation",
    questions: [
      {
        q: "How can I register for GENESIS 5?",
        a: "You can register through the official link on our website or Unstop page once registrations open.",
      },
      {
        q: "What is the maximum number of participants per team?",
        a: "Teams can have up to 4–5 members, covering roles like coding, design, and sound.",
      },
      {
        q: "Can I join even if I don't know coding?",
        a: "Absolutely! Artists, designers, storytellers, and sound creators are just as important as developers.",
      },
      {
        q: "Can teams from different colleges participate together?",
        a: "Yes, cross-college teams are welcome — collaboration makes the experience even better!",
      },
    ],
  },
  {
    category: "Event Details",
    questions: [
      {
        q: "What are the judging criteria?",
        a: "Games will be judged on innovation, gameplay, design, theme relevance, and presentation.",
      },
      {
        q: "Will there be mentors to guide participants?",
        a: "Yes! Participants will get exclusive mentorship from industry experts, including VR leads and game professionals.",
      },
      {
        q: "What kind of workshops or speaker sessions are planned?",
        a: "Expect interactive sessions with developers, designers, and game industry veterans to inspire and upskill participants.",
      },
    ],
  },
  {
    category: "Prizes & Perks",
    questions: [
      {
        q: "What is the total prize pool?",
        a: "GENESIS 5 offers an exciting prize pool of ₹45,000+, along with merch, goodies, and digital rewards.",
      },
      {
        q: "Are there perks for all participants?",
        a: "Yes — every participant gets exclusive GENESIS 5 merch, certificates, and networking opportunities.",
      },
      {
        q: "Will all participants get certificates?",
        a: "Yes, every registered participant who completes the event will receive a certificate of participation.",
      },
    ],
  },
  {
    category: "General Information",
    questions: [
      {
        q: "How can I stay updated about GENESIS 5?",
        a: "Follow us on our official Instagram, LinkedIn, and Discord, and check the website regularly for updates.",
      },
      {
        q: "What should I bring to the event?",
        a: "Bring your laptop, charger, creative energy, and anything else you need to build your dream game.",
      },
      {
        q: "Who can I contact for queries?",
        a: "You can reach out to the GENESIS 5 Organizing Team via email or social media — all details are available on the Contact page.",
      },
    ],
  },
];

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [loadingFadeOut, setLoadingFadeOut] = React.useState(false);
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
  const [activeFaqCategory, setActiveFaqCategory] = React.useState(0);
  const [openFaqIndex, setOpenFaqIndex] = React.useState({ "0-0": true });

  const navRefs = React.useRef({
    home: null,
    about: null,
    memories: null,
    faqs: null,
  });
  const floatingPokemonRef = React.useRef(null);
  const navButtonRef = React.useRef(null);

  // Loading Screen Effect - REDUCED TO 9 SECONDS
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }, 9000); // Changed from 12000 to 9000

    return () => clearTimeout(timer);
  }, []);

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

  // Active section detection based on scroll
  React.useEffect(() => {
    const sections = ["home", "about", "prizes", "memories", "faqs"];
    let ticking = false;

    const calcActive = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let current = "home";

      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;

      if (isAtBottom) {
        current = "faqs";
      } else {
        for (let id of sections) {
          const el = document.getElementById(id);
          if (!el) continue;
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            current = id;
            break;
          }
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

  // Update underline position when active section changes
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

  const toggleFaq = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenFaqIndex((prev) => {
      const newState = {};
      Object.keys(prev).forEach((k) => {
        if (k.startsWith(`${categoryIndex}-`)) {
          newState[k] = false;
        }
      });
      newState[key] = !prev[key];
      return newState;
    });
  };

  const handleCategoryChange = (index) => {
    setActiveFaqCategory(index);
    setOpenFaqIndex({ [`${index}-0`]: true });
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("home");
  };

  if (loading) {
    return (
      <div className={`loading-screen ${loadingFadeOut ? "fade-out" : ""}`}>
        {/* Background Decorations */}
        <div className="loading-bg-pattern"></div>

        {/* Aggressive Pokemon Decorations */}
        <img
          src={charizard}
          alt=""
          className="loading-pokemon loading-pokemon-1"
        />
        <img
          src={gyarados}
          alt=""
          className="loading-pokemon loading-pokemon-2"
        />
        <img
          src={dragonite}
          alt=""
          className="loading-pokemon loading-pokemon-3"
        />
        <img
          src={mewtwo}
          alt=""
          className="loading-pokemon loading-pokemon-4"
        />
        <img
          src={gengar}
          alt=""
          className="loading-pokemon loading-pokemon-5"
        />

        {/* Top Center Logo */}
        <div className="loading-logo-container">
          <img src={logo} alt="GDXR Logo" className="loading-logo" />
          <div className="loading-logo-text">
            G<span className="text-red-600">DX</span>R
          </div>
        </div>

        {/* Center Content */}
        <div className="loading-content">
          {/* Pokeball Animation */}
          <div className="pokeball-loader">
            <div className="pokeball">
              <div className="pokeball-top"></div>
              <div className="pokeball-bottom"></div>
              <div className="pokeball-center">
                <div className="pokeball-inner-circle"></div>
              </div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="loading-text-container">
            <h1 className="loading-title">GENESIS</h1>
            <p className="loading-subtitle">Loading...</p>
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Bottom Progress Bar */}
        <div className="loading-progress-bar">
          <div className="loading-progress-fill"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      {/* Pokeball background decorations */}
      <div className="pokeball-bg-deco pokeball-1"></div>
      <div className="pokeball-bg-deco pokeball-2"></div>
      <div className="pokeball-bg-deco pokeball-3"></div>

      {/* Global Faded Pokemon - Spread Across Entire Website */}
      <img
        src={snorlax}
        alt=""
        className="global-faded-pokemon"
        style={{
          position: "fixed",
          top: "8%",
          left: "2%",
          width: "clamp(100px, 12vw, 150px)",
          height: "clamp(100px, 12vw, 150px)",
          opacity: 0.08,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <img
        src={lapras}
        alt=""
        className="global-faded-pokemon"
        style={{
          position: "fixed",
          top: "15%",
          right: "3%",
          width: "clamp(90px, 11vw, 140px)",
          height: "clamp(90px, 11vw, 140px)",
          opacity: 0.07,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <img
        src={gengar}
        alt=""
        className="global-faded-pokemon"
        style={{
          position: "fixed",
          top: "40%",
          left: "1%",
          width: "clamp(95px, 11vw, 145px)",
          height: "clamp(95px, 11vw, 145px)",
          opacity: 0.06,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <img
        src={alakazam}
        alt=""
        className="global-faded-pokemon"
        style={{
          position: "fixed",
          top: "50%",
          right: "2%",
          width: "clamp(85px, 10vw, 135px)",
          height: "clamp(85px, 10vw, 135px)",
          opacity: 0.08,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <img
        src={arcanine}
        alt=""
        className="global-faded-pokemon"
        style={{
          position: "fixed",
          bottom: "25%",
          left: "3%",
          width: "clamp(90px, 11vw, 140px)",
          height: "clamp(90px, 11vw, 140px)",
          opacity: 0.07,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <img
        src={blastoise}
        alt=""
        className="global-faded-pokemon"
        style={{
          position: "fixed",
          bottom: "20%",
          right: "4%",
          width: "clamp(95px, 11vw, 145px)",
          height: "clamp(95px, 11vw, 145px)",
          opacity: 0.06,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <img
        src={dragonite}
        alt=""
        className="global-faded-pokemon"
        style={{
          position: "fixed",
          top: "28%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "clamp(110px, 13vw, 160px)",
          height: "clamp(110px, 13vw, 160px)",
          opacity: 0.05,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <img
        src={gyarados}
        alt=""
        className="global-faded-pokemon"
        style={{
          position: "fixed",
          bottom: "45%",
          left: "8%",
          width: "clamp(85px, 10vw, 135px)",
          height: "clamp(85px, 10vw, 135px)",
          opacity: 0.07,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <img
        src={mewtwo}
        alt=""
        className="global-faded-pokemon"
        style={{
          position: "fixed",
          bottom: "50%",
          right: "6%",
          width: "clamp(90px, 11vw, 140px)",
          height: "clamp(90px, 11vw, 140px)",
          opacity: 0.06,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <img
        src={mew}
        alt=""
        className="global-faded-pokemon"
        style={{
          position: "fixed",
          top: "65%",
          left: "5%",
          width: "clamp(80px, 10vw, 130px)",
          height: "clamp(80px, 10vw, 130px)",
          opacity: 0.08,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <img
        src={charizard}
        alt=""
        className="global-faded-pokemon"
        style={{
          position: "fixed",
          top: "70%",
          right: "7%",
          width: "clamp(100px, 12vw, 150px)",
          height: "clamp(100px, 12vw, 150px)",
          opacity: 0.07,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

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
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 sm:gap-3"
            >
              <img
                src={logo}
                alt="Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))" }}
              />
              <div className="text-lg sm:text-xl lg:text-2xl font-normal">
                G<span className="text-red-600">DX</span>R
              </div>
            </button>
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

            {/* Animated Underline */}
            <div
              className="absolute bottom-0 h-[3px] bg-gradient-to-r from-[#ff4343] via-[#ffd700] to-[#44a3f7] rounded-full transition-all duration-500 ease-out"
              style={{
                left: underlineStyle.left + "px",
                width: underlineStyle.width + "px",
                boxShadow: "0 0 10px rgba(255, 215, 0, 0.6)",
              }}
            />
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
        className="relative min-h-screen pt-20 sm:pt-24 lg:pt-28 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto flex items-center overflow-hidden"
      >
        <div className="relative w-full">
          <div className="relative z-10">
            <div className="flex flex-col items-center justify-center">
              <div className="genesis-wrapper-new relative mb-6 sm:mb-8">
                <h1 className="genesis-logo-new">
                  GENESIS <span className="genesis-number-new">5</span>
                </h1>
              </div>
            </div>

            <p
              className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] mb-6 sm:mb-8 max-w-2xl text-center mx-auto px-4"
              style={{ fontFamily: "'Livvic', sans-serif" }}
            >
              REALITY CAN BE WHATEVER WE WANT
            </p>

            <div className="text-center">
              <button
                onClick={handleRegisterClick}
                className="bg-[#0f79c4] text-white text-base sm:text-xl lg:text-2xl xl:text-3xl px-6 sm:px-10 lg:px-14 py-2 sm:py-3 lg:py-4 rounded-lg lg:rounded-xl hover:bg-[#0d6aac] hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/50"
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                Register Now
              </button>
            </div>

            {/* Countdown Timer */}
            <div className="mt-16 sm:mt-20 lg:mt-24 relative z-10">
              <div className="countdown-container text-center relative overflow-visible">
                {/* Pokemon positioned OUTSIDE container with higher z-index */}
                <img
                  src={jigglypuff}
                  alt="Jigglypuff"
                  className="absolute"
                  style={{
                    top: "-100px",
                    left: "-80px",
                    width: "clamp(100px, 14vw, 160px)",
                    height: "clamp(100px, 14vw, 160px)",
                    objectFit: "contain",
                    filter: "drop-shadow(0 8px 20px rgba(0, 0, 0, 0.4))",
                    animation: "bobFloat 4s ease-in-out infinite",
                    animationDelay: "0s",
                    zIndex: 100,
                    pointerEvents: "none",
                  }}
                />
                <img
                  src={meowth}
                  alt="Meowth"
                  className="absolute"
                  style={{
                    top: "-90px",
                    right: "-80px",
                    width: "clamp(100px, 14vw, 160px)",
                    height: "clamp(100px, 14vw, 160px)",
                    objectFit: "contain",
                    filter: "drop-shadow(0 8px 20px rgba(0, 0, 0, 0.4))",
                    animation: "bobFloat 4s ease-in-out infinite",
                    animationDelay: "-1s",
                    zIndex: 100,
                    pointerEvents: "none",
                  }}
                />
                <img
                  src={psyduck}
                  alt="Psyduck"
                  className="absolute"
                  style={{
                    bottom: "-100px",
                    left: "8%",
                    width: "clamp(100px, 14vw, 160px)",
                    height: "clamp(100px, 14vw, 160px)",
                    objectFit: "contain",
                    filter: "drop-shadow(0 8px 20px rgba(0, 0, 0, 0.4))",
                    animation: "bobFloat 4s ease-in-out infinite",
                    animationDelay: "-2s",
                    zIndex: 100,
                    pointerEvents: "none",
                  }}
                />
                <img
                  src={togepi}
                  alt="Togepi"
                  className="absolute"
                  style={{
                    bottom: "-90px",
                    right: "8%",
                    width: "clamp(100px, 14vw, 160px)",
                    height: "clamp(100px, 14vw, 160px)",
                    objectFit: "contain",
                    filter: "drop-shadow(0 8px 20px rgba(0, 0, 0, 0.4))",
                    animation: "bobFloat 4s ease-in-out infinite",
                    animationDelay: "-3s",
                    zIndex: 100,
                    pointerEvents: "none",
                  }}
                />

                <h2 className="countdown-title">EVENT COUNTDOWN</h2>
                <p
                  className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6"
                  style={{
                    fontFamily: "'Livvic', sans-serif",
                    color: "#87c4ea",
                  }}
                >
                  Genesis 5 starts on 14th Feb 2026! ❤️
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
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-12 items-center relative z-10">
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
        <div className="text-center relative z-10">
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

        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16 mt-12 sm:mt-16 lg:mt-20 relative z-10">
          {/* 3rd Place */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 relative flex items-center justify-center bg-gradient-to-br from-[#cd7f32]/30 to-[#8b4513]/20 backdrop-blur-sm winner-badge">
              <div
                className="text-white font-black text-xl sm:text-2xl z-20"
                style={{
                  fontFamily: "'Londrina Solid', sans-serif",
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)",
                }}
              >
                3RD
              </div>
            </div>
            <div className="prize-box bg-white border-[2px] sm:border-[3px] border-[#5a9dd7] rounded-2xl sm:rounded-3xl w-[200px] sm:w-[240px] lg:w-[260px] h-[150px] sm:h-[180px] lg:h-[200px] flex items-center justify-center shadow-lg">
              <p
                className="prize-amount text-4xl sm:text-5xl font-black text-[#05427b]"
                style={{ fontFamily: "'Londrina Solid', sans-serif" }}
              >
                12.5K
              </p>
            </div>
          </div>

          {/* 1st Place - Elevated */}
          <div className="flex flex-col items-center sm:-mt-8 lg:-mt-12">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mb-4 relative flex items-center justify-center bg-gradient-to-br from-[#ffd700]/40 to-[#ffed4e]/30 backdrop-blur-sm winner-badge">
              <div
                className="text-white font-black text-2xl sm:text-3xl z-20"
                style={{
                  fontFamily: "'Londrina Solid', sans-serif",
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)",
                }}
              >
                1ST
              </div>
            </div>
            <div className="prize-box relative w-[240px] sm:w-[280px] lg:w-[300px] h-[180px] sm:h-[210px] lg:h-[230px]">
              <div className="absolute inset-0 bg-white border-[2px] sm:border-[3px] border-[#5a9dd7] rounded-2xl sm:rounded-3xl shadow-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="prize-amount text-5xl sm:text-6xl lg:text-7xl xl:text-[100px] font-black text-[#05427b] z-20"
                  style={{ fontFamily: "'Londrina Solid', sans-serif" }}
                >
                  17.5K
                </p>
              </div>
            </div>
          </div>

          {/* 2nd Place */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 relative flex items-center justify-center bg-gradient-to-br from-[#c0c0c0]/30 to-[#a8a8a8]/20 backdrop-blur-sm winner-badge">
              <div
                className="text-white font-black text-xl sm:text-2xl z-20"
                style={{
                  fontFamily: "'Londrina Solid', sans-serif",
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.7)",
                }}
              >
                2ND
              </div>
            </div>
            <div className="prize-box bg-white border-[2px] sm:border-[3px] border-[#5a9dd7] rounded-2xl sm:rounded-3xl w-[200px] sm:w-[242px] lg:w-[262px] h-[150px] sm:h-[180px] lg:h-[200px] flex items-center justify-center shadow-lg">
              <p
                className="prize-amount text-4xl sm:text-5xl font-black text-[#05427b]"
                style={{ fontFamily: "'Londrina Solid', sans-serif" }}
              >
                15K
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
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-black text-center mb-6 sm:mb-10 lg:mb-16 relative z-10"
          style={{ fontFamily: "'Londrina Solid', sans-serif" }}
        >
          MEMORIES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 max-w-5xl mx-auto relative z-10">
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
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-black text-center mb-8 sm:mb-12 lg:mb-16 relative z-10"
          style={{ fontFamily: "'Londrina Solid', sans-serif" }}
        >
          FAQS
        </h2>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {faqData.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(index)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base lg:text-lg font-medium transition-all ${
                  activeFaqCategory === index
                    ? "bg-[#0f79c4] text-white shadow-lg shadow-blue-500/50"
                    : "bg-[#1a1d3a] text-[#87c4ea] hover:bg-[#0f79c4]/20"
                }`}
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {category.category}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {faqData[activeFaqCategory].questions.map((item, qIndex) => {
              const key = `${activeFaqCategory}-${qIndex}`;
              const isOpen = openFaqIndex[key];
              return (
                <div
                  key={qIndex}
                  className="bg-gradient-to-r from-[#0a0e27]/80 to-[#1a1d3a]/80 border border-[#87c4ea]/30 rounded-xl overflow-hidden backdrop-blur-sm"
                >
                  <button
                    onClick={() => toggleFaq(activeFaqCategory, qIndex)}
                    className="w-full px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-[#87c4ea]/10 transition-colors"
                  >
                    <span
                      className="text-left text-sm sm:text-base lg:text-lg text-white font-medium"
                      style={{ fontFamily: "'Cairo', sans-serif" }}
                    >
                      {item.q}
                    </span>
                    <svg
                      className={`w-5 h-5 sm:w-6 sm:h-6 text-[#87c4ea] transition-transform flex-shrink-0 ml-4 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div
                      className="px-4 sm:px-6 pb-4 text-sm sm:text-base lg:text-lg text-[#87c4ea] leading-relaxed"
                      style={{ fontFamily: "'Livvic', sans-serif" }}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
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
                  src={squirtle}
                  alt="Squirtle"
                  className="w-16 h-16 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  style={{
                    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))",
                  }}
                />
                <img
                  src={bulbasaur}
                  alt="Bulbasaur"
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
                  <span>👤</span>
                  <div>
                    <div className="font-semibold text-white">Abhinav S</div>
                    <a
                      href="tel:+919778052399"
                      className="hover:text-white transition-colors"
                    >
                      +91 9778052399
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-2">
                  <span>👤</span>
                  <div>
                    <div className="font-semibold text-white">
                      Aradhna Kumari
                    </div>
                    <a
                      href="tel:+917050262224"
                      className="hover:text-white transition-colors"
                    >
                      +91 7050262224
                    </a>
                  </div>
                </li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://www.instagram.com/gdxr_ait/"
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
