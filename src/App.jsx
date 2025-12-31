import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";
import { FadeInSection } from "./components/FadeInSection";
import PokemonBackground from "./components/PokemonBackground";
import DomeGallery from "./components/DomeGallery";

const aboutImage = "/character1.png";
const navPokemon = "/logo.png";
const logo = "/logo.png";

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
const togepi =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/175.png";
const charizard =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png";

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

const memorySlides = [
  [
    {
      id: 1,
      src: "https://picsum.photos/600/400?random=1",
      alt: "Genesis Memory 1",
    },
    {
      id: 2,
      src: "https://picsum.photos/600/400?random=2",
      alt: "Genesis Memory 2",
    },
    {
      id: 3,
      src: "https://picsum.photos/600/400?random=3",
      alt: "Genesis Memory 3",
    },
    {
      id: 4,
      src: "https://picsum.photos/600/400?random=4",
      alt: "Genesis Memory 4",
    },
    {
      id: 5,
      src: "https://picsum.photos/600/400?random=5",
      alt: "Genesis Memory 5",
    },
    {
      id: 6,
      src: "https://picsum.photos/600/400?random=6",
      alt: "Genesis Memory 6",
    },
  ],
  [
    {
      id: 7,
      src: "https://picsum.photos/600/400?random=7",
      alt: "Genesis Memory 7",
    },
    {
      id: 8,
      src: "https://picsum.photos/600/400?random=8",
      alt: "Genesis Memory 8",
    },
    {
      id: 9,
      src: "https://picsum.photos/600/400?random=9",
      alt: "Genesis Memory 9",
    },
    {
      id: 10,
      src: "https://picsum.photos/600/400?random=10",
      alt: "Genesis Memory 10",
    },
    {
      id: 11,
      src: "https://picsum.photos/600/400?random=11",
      alt: "Genesis Memory 11",
    },
    {
      id: 12,
      src: "https://picsum.photos/600/400?random=12",
      alt: "Genesis Memory 12",
    },
  ],
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [activeFaqCategory, setActiveFaqCategory] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState({ "0-0": true });
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const swiperRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const prizesRef = useRef(null);
  const memoriesRef = useRef(null);
  const faqsRef = useRef(null);

  // ADD THESE NEW AUDIO STATES
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef(null);

  // Loading Screen
  useEffect(() => {
    const duration = 3000;
    const interval = 30;
    let elapsed = 0;

    const progressInterval = setInterval(() => {
      elapsed += interval;
      const progress = Math.min((elapsed / duration) * 100, 100);
      setLoadingProgress(progress);

      if (elapsed >= duration) {
        clearInterval(progressInterval);
        setTimeout(() => setLoading(false), 300);
      }
    }, interval);

    return () => clearInterval(progressInterval);
  }, []);

  // Countdown Timer
  useEffect(() => {
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
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section detection for active nav link
  useEffect(() => {
    if (loading) return; // Don't observe while loading

    const sections = [
      { ref: homeRef, name: "home" },
      { ref: aboutRef, name: "about" },
      { ref: prizesRef, name: "prizes" },
      { ref: memoriesRef, name: "memories" },
      { ref: faqsRef, name: "faqs" },
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Top 20% of viewport triggers active state
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = sections.find((s) => s.ref.current === entry.target);
          if (section) {
            setActiveSection(section.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [loading]); // Add loading as dependency

  // AUTO-PLAY audio after loading - NO EVENT LISTENERS
  useEffect(() => {
    if (!loading && audioLoaded) {
      const timer = setTimeout(() => {
        if (audioRef.current) {
          // FORCE UNMUTE
          audioRef.current.muted = false;
          audioRef.current.volume = 0.3;

          // Try multiple times
          let attempts = 0;
          const tryPlay = () => {
            if (attempts >= 5) return; // Max 5 attempts

            audioRef.current
              .play()
              .then(() => {
                console.log("🎵 Pokemon music playing! Attempt:", attempts + 1);
                setAudioPlaying(true);
              })
              .catch((error) => {
                console.log(
                  `⚠️ Attempt ${attempts + 1} failed:`,
                  error.message
                );
                attempts++;
                setTimeout(tryPlay, 500); // Retry after 500ms
              });
          };

          tryPlay();
        }
      }, 800); // Start audio 800ms after loading completes

      return () => clearTimeout(timer);
    }
  }, [loading, audioLoaded]);

  // Audio toggle function
  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioPlaying) {
        audioRef.current.pause();
        setAudioPlaying(false);
        console.log("🔇 Audio paused");
      } else {
        audioRef.current
          .play()
          .then(() => {
            setAudioPlaying(true);
            console.log("🔊 Audio playing");
          })
          .catch((err) => console.error("Audio play error:", err));
      }
    }
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(
      "https://unstop.com/o/iuvm4BM?lb=XXQIl8jQ&utm_medium=Share&utm_source=pankacha9021&utm_campaign=Online_coding_challenge",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleRulebookClick = () => {
    window.open("/Genesis_5_Rulebook.pdf", "_blank", "noopener,noreferrer");
  };

  const toggleFaq = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenFaqIndex((prev) => ({
      ...Object.keys(prev).reduce((acc, k) => {
        if (k.startsWith(`${categoryIndex}-`) && k !== key) acc[k] = false;
        return acc;
      }, {}),
      [key]: !prev[key],
    }));
  };

  const handleCategoryChange = (index) => {
    setActiveFaqCategory(index);
    setOpenFaqIndex({ [`${index}-0`]: true });
  };

  // Smooth scroll to section
  const scrollToSection = (sectionRef, sectionName) => {
    if (sectionRef.current) {
      const yOffset = -80;
      const y =
        sectionRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      // Use smooth scroll with custom easing
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      // Update active section with slight delay for smooth transition
      setTimeout(() => {
        setActiveSection(sectionName);
      }, 100);

      setMobileMenuOpen(false);
    }
  };

  if (loading) {
    return (
      <div className="simple-loading-screen">
        <div className="loading-content">
          <img src={logo} alt="GDXR Logo" className="gdxr-logo-loading" />
          <h2 className="loading-text">Loading Genesis 5...</h2>
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
    <div className="relative min-h-screen">
      {/* AUDIO ELEMENT - Add this right after opening div */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        autoPlay
        muted={false}
        onLoadedData={() => {
          console.log("✅ Audio file loaded successfully!");
          setAudioLoaded(true);
        }}
        onError={(e) => {
          console.error("❌ Audio loading error:", e.target.error);
        }}
        onPlay={() => {
          console.log("🎵 Audio started playing!");
          setAudioPlaying(true);
        }}
        onPause={() => {
          console.log("⏸️ Audio paused!");
          setAudioPlaying(false);
        }}
      >
        {/* Your local audio file in public folder */}
        <source src="/pokemon_song.mp3" type="audio/mpeg" />
        {/* Fallback formats */}
        <source src="/pokemon_song.ogg" type="audio/ogg" />
        <source src="/pokemon_song.wav" type="audio/wav" />
      </audio>

      {/* AUDIO CONTROL BUTTON - Fixed position */}
      {!loading && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          onClick={toggleAudio}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label={audioPlaying ? "Mute audio" : "Play audio"}
          style={{
            border: "2px solid rgba(255, 215, 0, 0.5)",
          }}
        >
          {audioPlaying ? (
            // Volume On Icon
            <svg
              className="w-6 h-6 text-[#2d5016]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
            </svg>
          ) : (
            // Volume Off Icon
            <svg
              className="w-6 h-6 text-[#2d5016]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
              />
            </svg>
          )}

          {/* Tooltip */}
          <span className="absolute bottom-full mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {audioPlaying ? "Mute Music 🔇" : "Play Music 🔊"}
          </span>

          {/* Animated sound waves when playing */}
          {audioPlaying && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-yellow-400 pointer-events-none"
                animate={{
                  scale: [1, 1.4, 1.4],
                  opacity: [0.6, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-yellow-400 pointer-events-none"
                animate={{
                  scale: [1, 1.4, 1.4],
                  opacity: [0.6, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.7,
                }}
              />
            </>
          )}
        </motion.button>
      )}

      {/* POKEMON ANIMATED BACKGROUND */}
      <PokemonBackground />

      {/* NAVIGATION BAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          navScrolled ? "nav-scrolled" : ""
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="flex-shrink-0 cursor-pointer transform transition-transform duration-300 hover:scale-110"
              onClick={() => scrollToSection(homeRef, "home")}
            >
              <img src={logo} alt="GDXR Logo" className="h-12 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: "Home", ref: homeRef, id: "home" },
                { name: "About", ref: aboutRef, id: "about" },
                { name: "Prizes", ref: prizesRef, id: "prizes" },
                { name: "Memories", ref: memoriesRef, id: "memories" },
                { name: "FAQs", ref: faqsRef, id: "faqs" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref, item.id)}
                  className={`nav-link text-base font-semibold ${
                    activeSection === item.id ? "active" : ""
                  }`}
                  style={{ fontFamily: "'Cairo', sans-serif" }}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Register Button - Desktop */}
            <div className="hidden md:block">
              <button
                onClick={handleRulebookClick}
                className="register-button px-6 py-2.5 rounded-full font-bold transition-all duration-300"
                style={{ fontFamily: "'Livvic', sans-serif" }}
              >
                Rule Book
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 text-white transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-90 scale-110" : ""
                }`}
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
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu md:hidden transition-all duration-500 ease-out ${
            mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {[
              { name: "Home", ref: homeRef, id: "home" },
              { name: "About", ref: aboutRef, id: "about" },
              { name: "Prizes", ref: prizesRef, id: "prizes" },
              { name: "Memories", ref: memoriesRef, id: "memories" },
              { name: "FAQs", ref: faqsRef, id: "faqs" },
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.ref, item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-yellow-400 text-[#2d5016]"
                    : "text-white hover:bg-white/10"
                }`}
                style={{
                  fontFamily: "'Cairo', sans-serif",
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={handleRegisterClick}
              className="register-button w-full px-6 py-3 rounded-full font-bold transition-all duration-300"
              style={{ fontFamily: "'Livvic', sans-serif" }}
            >
              Register Now
            </button>
            <button
              onClick={handleRulebookClick}
              className="register-button w-full px-6 py-3 rounded-full font-bold transition-all duration-300"
              style={{ fontFamily: "'Livvic', sans-serif" }}
            >
              Rule Book
            </button>
          </div>
        </div>
      </nav>

      {/* HOME SECTION - GENESIS 5 Title NOT Animated */}
      <section
        ref={homeRef}
        id="home"
        className="relative min-h-screen pt-20 sm:pt-24 lg:pt-28 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto flex items-center overflow-hidden"
      >
        <div className="relative w-full">
          <div className="relative z-10">
            <div className="flex flex-col items-center justify-center">
              {/* GENESIS 5 - Image */}
              <div className="mb-6 sm:mb-8">
                <img
                  src="/assets/images/GENESIS 1.png"
                  alt="Genesis 5"
                  className="w-full max-w-4xl h-auto"
                />
              </div>
            </div>

            {/* Tagline - Animated */}
            <FadeInSection delay={0.2}>
              <div className="flex justify-center mb-6 sm:mb-8">
                <img
                  src="/assets/images/REALITY CAN BE WHATEVER WE WANT.png"
                  alt="Reality Can Be Whatever We Want"
                  className="w-full max-w-2xl h-auto px-4"
                />
              </div>
            </FadeInSection>

            {/* Register Button - Animated */}
            <FadeInSection delay={0.4}>
              <div className="flex justify-center items-center mb-8 sm:mb-12 lg:mb-16 px-4">
                <button
                  type="button"
                  onClick={handleRegisterClick}
                  className="hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer block w-full max-w-md relative"
                  style={{
                    WebkitTapHighlightColor: "transparent",
                    touchAction: "manipulation",
                    padding: "0",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    zIndex: 50,
                  }}
                  aria-label="Register Now"
                >
                  <img
                    src="/assets/Icons/Group 1.svg"
                    alt="Register Now"
                    className="w-full h-auto block pointer-events-none select-none"
                    draggable="false"
                    style={{ display: "block" }}
                  />
                </button>
              </div>
            </FadeInSection>

            {/* Countdown Timer - Animated */}
            <FadeInSection delay={0.6}>
              <div className="mt-16 sm:mt-20 lg:mt-24 relative z-10">
                <div
                  className="relative mx-auto"
                  style={{ maxWidth: "400px", height: "750px" }}
                >
                  {/* Pokedex Background */}
                  <div
                    className="absolute rounded-[35px] overflow-hidden"
                    style={{
                      left: "5%",
                      top: "10%",
                      width: "90%",
                      height: "80%",
                    }}
                  >
                    <img
                      src="https://www.figma.com/api/mcp/asset/429adbdc-9f4f-4922-b2ca-13563a48d7f6"
                      alt="Pokedex"
                      className="absolute max-w-none"
                      style={{
                        height: "121.28%",
                        left: "-35.87%",
                        top: "-7.53%",
                        width: "172.13%",
                      }}
                    />
                  </div>

                  {/* "Battle Begins in" Text */}
                  <img
                    src="https://www.figma.com/api/mcp/asset/e1736b56-4702-4a59-b828-c26ae26e8c5f"
                    alt="Battle Begins in"
                    className="absolute"
                    style={{
                      left: "50%",
                      top: "31%",
                      width: "364px",
                      height: "67.38px",
                      transform: "translateX(-50%)",
                    }}
                  />

                  {/* Countdown Values */}
                  <div
                    className="absolute text-5xl font-black"
                    style={{
                      fontFamily: "'Londrina Solid', sans-serif",
                      color: "#ff0000",
                      textShadow: "2px 2px 0 #0000ff, -2px -2px 0 #0000ff",
                      left: "23%",
                      top: "38%",
                    }}
                  >
                    {timeLeft.days}
                  </div>

                  <div
                    className="absolute text-5xl font-black"
                    style={{
                      fontFamily: "'Londrina Solid', sans-serif",
                      color: "#ff0000",
                      textShadow: "2px 2px 0 #0000ff, -2px -2px 0 #0000ff",
                      left: "57%",
                      top: "38%",
                    }}
                  >
                    {timeLeft.hours}
                  </div>

                  {/* Days Label */}
                  <img
                    src="https://www.figma.com/api/mcp/asset/fe3260af-522a-4be8-98ad-4b576e1bb17e"
                    alt="Days"
                    className="absolute"
                    style={{
                      left: "21%",
                      top: "47%",
                      width: "18%",
                      height: "auto",
                    }}
                  />

                  {/* Hours Label */}
                  <img
                    src="https://www.figma.com/api/mcp/asset/cae840c9-341b-430c-8896-81447ab4c5a2"
                    alt="Hours"
                    className="absolute"
                    style={{
                      left: "55%",
                      top: "47%",
                      width: "18%",
                      height: "auto",
                    }}
                  />

                  <div
                    className="absolute text-5xl font-black"
                    style={{
                      fontFamily: "'Londrina Solid', sans-serif",
                      color: "#ff0000",
                      textShadow: "2px 2px 0 #0000ff, -2px -2px 0 #0000ff",
                      left: "23%",
                      top: "55%",
                    }}
                  >
                    {timeLeft.minutes}
                  </div>

                  <div
                    className="absolute text-5xl font-black"
                    style={{
                      fontFamily: "'Londrina Solid', sans-serif",
                      color: "#ff0000",
                      textShadow: "2px 2px 0 #0000ff, -2px -2px 0 #0000ff",
                      left: "57%",
                      top: "55%",
                    }}
                  >
                    {timeLeft.seconds}
                  </div>

                  {/* Minutes Label */}
                  <img
                    src="https://www.figma.com/api/mcp/asset/345afea7-cebd-4f1a-9c6c-b9c831741062"
                    alt="Minutes"
                    className="absolute"
                    style={{
                      left: "21%",
                      top: "64%",
                      width: "18%",
                      height: "auto",
                    }}
                  />

                  {/* Seconds Label */}
                  <img
                    src="https://www.figma.com/api/mcp/asset/5b186418-1435-4738-9e9f-7a88595ccea2"
                    alt="Seconds"
                    className="absolute"
                    style={{
                      left: "55%",
                      top: "64%",
                      width: "18%",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            </FadeInSection>
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

      {/* ABOUT SECTION */}
      <section
        ref={aboutRef}
        id="about"
        className="relative min-h-screen pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <FadeInSection delay={0.2} yOffset={60}>
            <div className="flex justify-center lg:justify-start">
              <img
                src={aboutImage}
                alt="Genesis Character"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl"
                style={{
                  filter: "drop-shadow(0 10px 40px rgba(255, 203, 5, 0.3))",
                }}
              />
            </div>
          </FadeInSection>

          <div>
            <FadeInSection delay={0.4}>
              <img
                src="/assets/images/About Genesis.png"
                alt="About Genesis"
                className="w-full max-w-2xl mx-auto mb-6"
              />
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <div className="relative mx-auto max-w-4xl mb-6">
                <div
                  className="relative bg-[#ffcc01] rounded-[88px] p-8 sm:p-12 shadow-[44px_32px_4px_0px_rgba(0,0,0,0.25)]"
                  style={{
                    border: "11px solid #3760ab",
                  }}
                >
                  <p
                    className="text-[#113871] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-normal text-justify"
                    style={{
                      fontFamily: "'Ravi Prakash', cursive",
                    }}
                  >
                    Rev your engines and fasten your seat belts as the GDXR Club
                    kick-starts the Fifth Edition of Genesis — your ticket to an
                    adventure that hits closer to home than ever! Returning
                    after the 2024 Last Edition, this 2025 Genesis isn't just
                    about pixels and coding; it's about bringing the spirit of
                    games to life.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.8}>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/10 border-2 border-blue-400/30 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-4xl font-black text-yellow-400"
                      style={{ fontFamily: "'Londrina Solid', sans-serif" }}
                    >
                      01
                    </span>
                    <div>
                      <h3
                        className="text-xl font-bold mb-1"
                        style={{ fontFamily: "'Cairo', sans-serif" }}
                      >
                        Online Game Jam
                      </h3>
                      <p
                        className="text-sm text-blue-300"
                        style={{ fontFamily: "'Livvic', sans-serif" }}
                      >
                        Build your game remotely with your team
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/10 border-2 border-blue-400/30 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <span
                      className="text-4xl font-black text-yellow-400"
                      style={{ fontFamily: "'Londrina Solid', sans-serif" }}
                    >
                      02
                    </span>
                    <div>
                      <h3
                        className="text-xl font-bold mb-1"
                        style={{ fontFamily: "'Cairo', sans-serif" }}
                      >
                        Offline Surprise Round
                      </h3>
                      <p
                        className="text-sm text-blue-300"
                        style={{ fontFamily: "'Livvic', sans-serif" }}
                      >
                        Experience the thrill of in-person competition
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* PRIZES SECTION */}
      <section
        ref={prizesRef}
        id="prizes"
        className="relative pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-[1440px] mx-auto">
          <FadeInSection delay={0.2}>
            <h2
              className="text-center text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-4"
              style={{
                fontFamily: "'Londrina Solid', sans-serif",
                background:
                  "linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Prize Pool
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.4}>
            <p
              className="text-center text-3xl sm:text-4xl lg:text-5xl mb-12"
              style={{
                fontFamily: "'Mea Culpa', cursive",
                color: "#87c4ea",
                fontStyle: "italic",
              }}
            >
              + Exclusive Goodies & Merch
            </p>
          </FadeInSection>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mt-12">
            {/* 2nd Place */}
            <FadeInSection delay={0.6} yOffset={80}>
              <div className="prize-box relative bg-white/95 border-4 border-[#5a9dd7] rounded-3xl p-8 min-w-[280px] text-center shadow-2xl">
                <div
                  className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-3xl font-black text-white shadow-lg"
                  style={{ fontFamily: "'Londrina Solid', sans-serif" }}
                >
                  2nd
                </div>
                <div className="mt-12">
                  <div
                    className="prize-amount text-6xl font-black mb-2"
                    style={{
                      fontFamily: "'Londrina Solid', sans-serif",
                      color: "#05427b",
                    }}
                  >
                    ₹15,000
                  </div>
                  <div
                    className="text-lg font-semibold uppercase tracking-wider"
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                      color: "#0652ba",
                    }}
                  >
                    Runner Up
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* 1st Place */}
            <FadeInSection delay={0.8} yOffset={80}>
              <div className="prize-box relative bg-white/95 border-4 border-[#5a9dd7] rounded-2xl p-10 min-w-[320px] text-center shadow-2xl lg:scale-110">
                <div className="prize-circle-bg prize-circle-gold"></div>
                <div
                  className="winner-badge absolute -top-20 left-1/2 transform -translate-x-1/2 w-28 h-28 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-4xl font-black text-white shadow-2xl"
                  style={{ fontFamily: "'Londrina Solid', sans-serif" }}
                >
                  1st
                </div>
                <div className="mt-16">
                  <div
                    className="prize-amount text-7xl font-black mb-2"
                    style={{
                      fontFamily: "'Londrina Solid', sans-serif",
                      color: "#05427b",
                    }}
                  >
                    ₹17,500
                  </div>
                  <div
                    className="text-xl font-bold uppercase tracking-wider"
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                      color: "#0652ba",
                    }}
                  >
                    Champion
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* 3rd Place */}
            <FadeInSection delay={1.0} yOffset={80}>
              <div className="prize-box relative bg-white/95 border-4 border-[#5a9dd7] rounded-2xl p-8 min-w-[280px] text-center shadow-2xl">
                <div
                  className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center text-3xl font-black text-white shadow-lg"
                  style={{ fontFamily: "'Londrina Solid', sans-serif" }}
                >
                  3rd
                </div>
                <div className="mt-12">
                  <div
                    className="prize-amount text-6xl font-black mb-2"
                    style={{
                      fontFamily: "'Londrina Solid', sans-serif",
                      color: "#05427b",
                    }}
                  >
                    ₹12,500
                  </div>
                  <div
                    className="text-lg font-semibold uppercase tracking-wider"
                    style={{
                      fontFamily: "'Cairo', sans-serif",
                      color: "#0652ba",
                    }}
                  >
                    2nd Runner Up
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* MEMORIES SECTION */}
      <section
        ref={memoriesRef}
        id="memories"
        className="relative pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20"
        style={{ minHeight: "100vh" }}
      >
        {/* Memories Heading */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4">
          <img
            src="/assets/images/MEMORIES.png"
            alt="Memories"
            className="w-full max-w-2xl h-auto"
          />
        </div>

        <div style={{ width: "100%", height: "80vh", position: "relative" }}>
          <DomeGallery
            images={[
              { src: "/1.jpg", alt: "Opening Ceremony - Genesis 4" },
              { src: "/2.jpg", alt: "Hackathon in Action" },
              { src: "/3.jpg", alt: "Winner Team Celebration" },
              { src: "/4.jpg", alt: "Mentor Sessions" },
              { src: "/5.jpg", alt: "Closing Ceremony" },
              { src: "/6.jpg", alt: "Team Collaboration" },
              { src: "/7.jpg", alt: "Prize Distribution" },
              { src: "/8.jpg", alt: "Gaming Setup" },
              { src: "/9.jpg", alt: "Participants Group Photo" },
              { src: "/10.jpg", alt: "Innovation Showcase" },
              { src: "/11.jpg", alt: "Innovation Showcase" },
              { src: "/12.jpg", alt: "Innovation Showcase" },
              { src: "/14.jpg", alt: "Innovation Showcase" },
              { src: "/18.jpg", alt: "Innovation Showcase" },
              { src: "/19.jpg", alt: "Innovation Showcase" },
              { src: "/22.jpg", alt: "Innovation Showcase" },
            ]}
            fit={0.75}
            minRadius={900}
            segments={24}
            dragDampening={1.8}
            grayscale={false}
          />
        </div>
      </section>

      {/* FAQS SECTION */}
      <section
        ref={faqsRef}
        id="faqs"
        className="relative pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto"
      >
        <FadeInSection delay={0.2}>
          <h2
            className="text-center text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-12"
            style={{
              fontFamily: "'Londrina Solid', sans-serif",
              background:
                "linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            FAQs
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {faqData.map((category, idx) => (
              <button
                key={idx}
                onClick={() => handleCategoryChange(idx)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFaqCategory === idx
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                    : "bg-blue-900/30 text-blue-300 border-2 border-blue-400/30 hover:border-blue-400/50"
                }`}
                style={{ fontFamily: "'Cairo', sans-serif" }}
              >
                {category.category}
              </button>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection delay={0.6}>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqData[activeFaqCategory].questions.map((item, qIdx) => {
              const key = `${activeFaqCategory}-${qIdx}`;
              const isOpen = openFaqIndex[key];
              return (
                <motion.div
                  key={qIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: qIdx * 0.1,
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border-2 border-blue-400/30 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/20"
                >
                  <button
                    onClick={() => toggleFaq(activeFaqCategory, qIdx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span
                      className="text-lg font-semibold pr-4"
                      style={{ fontFamily: "'Cairo', sans-serif" }}
                    >
                      {item.q}
                    </span>
                    <motion.svg
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="w-6 h-6 text-blue-300 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{
                      height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                      opacity: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p
                        className="text-blue-200 leading-relaxed"
                        style={{ fontFamily: "'Livvic', sans-serif" }}
                      >
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </FadeInSection>
      </section>

      {/* FOOTER SECTION - Contact Us */}
      <FadeInSection>
        <footer className="relative bg-black py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1440px] mx-auto relative">
            {/* Pokeball with Bulbasaur - Left Side */}
            <div className="absolute left-0 top-0 w-64 h-64 hidden lg:block">
              <img
                src={bulbasaur}
                alt="Bulbasaur"
                className="w-full h-full object-contain"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(74, 222, 128, 0.5))",
                }}
              />
            </div>

            {/* Contact Us Title */}
            <div className="text-center mb-12">
              <h2
                className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8"
                style={{
                  fontFamily: "'Ravi Prakash', cursive",
                  color: "#f7d30c",
                  textShadow: "0 0 20px rgba(247, 211, 12, 0.5)",
                }}
              >
                Contact Us
              </h2>
            </div>

            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Contact Person 1 - Abhinav S */}
              <div className="text-center lg:text-left space-y-4">
                <h3
                  className="text-3xl sm:text-4xl font-bold"
                  style={{
                    fontFamily: "'Ravi Prakash', cursive",
                    color: "#5ba3d0",
                    textShadow: "0 0 15px rgba(91, 163, 208, 0.5)",
                  }}
                >
                  Abhinav S
                </h3>
                <p
                  className="text-2xl sm:text-3xl font-bold"
                  style={{
                    fontFamily: "'Ravi Prakash', cursive",
                    color: "#f3cf1d",
                  }}
                >
                  +91 9778052399
                </p>
              </div>

              {/* Contact Person 2 - Aradhna Kumar */}
              <div className="text-center lg:text-left space-y-4">
                <h3
                  className="text-3xl sm:text-4xl font-bold"
                  style={{
                    fontFamily: "'Ravi Prakash', cursive",
                    color: "#5ba3d0",
                    textShadow: "0 0 15px rgba(91, 163, 208, 0.5)",
                  }}
                >
                  Aradhna Kumar
                </h3>
                <p
                  className="text-2xl sm:text-3xl font-bold"
                  style={{
                    fontFamily: "'Ravi Prakash', cursive",
                    color: "#f7d30c",
                  }}
                >
                  +91 70502 62224
                </p>
              </div>

              {/* Venue Section */}
              <div className="text-center lg:text-right space-y-4">
                <h3
                  className="text-3xl sm:text-4xl font-bold mb-6"
                  style={{
                    fontFamily: "'Ravi Prakash', cursive",
                    color: "#f7d30c",
                    textShadow: "0 0 15px rgba(247, 211, 12, 0.5)",
                  }}
                >
                  Venue
                </h3>
                {/* Map Placeholder */}
                <div className="w-full h-48 bg-gray-300 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8269437514286!2d73.8527619!3d18.5945811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1b8d1234567%3A0x1234567890abcdef!2sArmy%20Institute%20of%20Technology%2C%20Pune!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8 mt-16">
              <p
                className="text-gray-400 text-sm text-center"
                style={{ fontFamily: "'Livvic', sans-serif" }}
              >
                © {new Date().getFullYear()} AR-VR Club AIT, Pune. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </FadeInSection>

      {/* Floating Pokémon - Add this div inside the main return */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.img
          src={pikachu}
          alt=""
          className="absolute w-20 h-20 opacity-20"
          style={{ top: "10%", right: "10%" }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src={eevee}
          alt=""
          className="absolute w-24 h-24 opacity-20"
          style={{ bottom: "20%", left: "5%" }}
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
