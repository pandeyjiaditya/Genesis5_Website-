import React from "react";

// Image assets
const heroImage =
  "https://www.figma.com/api/mcp/asset/f5385f31-fa9d-4762-aca6-dc1a5103b80a";
const aboutImage =
  "https://www.figma.com/api/mcp/asset/d417f6db-71dd-4bc8-b8ea-6b3c731bc4db";
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

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const [underlineStyle, setUnderlineStyle] = React.useState({
    left: 0,
    width: 0,
  });
  const [isVisible, setIsVisible] = React.useState({
    hero: false,
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
    // Trigger hero animation on mount
    setTimeout(() => {
      setIsVisible((prev) => ({ ...prev, hero: true }));
    }, 100);

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setIsVisible((prev) => ({ ...prev, [sectionId]: true }));
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = ["about", "prizes", "memories", "faqs"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Update active section based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "memories", "faqs"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    // Call once on mount
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update underline position
  React.useEffect(() => {
    const updateUnderline = () => {
      const activeRef = navRefs.current[activeSection];
      if (activeRef) {
        const { offsetLeft, offsetWidth } = activeRef;
        setUnderlineStyle({
          left: offsetLeft,
          width: offsetWidth,
        });
      }
    };

    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [activeSection]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-black z-50 animate-slideDown">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 flex items-center justify-between">
          <div className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            G<span className="text-red-600">DX</span>R
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-gray-800 rounded transition-colors"
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center relative">
            <div className="flex items-center gap-8 text-base font-medium">
              <button
                ref={(el) => (navRefs.current.home = el)}
                onClick={() => scrollToSection("home")}
                className={`relative py-2 px-1 hover:text-[#87c4ea] transition-colors ${
                  activeSection === "home" ? "text-white" : "text-gray-300"
                }`}
              >
                Home
              </button>
              <button
                ref={(el) => (navRefs.current.about = el)}
                onClick={() => scrollToSection("about")}
                className={`relative py-2 px-1 hover:text-[#87c4ea] transition-colors ${
                  activeSection === "about" ? "text-white" : "text-gray-300"
                }`}
              >
                About
              </button>
              <button
                ref={(el) => (navRefs.current.memories = el)}
                onClick={() => scrollToSection("memories")}
                className={`relative py-2 px-1 hover:text-[#87c4ea] transition-colors ${
                  activeSection === "memories" ? "text-white" : "text-gray-300"
                }`}
              >
                Memories
              </button>
              <button
                ref={(el) => (navRefs.current.faqs = el)}
                onClick={() => scrollToSection("faqs")}
                className={`relative py-2 px-1 hover:text-[#87c4ea] transition-colors ${
                  activeSection === "faqs" ? "text-white" : "text-gray-300"
                }`}
              >
                FAQs
              </button>
            </div>

            {/* Sliding Underline */}
            <div
              className="absolute bottom-0 h-[2px] transition-all duration-500 ease-out"
              style={{
                left: `${underlineStyle.left}px`,
                width: `${underlineStyle.width}px`,
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

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800 animate-slideDown">
            <div className="px-4 py-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className={`block w-full text-left px-4 py-2.5 text-base hover:bg-gray-900 rounded transition-all ${
                  activeSection === "home"
                    ? "bg-gray-900 border-l-4 border-[#87c4ea] text-white"
                    : "text-gray-300"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`block w-full text-left px-4 py-2.5 text-base hover:bg-gray-900 rounded transition-all ${
                  activeSection === "about"
                    ? "bg-gray-900 border-l-4 border-[#87c4ea] text-white"
                    : "text-gray-300"
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("memories")}
                className={`block w-full text-left px-4 py-2.5 text-base hover:bg-gray-900 rounded transition-all ${
                  activeSection === "memories"
                    ? "bg-gray-900 border-l-4 border-[#87c4ea] text-white"
                    : "text-gray-300"
                }`}
              >
                Memories
              </button>
              <button
                onClick={() => scrollToSection("faqs")}
                className={`block w-full text-left px-4 py-2.5 text-base hover:bg-gray-900 rounded transition-all ${
                  activeSection === "faqs"
                    ? "bg-gray-900 border-l-4 border-[#87c4ea] text-white"
                    : "text-gray-300"
                }`}
              >
                FAQs
              </button>
            </div>
          </div>
        )}

        <div className="h-[2px] bg-[#87c4ea]" />
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen pt-20 sm:pt-24 lg:pt-28 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto"
      >
        <div className="relative min-h-[600px] sm:min-h-[700px] lg:h-[900px]">
          {/* Background Image */}
          <div
            className={`absolute right-0 top-0 w-[200px] h-[280px] sm:w-[300px] sm:h-[420px] md:w-[400px] md:h-[560px] lg:w-[636px] lg:h-[889px] opacity-50 sm:opacity-75 lg:opacity-100 transition-all duration-1000 ${
              isVisible.hero
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <img
              src={heroImage}
              alt="Genesis mascot"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 pt-8 sm:pt-16 lg:pt-32">
            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center transition-all duration-1000 delay-300 ${
                isVisible.hero
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <h1
                className="text-6xl sm:text-8xl md:text-9xl lg:text-[150px] font-black leading-none"
                style={{ fontFamily: "'Londrina Solid', sans-serif" }}
              >
                GENESIS
              </h1>
              <span
                className="text-[120px] sm:text-[200px] md:text-[300px] lg:text-[400px] font-black leading-none sm:ml-4 lg:ml-8 text-[#87c4ea]"
                style={{ fontFamily: "'Londrina Solid', sans-serif" }}
              >
                5
              </span>
            </div>

            <p
              className={`text-base sm:text-xl md:text-2xl lg:text-[32px] mt-4 sm:mt-6 lg:mt-8 max-w-xl transition-all duration-1000 delay-500 ${
                isVisible.hero
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ fontFamily: "'Livvic', sans-serif" }}
            >
              REALITY CAN BE WHATEVER WE WANT
            </p>

            <button
              className={`mt-8 sm:mt-12 lg:mt-16 bg-[#0f79c4] text-white text-lg sm:text-2xl lg:text-4xl px-8 sm:px-12 lg:px-14 py-3 sm:py-4 lg:py-5 rounded-xl lg:rounded-2xl hover:bg-[#0d6aac] hover:scale-105 transition-all duration-300 delay-700 ${
                isVisible.hero
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ fontFamily: "'Cairo', sans-serif" }}
            >
              Register
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-[1440px] mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Image */}
          <div
            className={`w-full lg:w-[616px] flex-shrink-0 transition-all duration-1000 ${
              isVisible.about
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <img
              src={aboutImage}
              alt="Pokemon character"
              className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right Content */}
          <div
            className={`flex-1 lg:pt-12 transition-all duration-1000 delay-300 ${
              isVisible.about
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <h2
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[96px] font-black leading-tight mb-4 sm:mb-6 lg:mb-8"
              style={{ fontFamily: "'Londrina Solid', sans-serif" }}
            >
              ABOUT GENESIS
            </h2>

            <p
              className="text-base sm:text-xl md:text-2xl lg:text-[32px] leading-relaxed mb-6 sm:mb-8 lg:mb-12"
              style={{ fontFamily: "'Livvic', sans-serif" }}
            >
              Rev your engines and fasten your seat belts as the GDXR Club
              kick-starts the Fourth Edition of Genesis - your ticket to an
              adventure that hits closer to home than ever! Returning after the
              2024 Last Edition, this 2025 Genesis isn't just about pixels and
              coding; it's about bringing the spirit of games to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
              <div
                className="border border-[#87c4ea] rounded-2xl sm:rounded-3xl lg:rounded-[40px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300"
                style={{ fontFamily: "'Livvic', sans-serif" }}
              >
                <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px]">
                  Stage 1:
                  <br />
                  Online Game
                  <br />
                  Jam Round
                </p>
              </div>

              <div
                className="border border-[#87c4ea] rounded-2xl sm:rounded-3xl lg:rounded-[40px] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 hover:scale-105 transition-transform duration-300"
                style={{ fontFamily: "'Livvic', sans-serif" }}
              >
                <p className="text-lg sm:text-xl md:text-2xl lg:text-[32px]">
                  Stage 2: Offline
                  <br />
                  Surprise Element
                  <br />
                  Round
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prize Pool Section */}
      <section
        id="prizes"
        className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-[1440px] mx-auto"
      >
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible.prizes
              ? "translate-y-0 opacity-100"
              : "-translate-y-20 opacity-0"
          }`}
        >
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
          {/* Second Place */}
          <div
            className={`flex flex-col items-center order-2 sm:order-1 transition-all duration-1000 delay-300 ${
              isVisible.prizes
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full flex items-center justify-center mb-4 sm:mb-6 hover:scale-110 transition-transform duration-300">
                <img src={prize3Circle} alt="" className="w-full h-full" />
                <span
                  className="absolute text-5xl sm:text-6xl lg:text-[96px] font-black text-white"
                  style={{ fontFamily: "'Londrina Solid', sans-serif" }}
                >
                  2
                </span>
              </div>
            </div>
            <div className="bg-white border-[3px] sm:border-[4px] lg:border-[5px] border-[#5a9dd7] rounded-3xl sm:rounded-[40px] lg:rounded-[50px] w-[260px] sm:w-[300px] lg:w-[362px] h-[200px] sm:h-[240px] lg:h-[282px] flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <p
                className="text-5xl sm:text-6xl lg:text-[96px] font-black text-[#05427b]"
                style={{ fontFamily: "'Londrina Solid', sans-serif" }}
              >
                15k
              </p>
            </div>
          </div>

          {/* First Place */}
          <div
            className={`flex flex-col items-center order-1 sm:order-2 sm:-mt-8 lg:-mt-16 transition-all duration-1000 delay-500 ${
              isVisible.prizes
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-44 lg:h-44 rounded-full flex items-center justify-center mb-4 sm:mb-6 hover:scale-110 transition-transform duration-300">
                <img src={prize1Circle} alt="" className="w-full h-full" />
                <span
                  className="absolute text-5xl sm:text-6xl lg:text-[96px] font-black text-[#05427b]"
                  style={{ fontFamily: "'Londrina Solid', sans-serif" }}
                >
                  1
                </span>
              </div>
            </div>
            <div className="relative w-[300px] sm:w-[350px] lg:w-[417px] h-[230px] sm:h-[270px] lg:h-[319px] hover:scale-105 transition-transform duration-300">
              <img src={prize1Badge} alt="" className="w-full h-full" />
              <p
                className="absolute inset-0 flex items-center justify-center text-5xl sm:text-6xl lg:text-[96px] font-black text-white"
                style={{ fontFamily: "'Londrina Solid', sans-serif" }}
              >
                17.5K
              </p>
            </div>
          </div>

          {/* Third Place */}
          <div
            className={`flex flex-col items-center order-3 transition-all duration-1000 delay-700 ${
              isVisible.prizes
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full flex items-center justify-center mb-4 sm:mb-6 hover:scale-110 transition-transform duration-300">
                <img src={prize2Circle} alt="" className="w-full h-full" />
                <span
                  className="absolute text-5xl sm:text-6xl lg:text-[96px] font-black text-white"
                  style={{ fontFamily: "'Londrina Solid', sans-serif" }}
                >
                  3
                </span>
              </div>
            </div>
            <div className="bg-white border-[3px] sm:border-[4px] lg:border-[5px] border-[#5a9dd7] rounded-3xl sm:rounded-[40px] lg:rounded-[50px] w-[262px] sm:w-[302px] lg:w-[365px] h-[200px] sm:h-[238px] lg:h-[280px] flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <p
                className="text-5xl sm:text-6xl lg:text-[96px] font-black text-[#05427b]"
                style={{ fontFamily: "'Londrina Solid', sans-serif" }}
              >
                12.5K
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Memories Section */}
      <section
        id="memories"
        className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-[1440px] mx-auto"
      >
        <h2
          className={`text-4xl sm:text-6xl md:text-7xl lg:text-[96px] font-black text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible.memories
              ? "translate-y-0 opacity-100"
              : "-translate-y-20 opacity-0"
          }`}
          style={{ fontFamily: "'Londrina Solid', sans-serif" }}
        >
          MEMORIES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={item}
              className={`bg-[#d9d9d9] w-full h-[200px] sm:h-[220px] lg:h-[236px] rounded-lg hover:scale-105 transition-all duration-500 cursor-pointer ${
                isVisible.memories
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Placeholder for images */}
            </div>
          ))}
        </div>
      </section>

      {/* FAQS Section */}
      <section
        id="faqs"
        className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-[1440px] mx-auto"
      >
        <h2
          className={`text-4xl sm:text-6xl md:text-7xl lg:text-[96px] font-black text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible.faqs ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
          style={{ fontFamily: "'Londrina Solid', sans-serif" }}
        >
          FAQS
        </h2>
        <div
          className={`max-w-4xl mx-auto text-center text-lg sm:text-xl lg:text-2xl transition-all duration-1000 delay-300 ${
            isVisible.faqs
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <p>Coming soon...</p>
        </div>
      </section>
    </div>
  );
}

export default App;
