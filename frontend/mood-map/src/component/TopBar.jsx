import { Heart } from "lucide-react";

export default function TopBar({ theme, toggleTheme, navigate, sunIcon, moonIcon }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "30px",
      padding: "20px",
      background: theme === "dark" ? "#1e293b" : "white",
      borderRadius: "16px",
      boxShadow: theme === "dark"
        ? "0 4px 20px rgba(0,0,0,0.3)"
        : "0 4px 20px rgba(0,0,0,0.08)"
    }}>
      <h1 style={{
        fontSize: "28px",
        fontWeight: "800",
        background: "linear-gradient(135deg, #5A639C 0%, #7776B3 50%, #9B86BD 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        margin: 0,
        cursor: "pointer"
      }} onClick={() => navigate("/")}>
        MoodMap
      </h1>

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <button onClick={() => navigate("/favorites")} style={{
          padding: "10px 20px",
          borderRadius: "12px",
          border: "none",
          background: theme === "dark" ? "#334155" : "#f1f5f9",
          color: theme === "dark" ? "#f1f5f9" : "#1e293b",
          cursor: "pointer",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          transition: "all 0.2s"
        }}>
          <Heart size={18} fill="#ef4444" stroke="#ef4444" />
        </button>

        <button onClick={toggleTheme} style={{
          width: "44px",
          height: "44px",
          borderRadius: "12px",
          border: "none",
          background: theme === "dark" ? "#334155" : "#f1f5f9",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s"
        }}>
          <img
            src={theme === "dark" ? sunIcon : moonIcon}
            alt="toggle theme"
            style={{ width: "20px", height: "20px" }}
          />
        </button>
      </div>
    </div>
  );
}
