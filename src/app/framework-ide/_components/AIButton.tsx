// src/app/framework-ide/_components/AIButton.tsx
import { useState } from "react";

export default function AIButton({ framework }: { framework: string }) {
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState("");

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ framework }),
      });
      const data = await response.json();
      setSuggestion(data.suggestion || "No suggestion available.");
    } catch (error) {
      console.error("Error generating AI suggestion", error);
      setSuggestion("Failed to get suggestion.");
    }
    setLoading(false);
  };

  return (
    <div className="p-4 bg-gray-800">
      <button className="p-2 bg-purple-600 text-white" onClick={handleGenerate}>
        {loading ? "Generating..." : "Get AI Suggestions"}
      </button>
      {suggestion && <p className="text-white mt-2">{suggestion}</p>}
    </div>
  );
}
