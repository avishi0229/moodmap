import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Map, Heart, Navigation, Zap, Moon, Sun } from "lucide-react";
import logo from "../assets/logo.png";

export default function HomePage() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

  // Load theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("moodmap_home_theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Save theme when it changes
  useEffect(() => {
    localStorage.setItem("moodmap_home_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const features = [
    {
      icon: <Search size={32} />,
      title: "Smart Mood-Based Search",
      description: "Find places that match your vibe - whether you're working, on a date, or grabbing a quick bite",
      gradient: "#a855f7, #ec4899"
    },
    {
      icon: <Map size={32} />,
      title: "Map + List View",
      description: "Visualize nearby spots on an interactive map or browse through a detailed list",
      gradient: "#3b82f6, #06b6d4"
    },
    {
      icon: <Heart size={32} />,
      title: "Save Favorites",
      description: "Bookmark your favorite places and access them anytime for quick revisits",
      gradient: "#ef4444, #f97316"
    },
    {
      icon: <Navigation size={32} />,
      title: "Direct Navigation",
      description: "One-tap Google Maps integration to get directions instantly",
      gradient: "#22c55e, #10b981"
    },
    {
      icon: <Zap size={32} />,
      title: "No Login Required",
      description: "Start exploring immediately - no signup, no hassle, just pure discovery",
      gradient: "#eab308, #f59e0b"
    }
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Navbar */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: theme === "dark" 
          ? "rgba(30, 30, 30, 0.9)" 
          : "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        borderBottom: theme === "dark"
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid rgba(255, 255, 255, 0.2)"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
          cursor: "pointer"
        }} onClick={() => navigate("/")}>
          <img 
            src={logo} 
            alt="MoodMap Logo" 
            style={{ 
              height: "70px",
              width: "auto",
              filter: theme === "dark" 
                ? "brightness(0) invert(1) drop-shadow(2px 2px 4px rgba(255,255,255,0.1))"
                : "drop-shadow(2px 2px 4px rgba(0,0,0,0.2))"
            }}
          />
          <span style={{
            fontSize: "24px",
            fontWeight: "800",
            color: "white",
            letterSpacing: "-0.5px"
          }}>
            MoodMap
          </span>
        </div>

        <div style={{
          display: "flex",
          gap: "30px",
          alignItems: "center"
        }}>
          <a href="#features" onClick={(e) => {
            e.preventDefault();
            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
          }} style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "16px",
            padding: "8px 16px",
            borderRadius: "8px",
            transition: "all 0.3s"
          }}>Features</a>

          <a href="#about" onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }} style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "16px",
            padding: "8px 16px",
            borderRadius: "8px",
            transition: "all 0.3s"
          }}>About</a>
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleTheme}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              border: "none",
              background: theme === "dark" ? "#334155" : "rgba(255, 255, 255, 0.2)",
              color: theme === "dark" ? "#fbbf24" : "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s"
            }}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button onClick={() => navigate("/app")} style={{
            background: "white",
            color: "#5A639C",
            padding: "10px 24px",
            borderRadius: "25px",
            fontWeight: "700",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            transition: "all 0.3s"
          }}>
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: "100vh",
        background: theme === "dark"
          ? "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)"
          : "linear-gradient(135deg, #5A639C 0%, #7776B3 35%, #9B86BD 70%, #E2BBE9 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 40px 60px",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s ease"
      }}>
        {/* Animated Background Bubbles */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            33% { transform: translateY(-30px) translateX(20px); }
            66% { transform: translateY(20px) translateX(-20px); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <div style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: theme === "dark" 
            ? "rgba(255, 255, 255, 0.05)" 
            : "rgba(255, 255, 255, 0.15)",
          top: "10%",
          left: "10%",
          animation: "float 20s infinite"
        }}></div>
        <div style={{
          position: "absolute",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: theme === "dark" 
            ? "rgba(255, 255, 255, 0.05)" 
            : "rgba(255, 255, 255, 0.15)",
          bottom: "20%",
          right: "15%",
          animation: "float 20s infinite 5s"
        }}></div>
        <div style={{
          position: "absolute",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: theme === "dark" 
            ? "rgba(255, 255, 255, 0.05)" 
            : "rgba(255, 255, 255, 0.15)",
          top: "60%",
          left: "5%",
          animation: "float 20s infinite 10s"
        }}></div>
        <div style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: theme === "dark" 
            ? "rgba(255, 255, 255, 0.05)" 
            : "rgba(255, 255, 255, 0.15)",
          top: "30%",
          right: "5%",
          animation: "float 20s infinite 7s"
        }}></div>
        <div style={{
          position: "absolute",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: theme === "dark" 
            ? "rgba(255, 255, 255, 0.05)" 
            : "rgba(255, 255, 255, 0.15)",
          bottom: "10%",
          left: "50%",
          animation: "float 20s infinite 12s"
        }}></div>

        <div style={{
          maxWidth: "900px",
          textAlign: "center",
          color: "white",
          position: "relative",
          zIndex: 1
        }}>
          <div style={{
            display: "inline-block",
            background: theme === "dark"
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(10px)",
            padding: "10px 24px",
            borderRadius: "30px",
            fontSize: "14px",
            fontWeight: "600",
            marginBottom: "30px",
            border: `1px solid ${theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.3)"}`
          }}>
            ✨ Discover Your Perfect Spot
          </div>

          <h1 style={{
            fontSize: "64px",
            fontWeight: "800",
            marginBottom: "24px",
            lineHeight: "1.2",
            textShadow: theme === "dark"
              ? "2px 4px 8px rgba(0,0,0,0.5)"
              : "2px 4px 8px rgba(0,0,0,0.15)",
            animation: "fadeInUp 0.8s ease-out"
          }}>
            Find the perfect place<br />for your mood
          </h1>

          <p style={{
            fontSize: "20px",
            lineHeight: "1.8",
            opacity: 0.95,
            marginBottom: "40px",
            animation: "fadeInUp 0.8s ease-out 0.2s",
            animationFillMode: "backwards"
          }}>
            Discover cafes, restaurants, and places around you based on your current vibe.
            Whether you're working, dating, or looking for a quick bite — we've got you covered.
          </p>

          <button
            onClick={() => navigate("/app")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "white",
              color: "#5A639C",
              padding: "18px 48px",
              borderRadius: "50px",
              fontSize: "20px",
              fontWeight: "700",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              transition: "all 0.3s",
              animation: "fadeInUp 0.8s ease-out 0.4s",
              animationFillMode: "backwards"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-5px) scale(1.05)";
              e.target.style.boxShadow = "0 15px 40px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
          >
            🚀 Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <div id="features" style={{
        padding: "60px 20px 80px",
        background: theme === "dark" ? "#0f172a" : "white",
        borderRadius: "40px 40px 0 0",
        marginTop: "-40px",
        transition: "background 0.3s ease"
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "36px",
          fontWeight: "700",
          marginBottom: "20px",
          background: "linear-gradient(135deg, #5A639C, #9B86BD)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}>
          Why MoodMap?
        </h2>

        <p style={{
          textAlign: "center",
          fontSize: "18px",
          color: theme === "dark" ? "#94a3b8" : "#6b7280",
          marginBottom: "60px",
          maxWidth: "600px",
          margin: "0 auto 60px"
        }}>
          Everything you need to discover amazing places, all in one beautiful app
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              style={{
                padding: "30px",
                borderRadius: "20px",
                background: theme === "dark" ? "#1e293b" : "white",
                boxShadow: theme === "dark"
                  ? "0 4px 20px rgba(0,0,0,0.3)"
                  : "0 4px 20px rgba(0,0,0,0.08)",
                transition: "transform 0.3s, box-shadow 0.3s, background 0.3s",
                cursor: "pointer",
                border: theme === "dark" ? "1px solid #334155" : "1px solid #f3f4f6"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = theme === "dark"
                  ? "0 12px 30px rgba(0,0,0,0.5)"
                  : "0 12px 30px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = theme === "dark"
                  ? "0 4px 20px rgba(0,0,0,0.3)"
                  : "0 4px 20px rgba(0,0,0,0.08)";
              }}
            >
              <div style={{
                width: "64px",
                height: "64px",
                borderRadius: "16px",
                background: `linear-gradient(135deg, ${feature.gradient})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                color: "white"
              }}>
                {feature.icon}
              </div>

              <h3 style={{
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "12px",
                color: theme === "dark" ? "#f1f5f9" : "#1f2937"
              }}>
                {feature.title}
              </h3>

              <p style={{
                fontSize: "15px",
                color: theme === "dark" ? "#94a3b8" : "#6b7280",
                lineHeight: "1.6"
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          marginTop: "80px",
          textAlign: "center",
          padding: "40px 20px",
          borderRadius: "20px",
          background: theme === "dark"
            ? "linear-gradient(135deg, #334155 0%, #475569 100%)"
            : "linear-gradient(135deg, #7776B3 0%, #9B86BD 100%)",
          color: "white",
          maxWidth: "800px",
          margin: "80px auto 0",
          transition: "background 0.3s ease"
        }}>
          <h3 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "16px" }}>
            Ready to discover your next favorite spot?
          </h3>
          <p style={{ fontSize: "16px", opacity: 0.9, marginBottom: "24px" }}>
            Join thousands of users finding perfect places for every mood
          </p>
          <button
            onClick={() => navigate("/app")}
            style={{
              padding: "14px 36px",
              fontSize: "18px",
              borderRadius: "50px",
              background: "white",
              color: "#5A639C",
              border: "none",
              cursor: "pointer",
              fontWeight: "700",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
            }}
          >
            Start Exploring Now →
          </button>
        </div>

        {/* About Section */}
        <div id="about" style={{
          marginTop: "100px",
          padding: "60px 40px",
          maxWidth: "1000px",
          margin: "100px auto 0"
        }}>
          <h2 style={{
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "24px",
            background: "linear-gradient(135deg, #5A639C, #9B86BD)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textAlign: "center"
          }}>
            About MoodMap
          </h2>

          <div style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: theme === "dark" ? "#cbd5e1" : "#4b5563"
          }}>
            <p style={{ marginBottom: "24px" }}>
              MoodMap is a smart, mood-based restaurant and cafe discovery web application that helps users find the perfect place to eat based on their situation — whether it's for work, a date, a quick bite, or a budget-friendly meal.
            </p>

            <p style={{ marginBottom: "24px" }}>
              The app uses real-time map data to search nearby places and shows them in both <strong>map view</strong> and <strong>list view</strong>. If no results are found for a specific mood, MoodMap automatically performs a smart fallback search to ensure users always get useful suggestions.
            </p>

            <p style={{ marginBottom: "24px" }}>
              Users can search and filter places, save their favorite locations, switch between light and dark mode, and view detailed information including distance and type of place. The app also remembers the last search using local storage for a better user experience.
            </p>

            <p style={{ marginBottom: "24px" }}>
              MoodMap is built using <strong>React</strong>, <strong>Vite</strong>, <strong>Leaflet</strong>, <strong>OpenStreetMap</strong>, and the <strong>Overpass API</strong>, with a focus on clean UI, performance, and real-world usability.
            </p>

            <div style={{
              marginTop: "40px",
              padding: "30px",
              borderRadius: "16px",
              background: theme === "dark" 
                ? "linear-gradient(135deg, #1e293b 0%, #334155 100%)"
                : "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
              border: theme === "dark" ? "1px solid #334155" : "1px solid #e2e8f0"
            }}>
              <p style={{ 
                fontSize: "16px",
                fontStyle: "italic",
                margin: 0,
                color: theme === "dark" ? "#94a3b8" : "#64748b"
              }}>
                This project was built by <strong style={{ color: theme === "dark" ? "#e2e8f0" : "#1e293b" }}>Avishi Verma</strong> as a personal project to practice frontend development, API integration, and building production-like user interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}