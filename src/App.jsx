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
import MemoriesGallery from "./components/MemoriesGallery";

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

  const handleRegisterClick = () => {
    window.open(
      "https://unstop.com/o/iuvm4BM?lb=XXQIl8jQ&utm_medium=Share&utm_source=pankacha9021&utm_campaign=Online_coding_challenge",
      "_blank",
      "noopener,noreferrer"
    );
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
                onClick={handleRegisterClick}
                className="register-button px-6 py-2.5 rounded-full font-bold transition-all duration-300"
                style={{ fontFamily: "'Livvic', sans-serif" }}
              >
                Register Now
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
              {/* GENESIS 5 - NOT WRAPPED - KEEP AS IS */}
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

            {/* Tagline - Animated */}
            <FadeInSection delay={0.2}>
              <p
                className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] mb-6 sm:mb-8 max-w-2xl text-center mx-auto px-4"
                style={{ fontFamily: "'Livvic', sans-serif", color: "#87c4ea" }}
              >
                REALITY CAN BE WHATEVER WE WANT
              </p>
            </FadeInSection>

            {/* Register Button - Animated */}
            <FadeInSection delay={0.4}>
              <div className="flex justify-center items-center mb-8 sm:mb-12 lg:mb-16 px-4">
                <button
                  onClick={handleRegisterClick}
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black px-8 sm:px-12 lg:px-16 py-4 sm:py-5 rounded-full text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,203,5,0.5)] hover:shadow-[0_0_50px_rgba(255,203,5,0.8)]"
                  style={{ fontFamily: "'Livvic', sans-serif" }}
                >
                  <span className="relative z-10">Register Now</span>
                </button>
              </div>
            </FadeInSection>

            {/* Countdown Timer - Animated */}
            <FadeInSection delay={0.6}>
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
      <FadeInSection>
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
                <h2
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6"
                  style={{
                    fontFamily: "'Londrina Solid', sans-serif",
                    background:
                      "linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffd700 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  About Genesis
                </h2>
              </FadeInSection>

              <FadeInSection delay={0.6}>
                <p
                  className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6"
                  style={{
                    fontFamily: "'Livvic', sans-serif",
                    color: "#87c4ea",
                  }}
                >
                  Rev your engines and fasten your seat belts as the GDXR Club
                  kick-starts the Fifth Edition of Genesis — your ticket to an
                  adventure that hits closer to home than ever!
                </p>
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
      </FadeInSection>

      {/* PRIZES SECTION */}
      <FadeInSection>
        <section
          ref={prizesRef}
          id="prizes"
          className="relative min-h-screen pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8"
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
      </FadeInSection>

      {/* MEMORIES SECTION - NEW 3D GALLERY */}
      <FadeInSection>
        <section
          ref={memoriesRef}
          id="memories"
          className="relative min-h-screen pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20"
        >
          <MemoriesGallery
            images={[
              {
                src: "/public/memories/1.jpg",
                alt: "Opening Ceremony - Genesis 4",
              },
              { src: "/public/memories/2.jpg", alt: "Hackathon in Action" },
              {
                src: "/public/memories/3.jpg",
                alt: "Winner Team Celebration",
              },
              { src: "/public/memories/4.jpg", alt: "Mentor Sessions" },
              { src: "/public/memories/5.jpg", alt: "Closing Ceremony" },
              { src: "/public/memories/6.jpg", alt: "Team Collaboration" },
              { src: "/public/memories/7.jpg", alt: "Prize Distribution" },
              { src: "/public/memories/8.jpg", alt: "Gaming Setup" },
              {
                src: "/public/memories/9.jpg",
                alt: "Participants Group Photo",
              },
              { src: "/public/memories/10.jpg", alt: "Innovation Showcase" },
              { src: "/public/memories/11.jpg", alt: "Innovation Showcase" },
              { src: "/public/memories/12.jpg", alt: "Innovation Showcase" },
              { src: "/public/memories/14.jpg", alt: "Innovation Showcase" },
              { src: "/public/memories/18.jpg", alt: "Innovation Showcase" },
              { src: "/public/memories/19.jpg", alt: "Innovation Showcase" },
              { src: "/public/memories/22.jpg", alt: "Innovation Showcase" },
            ]}
            title="Genesis 4 Memories"
            subtitle="Relive the epic moments from our last adventure"
          />
        </section>
      </FadeInSection>

      {/* FAQS SECTION */}
      <FadeInSection>
        <section
          id="faqs"
          className="relative min-h-screen pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto"
          ref={faqsRef}
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
      </FadeInSection>

      {/* FOOTER SECTION - Add at the end, after all sections */}
      <FadeInSection>
        <footer className="relative bg-gradient-to-b from-[#0a0e27] to-black py-16 px-4 sm:px-6 lg:px-8 border-t border-blue-400/20">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              {/* About Column */}
              <div>
                <img src={logo} alt="GDXR Logo" className="h-16 w-auto mb-4" />
                <p
                  className="text-blue-200 text-sm leading-relaxed"
                  style={{ fontFamily: "'Livvic', sans-serif" }}
                >
                  AR-VR Club AIT Pune presents Genesis 5 - The ultimate game
                  development hackathon.
                </p>
                <div className="mt-6 flex space-x-4">
                  {/* Social Media Links */}
                  <a
                    href="https://www.instagram.com/gdxr_ait/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
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
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://discord.gg/gdxr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all duration-300"
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

              {/* Quick Links */}
              <div>
                <h3
                  className="text-xl font-bold mb-4 text-yellow-400"
                  style={{ fontFamily: "'Londrina Solid', sans-serif" }}
                >
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: "Home", ref: homeRef, id: "home" },
                    { name: "About", ref: aboutRef, id: "about" },
                    { name: "Prizes", ref: prizesRef, id: "prizes" },
                    { name: "Memories", ref: memoriesRef, id: "memories" },
                    { name: "FAQs", ref: faqsRef, id: "faqs" },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.ref, item.id)}
                        className="text-blue-200 hover:text-yellow-400 transition-colors duration-300 text-sm"
                        style={{ fontFamily: "'Livvic', sans-serif" }}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3
                  className="text-xl font-bold mb-4 text-yellow-400"
                  style={{ fontFamily: "'Londrina Solid', sans-serif" }}
                >
                  Contact Us
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:gdxr@vitbhopal.ac.in"
                      className="text-blue-200 hover:text-yellow-400 transition-colors"
                      style={{ fontFamily: "'Livvic', sans-serif" }}
                    >
                      gdxr@aitpune.in
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span
                      className="text-blue-200"
                      style={{ fontFamily: "'Livvic', sans-serif" }}
                    >
                      Army Institute Of Technology,
                      <br />
                      Dighi Hills,
                      <br />
                      Pune-411015
                    </span>
                  </li>
                </ul>
              </div>

              {/* Event Info */}
              <div>
                <h3
                  className="text-xl font-bold mb-4 text-yellow-400"
                  style={{ fontFamily: "'Londrina Solid', sans-serif" }}
                >
                  Event Details
                </h3>
                <ul
                  className="space-y-3 text-sm text-blue-200"
                  style={{ fontFamily: "'Livvic', sans-serif" }}
                >
                  <li>📅 Date: 14th Feb 2026</li>
                  <li>🎮 Format: Hybrid (Online + Offline)</li>
                  <li>💰 Prize Pool: ₹45,000+</li>
                  <li>🎯 Theme: To be announced</li>
                  <li>⏰ Duration: 48 hours</li>
                </ul>
              </div>
            </div>

            {/* Decorative Pokemon */}
            <div className="relative">
              <img
                src={eevee}
                alt=""
                className="absolute -top-20 left-10 w-20 h-20 opacity-30 animate-bounce hidden lg:block"
              />
              <img
                src={bulbasaur}
                alt=""
                className="absolute -top-16 right-10 w-24 h-24 opacity-30 animate-pulse hidden lg:block"
              />
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-blue-400/20 pt-8 mt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p
                  className="text-blue-300 text-sm text-center md:text-left"
                  style={{ fontFamily: "'Livvic', sans-serif" }}
                >
                  © {new Date().getFullYear()} AR-VR Club AIT, Pune. All rights
                  reserved.
                </p>
                <div className="flex gap-6 text-sm">
                  <button
                    className="text-blue-300 hover:text-yellow-400 transition-colors"
                    style={{ fontFamily: "'Livvic', sans-serif" }}
                  >
                    Privacy Policy
                  </button>
                  <button
                    className="text-blue-300 hover:text-yellow-400 transition-colors"
                    style={{ fontFamily: "'Livvic', sans-serif" }}
                  >
                    Terms of Service
                  </button>
                  <button
                    className="text-blue-300 hover:text-yellow-400 transition-colors"
                    style={{ fontFamily: "'Livvic', sans-serif" }}
                  >
                    Code of Conduct
                  </button>
                </div>
              </div>
              <p
                className="text-blue-400 text-xs text-center mt-4"
                style={{ fontFamily: "'Livvic', sans-serif" }}
              >
                Made with ❤️ by GDXR Web Team | Powered by AIT Pune
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
