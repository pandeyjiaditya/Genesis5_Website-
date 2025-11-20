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

// Update the memorySlides array with placeholder images for now
const memorySlides = [
  [
    { id: 1, src: "https://picsum.photos/600/400?random=1", alt: "Memory 1" },
    { id: 2, src: "https://picsum.photos/600/400?random=2", alt: "Memory 2" },
    { id: 3, src: "https://picsum.photos/600/400?random=3", alt: "Memory 3" },
    { id: 4, src: "https://picsum.photos/600/400?random=4", alt: "Memory 4" },
  ],
  [
    { id: 5, src: "https://picsum.photos/600/400?random=5", alt: "Memory 5" },
    { id: 6, src: "https://picsum.photos/600/400?random=6", alt: "Memory 6" },
    { id: 7, src: "https://picsum.photos/600/400?random=7", alt: "Memory 7" },
    { id: 8, src: "https://picsum.photos/600/400?random=8", alt: "Memory 8" },
  ],
];

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [loadingFadeOut, setLoadingFadeOut] = React.useState(false);
  const [loadingProgress, setLoadingProgress] = React.useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const [floatingPokemonStyle, setFloatingPokemonStyle] = React.useState({
    left: "50%",
    top: "80px",
  });
  const [activeSection, setActiveSection] = React.useState("home");
  const [activeFaqCategory, setActiveFaqCategory] = React.useState(0);
  const [openFaqIndex, setOpenFaqIndex] = React.useState({});
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [underlineStyle, setUnderlineStyle] = React.useState({
    left: 0,
    width: 0,
  });
  const [scrollProgress, setScrollProgress] = React.useState(0);

  const navRefs = React.useRef({
    home: null,
    about: null,
    memories: null,
    sponsors: null,
    faqs: null,
  });
  const floatingPokemonRef = React.useRef(null);
  const navButtonRef = React.useRef(null);
  const homeRef = React.useRef(null);

  // Simple 5-second loading with progress bar
  React.useEffect(() => {
    const duration = 5000;
    const interval = 50;
    let elapsed = 0;

    const progressInterval = setInterval(() => {
      elapsed += interval;
      const progress = Math.min((elapsed / duration) * 100, 100);
      setLoadingProgress(progress);

      if (elapsed >= duration) {
        clearInterval(progressInterval);
        setLoadingFadeOut(true);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }, interval);

    return () => clearInterval(progressInterval);
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

  // Scroll Animation Effect for Home Section
  React.useEffect(() => {
    const handleScroll = () => {
      if (homeRef.current) {
        const rect = homeRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate scroll progress (0 to 1)
        // More aggressive calculation for better visibility
        const progress = Math.max(
          0,
          Math.min(1, (-rect.top / windowHeight) * 1.5)
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Memory Slider Auto-play Effect
  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const duration = 8000; // 8 seconds per slide
    const interval = 50; // Update progress every 50ms
    let elapsed = 0;

    const progressInterval = setInterval(() => {
      elapsed += interval;
      setProgress((elapsed / duration) * 100);

      if (elapsed >= duration) {
        nextSlide();
        elapsed = 0;
      }
    }, interval);

    return () => clearInterval(progressInterval);
  }, [currentSlide, isAutoPlaying]);

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
    const sections = [
      "home",
      "about",
      "prizes",
      "memories",
      "sponsors",
      "faqs",
    ];
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

  // SMOOTH SCROLL CONFIGURATION
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80; // Adjust for fixed navbar
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % memorySlides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + memorySlides.length) % memorySlides.length
    );
    setProgress(0);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const handleSliderMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleSliderMouseLeave = () => {
    setIsAutoPlaying(true);
    setProgress(0);
  };

  if (loading) {
    return (
      <div
        className={`simple-loading-screen ${loadingFadeOut ? "fade-out" : ""}`}
      >
        <div className="loading-content">
          <img src={logo} alt="GDXR Logo" className="gdxr-logo-loading" />
          <p className="loading-text">Loading...</p>
          <div className="loading-bar-container">
            <div
              className="loading-bar-fill"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <p className="loading-percentage">{Math.round(loadingProgress)}%</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen text-white"
      style={{ scrollBehavior: "smooth" }}
    >
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

      {/* Navigation */}
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
                ref={(el) => (navRefs.current.sponsors = el)}
                onClick={() => scrollToSection("sponsors")}
                className="relative hover:opacity-80 transition-opacity py-2"
              >
                Sponsors
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
                onClick={() => scrollToSection("sponsors")}
                className="block w-full text-left px-4 py-2 text-lg hover:bg-gray-900 rounded"
              >
                Sponsors
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

      {/* Home Section - WITH SCROLL ANIMATIONS */}
      <section
        ref={homeRef}
        id="home"
        className="relative min-h-screen pt-20 sm:pt-24 lg:pt-28 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto flex items-center overflow-hidden"
      >
        <div className="relative w-full">
          <div className="relative z-10">
            <div className="flex flex-col items-center justify-center">
              {/* GENESIS 5 - Pokemon Style */}
              <div className="genesis-3d-container mb-6 sm:mb-8">
                <div className="genesis-3d-wrapper-static">
                  <h1 className="genesis-3d-text-static">
                    <span className="genesis-letter-static">G</span>
                    <span className="genesis-letter-static">E</span>
                    <span className="genesis-letter-static">N</span>
                    <span className="genesis-letter-static">E</span>
                    <span className="genesis-letter-static">S</span>
                    <span className="genesis-letter-static">I</span>
                    <span className="genesis-letter-static">S</span>
                    <span className="genesis-space"> </span>
                    <span className="genesis-number-static">5</span>
                  </h1>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <p
              className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] mb-6 sm:mb-8 max-w-2xl text-center mx-auto px-4"
              style={{ fontFamily: "'Livvic', sans-serif" }}
            >
              REALITY CAN BE WHATEVER WE WANT
            </p>

            {/* Register Button */}
            <div className="flex justify-center items-center mb-8 sm:mb-12 lg:mb-16 px-4">
              <button
                onClick={handleRegisterClick}
                className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black px-8 sm:px-12 lg:px-16 py-4 sm:py-5 rounded-full text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,203,5,0.5)] hover:shadow-[0_0_50px_rgba(255,203,5,0.8)]"
                style={{ fontFamily: "'Livvic', sans-serif" }}
              >
                <span className="relative z-10">Register Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Countdown Timer */}
            <div className="mt-16 sm:mt-20 lg:mt-24 relative z-10">
              <div className="countdown-container text-center relative overflow-visible">
                <img
                  src={jigglypuff}
                  alt="Jigglypuff"
                  className="absolute countdown-pokemon countdown-pokemon-1"
                />
                <img
                  src={meowth}
                  alt="Meowth"
                  className="absolute countdown-pokemon countdown-pokemon-2"
                />
                <img
                  src={psyduck}
                  alt="Psyduck"
                  className="absolute countdown-pokemon countdown-pokemon-3"
                />
                <img
                  src={togepi}
                  alt="Togepi"
                  className="absolute countdown-pokemon countdown-pokemon-4"
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

          <img
            src={pikachu}
            alt=""
            className="pokemon-hero-deco pokemon-hero-main-1"
          />
          <img
            src={charizard}
            alt=""
            className="pokemon-hero-deco pokemon-hero-main-2"
          />
        </div>
      </section>

      {/* About Section */}
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

      {/* Prizes Section */}
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

      {/* UPDATED MEMORIES SECTION WITH IMPROVED COLLAGE */}
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

        <div
          className="memory-slider-container relative z-10"
          onMouseEnter={handleSliderMouseEnter}
          onMouseLeave={handleSliderMouseLeave}
        >
          <div
            className="memory-slider-wrapper"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {memorySlides.map((slide, slideIndex) => (
              <div key={slideIndex} className="memory-slide">
                <div className="memory-collage-grid">
                  {slide.map((image, idx) => (
                    <div
                      key={image.id}
                      className={`memory-collage-item memory-item-${
                        idx + 1
                      } group`}
                    >
                      <div className="memory-image-container">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="memory-image"
                          onError={(e) => {
                            console.log("Image failed to load:", image.src);
                            e.target.src = `https://via.placeholder.com/600x400/1a1d3a/87c4ea?text=Memory+${image.id}`;
                          }}
                        />
                        <div className="memory-overlay">
                          <span className="memory-label">Genesis Memory</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="memory-nav-arrow left"
            aria-label="Previous slide"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="memory-nav-arrow right"
            aria-label="Next slide"
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="memory-pagination">
            {memorySlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`memory-dot ${
                  index === currentSlide ? "active" : ""
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* REMOVED PROGRESS BAR */}
        </div>
      </section>

      {/* UPDATED SPONSORS SECTION - BECOME A SPONSOR */}
      <section id="sponsors" className="sponsors-section">
        {/* Decorative Pokemon */}
        <img
          src={pikachu}
          alt=""
          className="sponsors-deco-pokemon sponsors-deco-left"
        />
        <img
          src={charmander}
          alt=""
          className="sponsors-deco-pokemon sponsors-deco-right"
        />

        <div className="sponsors-container">
          <h2 className="sponsors-title">OUR SPONSORS</h2>

          {/* Become a Sponsor Call-to-Action */}
          <div className="become-sponsor-section">
            <div className="sponsor-cta-card">
              <div className="sponsor-icon-wrapper">
                <svg
                  className="sponsor-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>

              <h3 className="sponsor-cta-title">Partner With Genesis 5</h3>

              <p className="sponsor-cta-description">
                Join us in empowering the next generation of game developers and
                innovators. Showcase your brand to thousands of talented
                students and tech enthusiasts.
              </p>

              <div className="sponsor-benefits">
                <div className="sponsor-benefit-item">
                  <svg
                    className="benefit-check"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span>Brand Visibility</span>
                </div>
                <div className="sponsor-benefit-item">
                  <svg
                    className="benefit-check"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span>Networking Opportunities</span>
                </div>
                <div className="sponsor-benefit-item">
                  <svg
                    className="benefit-check"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span>Talent Recruitment</span>
                </div>
              </div>

              <button
                onClick={() =>
                  window.open(
                    "https://forms.google.com/your-sponsor-form-link",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="become-sponsor-btn group"
              >
                <span className="btn-text">Become a Sponsor</span>
                <svg
                  className="btn-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>

              <p className="sponsor-contact-text">
                Questions? Contact us at{" "}
                <a
                  href="mailto:sponsors@genesis5.com"
                  className="sponsor-email"
                >
                  sponsors@genesis5.com
                </a>
              </p>
            </div>
          </div>

          {/* Placeholder for future sponsors grid - Hidden for now */}
          {/* 
          <div className="sponsors-grid" style={{ display: 'none' }}>
            <div className="sponsor-card">
              <img src="/sponsors/sponsor1.png" alt="Sponsor 1" />
            </div>
          </div>
          */}
        </div>
      </section>

      {/* FAQs Section */}
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

      {/* Footer - WITH DISCORD AND UNSTOP BUTTONS */}
      <footer className="relative bg-gradient-to-b from-[#0a0e27] to-black py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="flex flex-col items-center md:items-start">
              <img
                src={logo}
                alt="GDXR Logo"
                className="w-32 h-auto mb-4 cursor-pointer hover:scale-110 transition-transform"
                onClick={handleLogoClick}
              />
              <p
                className="text-gray-400 text-sm text-center md:text-left"
                style={{ fontFamily: "'Livvic', sans-serif" }}
              >
                Game Developers Club of VIT Bhopal
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center">
              <h3
                className="text-xl font-bold mb-4 text-yellow-400"
                style={{ fontFamily: "'Londrina Solid', sans-serif" }}
              >
                Quick Links
              </h3>
              <div className="flex flex-col gap-2">
                {[
                  "Home",
                  "About",
                  "Prizes",
                  "Memories",
                  "Sponsors",
                  "FAQs",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                    style={{ fontFamily: "'Livvic', sans-serif" }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Connect With Us */}
            <div className="flex flex-col items-center md:items-end">
              <h3
                className="text-xl font-bold mb-4 text-yellow-400"
                style={{ fontFamily: "'Londrina Solid', sans-serif" }}
              >
                Connect With Us
              </h3>

              {/* Contact Persons */}
              <div className="flex flex-col gap-3 mb-6 text-center md:text-right">
                <div className="flex flex-col">
                  <span
                    className="text-white font-semibold text-base"
                    style={{ fontFamily: "'Livvic', sans-serif" }}
                  >
                    Aradhna Kumari
                  </span>
                  <a
                    href="tel:+917050262224"
                    className="text-gray-400 hover:text-yellow-400 text-sm transition-colors"
                    style={{ fontFamily: "'Livvic', sans-serif" }}
                  >
                    +91 70502 62224
                  </a>
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-white font-semibold text-base"
                    style={{ fontFamily: "'Livvic', sans-serif" }}
                  >
                    Abhinav S
                  </span>
                  <a
                    href="tel:+919778052399"
                    className="text-gray-400 hover:text-yellow-400 text-sm transition-colors"
                    style={{ fontFamily: "'Livvic', sans-serif" }}
                  >
                    +91 97780 52399
                  </a>
                </div>
              </div>

              {/* Social Media Icons (Discord, Unstop, Instagram, LinkedIn) */}
              <div className="flex justify-center md:justify-end gap-5">
                {/* Discord Icon */}
                <a
                  href="https://discord.gg/m7ZGCa6N"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#5865F2] transition-colors transform hover:scale-110"
                  title="Join Discord"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>

                {/* Unstop Icon */}
                <a
                  href="https://unstop.com/o/iuvm4BM?lb=XXQIl8jQ&utm_medium=Share&utm_source=pankacha9021&utm_campaign=Online_coding_challenge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-500 transition-colors transform hover:scale-110"
                  title="Visit Unstop"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                  </svg>
                </a>

                {/* Instagram Icon */}
                <a
                  href="https://www.instagram.com/gdxr_ait/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors transform hover:scale-110"
                  title="Follow on Instagram"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
                  </svg>
                </a>

                {/* LinkedIn Icon */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110"
                  title="Connect on LinkedIn"
                >
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6 text-center">
            <p
              className="text-gray-500 text-sm"
              style={{ fontFamily: "'Livvic', sans-serif" }}
            >
              © 2025 GENESIS 5 - AR-VR Club AIT, Pune. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
