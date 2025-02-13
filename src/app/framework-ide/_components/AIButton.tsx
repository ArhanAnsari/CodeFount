// src/app/framework-ide/_components/AIButton.tsx
import { useState } from "react";

export default function AIButton({ framework }: { framework: string }) {
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState("");

  async function fetchAISuggestions() {
    setLoading(true);
    setAiResponse("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: `Generate code suggestions for ${framework}.` }),
      });

      const data = await response.json();
      if (data.generatedContent) {
        setAiResponse(data.generatedContent);
      } else {
        setAiResponse("No response from AI.");
      }
    } catch (error) {
      console.error("Error fetching AI suggestions:", error);
      setAiResponse("Error fetching AI suggestions.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-2">
      <button
        className="p-2 bg-purple-600 text-white rounded"
        onClick={fetchAISuggestions}
        disabled={loading}
      >
        {loading ? "Generating..." : "Get AI Suggestions"}
      </button>

      {aiResponse && <p className="mt-2 text-gray-300">{aiResponse}</p>}
    </div>
  );
}
