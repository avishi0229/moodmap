
import { Monitor, Heart, Zap, DollarSign } from "lucide-react";

export default function MoodSelector({ selectedMood, onSelect, theme }) {
  const moods = [
    {
      id: "work",
      label: "Work",
      icon: <Monitor size={32} />,
      color: "#3b82f6",
      description: "Quiet cafes with WiFi"
    },
    {
      id: "date",
      label: "Date",
      icon: <Heart size={32} />,
      color: "#ec4899",
      description: "Romantic ambiance"
    },
    {
      id: "quick",
      label: "Quick Bite",
      icon: <Zap size={32} />,
      color: "#f59e0b",
      description: "Fast & convenient"
    },
    {
      id: "budget",
      label: "Budget",
      icon: <DollarSign size={32} />,
      color: "#10b981",
      description: "Affordable options"
    }
  ];

  return (
    <div style={{
      marginBottom: "30px",
      padding: "30px",
      background: theme === "dark" ? "#1e293b" : "white",
      borderRadius: "16px",
      boxShadow: theme === "dark" 
        ? "0 4px 20px rgba(0,0,0,0.3)"
        : "0 4px 20px rgba(0,0,0,0.08)"
    }}>
      <h2 style={{
        fontSize: "22px",
        fontWeight: "700",
        marginBottom: "20px",
        color: theme === "dark" ? "#f1f5f9" : "#1e293b"
      }}>
        Select your mood
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: "16px"
      }}>
        {moods.map((m) => (
          <div
            key={m.id}
            onClick={() => onSelect(m.id)}
            style={{
              padding: "24px",
              borderRadius: "16px",
              border: selectedMood === m.id 
                ? `3px solid ${m.color}`
                : theme === "dark" ? "2px solid #334155" : "2px solid #e2e8f0",
              background: selectedMood === m.id 
                ? `linear-gradient(135deg, ${m.color}15, ${m.color}05)`
                : theme === "dark" ? "#0f172a" : "#f8fafc",
              cursor: "pointer",
              transition: "all 0.3s",
              transform: selectedMood === m.id ? "scale(1.05)" : "scale(1)",
              textAlign: "center"
            }}
            onMouseEnter={(e) => {
              if (selectedMood !== m.id) {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.borderColor = m.color;
              }
            }}
            onMouseLeave={(e) => {
              if (selectedMood !== m.id) {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.borderColor = theme === "dark" ? "#334155" : "#e2e8f0";
              }
            }}
          >
            <div style={{
              color: m.color,
              marginBottom: "12px",
              display: "flex",
              justifyContent: "center"
            }}>
              {m.icon}
            </div>
            <div style={{
              fontSize: "16px",
              fontWeight: "700",
              color: theme === "dark" ? "#f1f5f9" : "#1e293b",
              marginBottom: "4px"
            }}>
              {m.label}
            </div>
            <div style={{
              fontSize: "12px",
              color: theme === "dark" ? "#94a3b8" : "#64748b"
            }}>
              {m.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}