import { useState, useEffect } from "react";
import PlacesList from "../component/PlacesList";
import { useNavigate } from "react-router-dom";
import { Heart, ArrowLeft, Sparkles } from "lucide-react";

export default function FavoritesPage({ favorites, onSelectPlace }) {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

  // Load theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("moodmap_theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  return (
    <div className={`app-container ${theme}`} style={{
      minHeight: "100vh",
      background: theme === "dark" 
        ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
        : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      padding: "40px 20px"
    }}>
      {/* Top Bar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "40px",
        padding: "20px 30px",
        background: theme === "dark" ? "#1e293b" : "white",
        borderRadius: "20px",
        boxShadow: theme === "dark"
          ? "0 8px 30px rgba(0,0,0,0.4)"
          : "0 8px 30px rgba(0,0,0,0.08)",
        maxWidth: "1200px",
        margin: "0 auto 40px"
      }}>
        <h1 style={{ 
          cursor: "pointer",
          fontSize: "32px",
          fontWeight: "800",
          background: "linear-gradient(135deg, #5A639C 0%, #7776B3 50%, #9B86BD 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          margin: 0,
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }} onClick={() => navigate("/")}>
          MoodMap
          <span style={{ fontSize: "28px" }}></span>
        </h1>

        <button 
          onClick={() => navigate("/app")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 24px",
            borderRadius: "12px",
            border: "none",
            background: theme === "dark" 
              ? "linear-gradient(135deg, #334155 0%, #475569 100%)"
              : "linear-gradient(135deg, #5A639C 0%, #7776B3 100%)",
            color: "white",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "16px",
            transition: "all 0.3s",
            boxShadow: "0 4px 12px rgba(119, 118, 179, 0.3)"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 16px rgba(119, 118, 179, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(119, 118, 179, 0.3)";
          }}
        >
          <ArrowLeft size={20} />
          Back to App
        </button>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {/* Header Section */}
        <div style={{
          textAlign: "center",
          marginBottom: "50px"
        }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            background: theme === "dark"
              ? "linear-gradient(135deg, #334155 0%, #475569 100%)"
              : "linear-gradient(135deg, #5A639C 0%, #7776B3 100%)",
            padding: "16px 32px",
            borderRadius: "50px",
            marginBottom: "20px",
            boxShadow: theme === "dark"
              ? "0 8px 24px rgba(0,0,0,0.4)"
              : "0 8px 24px rgba(119, 118, 179, 0.3)"
          }}>
            <Heart size={28} fill="white" stroke="white" />
            <h2 style={{
              fontSize: "32px",
              fontWeight: "800",
              color: "white",
              margin: 0
            }}>
              Your Favorites
            </h2>
          </div>
          
          <p style={{
            fontSize: "18px",
            color: theme === "dark" ? "#94a3b8" : "#64748b",
            margin: "10px 0 0"
          }}>
            {favorites.length === 0 
              ? "Start adding places you love to see them here"
              : `You have ${favorites.length} favorite ${favorites.length === 1 ? 'place' : 'places'} saved`
            }
          </p>
        </div>

        {/* Empty State */}
        {favorites.length === 0 ? (
          <div style={{
            textAlign: "center",
            padding: "80px 40px",
            background: theme === "dark" ? "#1e293b" : "white",
            borderRadius: "24px",
            boxShadow: theme === "dark"
              ? "0 8px 30px rgba(0,0,0,0.4)"
              : "0 8px 30px rgba(0,0,0,0.08)",
            maxWidth: "600px",
            margin: "0 auto"
          }}>
            <div style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #5A639C 0%, #9B86BD 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 30px",
              boxShadow: "0 12px 30px rgba(119, 118, 179, 0.3)"
            }}>
              <Heart size={60} stroke="white" strokeWidth={2} />
            </div>

            <h3 style={{
              fontSize: "28px",
              fontWeight: "700",
              color: theme === "dark" ? "#f1f5f9" : "#1e293b",
              marginBottom: "16px"
            }}>
              No favorites yet
            </h3>

            <p style={{
              fontSize: "16px",
              lineHeight: "1.6",
              color: theme === "dark" ? "#94a3b8" : "#64748b",
              marginBottom: "30px",
              maxWidth: "400px",
              margin: "0 auto 30px"
            }}>
              Start exploring and tap the heart icon on places you love to save them here for quick access!
            </p>

            <button
              onClick={() => navigate("/app")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 32px",
                borderRadius: "50px",
                border: "none",
                background: "linear-gradient(135deg, #5A639C 0%, #7776B3 50%, #9B86BD 100%)",
                color: "white",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: "0 8px 20px rgba(119, 118, 179, 0.3)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(119, 118, 179, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(119, 118, 179, 0.3)";
              }}
            >
              <Sparkles size={22} />
              Start Exploring
            </button>
          </div>
        ) : (
          /* Favorites List */
          <div style={{
            background: theme === "dark" ? "#1e293b" : "white",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: theme === "dark"
              ? "0 8px 30px rgba(0,0,0,0.4)"
              : "0 8px 30px rgba(0,0,0,0.08)"
          }}>
            <PlacesList
              places={favorites}
              favorites={favorites}
              onSelectPlace={onSelectPlace}
            />
          </div>
        )}

        {/* Fun Stats Section */}
        {favorites.length > 0 && (
          <div style={{
            marginTop: "40px",
            padding: "30px",
            background: theme === "dark"
              ? "linear-gradient(135deg, #334155 0%, #475569 100%)"
              : "linear-gradient(135deg, #5A639C 0%, #7776B3 100%)",
            borderRadius: "20px",
            color: "white",
            textAlign: "center",
            boxShadow: "0 8px 24px rgba(119, 118, 179, 0.3)"
          }}>
            <h3 style={{
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "10px"
            }}>
              🎉 You're building a great collection!
            </h3>
            <p style={{
              fontSize: "16px",
              opacity: 0.9,
              margin: 0
            }}>
              Keep exploring to discover more amazing places
            </p>
          </div>
        )}
      </div>
    </div>
  );
}