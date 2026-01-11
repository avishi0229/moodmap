 {/* Search & Filters */}
export default function SearchPanel({
  theme,
  searchQuery,
  setSearchQuery,
  radius,
  setRadius
}) {
  return (
 <div style={{
        marginBottom: "20px",
        padding: "24px",
        background: theme === "dark" ? "#1e293b" : "white",
        borderRadius: "16px",
        boxShadow: theme === "dark"
          ? "0 4px 20px rgba(0,0,0,0.3)"
          : "0 4px 20px rgba(0,0,0,0.08)"
      }}>
        <input
          type="text"
          placeholder="🔍 What do you want to eat today?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            padding: "14px 18px",
            borderRadius: "12px",
            border: theme === "dark" ? "2px solid #334155" : "2px solid #e2e8f0",
            background: theme === "dark" ? "#0f172a" : "#f8fafc",
            color: theme === "dark" ? "#f1f5f9" : "#1e293b",
            fontSize: "16px",
            marginBottom: "20px",
            outline: "none",
            transition: "border 0.2s"
          }}
          onFocus={(e) => e.target.style.borderColor = "#7776B3"}
          onBlur={(e) => e.target.style.borderColor = theme === "dark" ? "#334155" : "#e2e8f0"}
        />

        <div style={{ marginBottom: "20px" }}>
          <label style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "600",
            color: theme === "dark" ? "#94a3b8" : "#64748b",
            marginBottom: "8px"
          }}>
            Search radius: <span style={{ 
              color: theme === "dark" ? "#f1f5f9" : "#1e293b",
              fontWeight: "700"
            }}>{(radius / 1000).toFixed(1)} km</span>
          </label>
          <input
            type="range"
            min="1000"
            max="10000"
            step="500"
            value={radius}
            onChange={(e) => setRadius(Number(e.target.value))}
            style={{ 
              width: "100%", 
              cursor: "pointer",
              accentColor: "#7776B3"
            }}
          />
        </div>
      </div>
       );
}