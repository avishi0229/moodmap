export default function ViewToggle({ theme, viewMode, setViewMode }) {
  return (
    <div style={{
      display: "flex",
      gap: "12px",
      marginBottom: "20px",
      padding: "4px",
      background: theme === "dark" ? "#1e293b" : "#f1f5f9",
      borderRadius: "12px",
      boxShadow: theme === "dark"
        ? "0 2px 10px rgba(0,0,0,0.3)"
        : "0 2px 10px rgba(0,0,0,0.05)"
    }}>
      <button
        onClick={() => setViewMode("map")}
        style={{
          flex: 1,
          padding: "12px 20px",
          borderRadius: "10px",
          border: "none",
          background: viewMode === "map"
            ? "linear-gradient(135deg, #5A639C 0%, #7776B3 50%, #9B86BD 100%)"
            : "transparent",
          color: viewMode === "map"
            ? "white"
            : theme === "dark" ? "#94a3b8" : "#64748b",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "15px",
          transition: "all 0.3s",
          boxShadow: viewMode === "map"
            ? "0 4px 12px rgba(119, 118, 179, 0.4)"
            : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px"
        }}
        onMouseEnter={(e) => {
          if (viewMode !== "map") {
            e.currentTarget.style.background = theme === "dark" ? "#0f172a" : "#e2e8f0";
          }
        }}
        onMouseLeave={(e) => {
          if (viewMode !== "map") {
            e.currentTarget.style.background = "transparent";
          }
        }}
      >
        🗺️ Map View
      </button>

      <button
        onClick={() => setViewMode("list")}
        style={{
          flex: 1,
          padding: "12px 20px",
          borderRadius: "10px",
          border: "none",
          background: viewMode === "list"
            ? "linear-gradient(135deg, #5A639C 0%, #7776B3 50%, #9B86BD 100%)"
            : "transparent",
          color: viewMode === "list"
            ? "white"
            : theme === "dark" ? "#94a3b8" : "#64748b",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "15px",
          transition: "all 0.3s",
          boxShadow: viewMode === "list"
            ? "0 4px 12px rgba(119, 118, 179, 0.4)"
            : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px"
        }}
        onMouseEnter={(e) => {
          if (viewMode !== "list") {
            e.currentTarget.style.background = theme === "dark" ? "#0f172a" : "#e2e8f0";
          }
        }}
        onMouseLeave={(e) => {
          if (viewMode !== "list") {
            e.currentTarget.style.background = "transparent";
          }
        }}
      >
        📋 List View
      </button>
    </div>
  );
}
