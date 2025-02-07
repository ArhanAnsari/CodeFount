// src/app/framework-ide/_components/AIButton.tsx
import { useState } from "react";
export default function AIButton({ framework }: { framework: string }) {
  const [loading, setLoading] = useState(false);
  return (
    <button
      className="p-2 bg-purple-600 text-white"
      onClick={() => setLoading(true)}
    >
      {loading ? "Generating..." : "Get AI Suggestions"}
    </button>
  );
}
