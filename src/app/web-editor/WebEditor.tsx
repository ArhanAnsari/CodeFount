"use client";

import { useState, useEffect } from "react";
import { ConvexHttpClient } from "convex/browser";
import { useUser } from "@clerk/nextjs";
import { api } from "../../../convex/_generated/api";
import NavigationHeader from "@/components/NavigationHeader";

import EditorPanel from "./EditorPanel";
import PreviewPanel from "./PreviewPanel";
import TabBar from "./TabBar";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function WebEditor() {
  const [html, setHtml] = useState("<p>Hello from CodeFount!</p>");
  const [css, setCss] = useState(`
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      color: #333;
      margin: 0;
      padding: 20px;
    }

    h1 {
      text-align: center;
      color: #2c3e50;
      font-size: 2.5rem;
    }
  `);
  const [js, setJs] = useState('console.log("Hello from CodeFount!");');
  const [activeTab, setActiveTab] = useState("HTML");
  const [preview, setPreview] = useState("");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [aiSuggestion, setAiSuggestion] = useState("");
  const [loading, setLoading] = useState(false);

  const { user, isLoaded, isSignedIn } = useUser();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (isLoaded && isSignedIn && user?.id) {
      setUserId(user.id);
      convex
        .query(api.webEditor.fetchContent, { userId: user.id })
        .then((data) => {
          if (data) {
            setHtml(data.html);
            setCss(data.css);
            setJs(data.js);
          }
        })
        .catch(console.error);
    }
  }, [isLoaded, isSignedIn, user]);

  // AI Suggestion Function
  const handleAISuggest = async () => {
    const code = activeTab === "HTML" ? html : activeTab === "CSS" ? css : js;
    const prompt = `Improve the following ${activeTab} code:\n\n${code}`;
    setLoading(true);
    try {
      const suggestion = await convex.mutation(api.gemini.suggestCode, { prompt });
      setAiSuggestion(suggestion);
    } catch (error) {
      setAiSuggestion("Failed to get AI suggestion.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const combinedPreview = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>
            (function() {
              const originalConsoleLog = console.log;
              console.log = function(...args) {
                window.parent.postMessage({ type: 'consoleLog', args }, '*');
                originalConsoleLog.apply(console, args);
              };
              ${js}
            })();
          </script>
        </body>
      </html>
    `;
    setPreview(combinedPreview);
  }, [html, css, js]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navigation Header */}
      <NavigationHeader />
      <div className="flex flex-col h-full p-4">
        {/* Tab Bar */}
        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex flex-col lg:flex-row flex-1 mt-4 space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Editor Panel */}
          <div className="flex-1 p-4 bg-white rounded-md shadow-md">
            <EditorPanel activeTab={activeTab} html={html} setHtml={setHtml} css={css} setCss={setCss} js={js} setJs={setJs} />
          </div>

          {/* Preview Panel */}
          <div className="flex-1 p-4 bg-gray-200 rounded-md shadow-md">
            <PreviewPanel preview={preview} />
          </div>
        </div>

        {/* AI Suggestion Section */}
        <div className="mt-4 p-4 bg-white rounded-md shadow-md">
          <button
            onClick={handleAISuggest}
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded transition"
          >
            {loading ? "Getting AI Suggestion..." : `AI Suggest (${activeTab})`}
          </button>
          {aiSuggestion && (
            <div className="mt-4 p-2 border rounded bg-gray-100">
              <h3 className="font-bold">AI Suggestion:</h3>
              <pre className="whitespace-pre-wrap">{aiSuggestion}</pre>
            </div>
          )}
        </div>

        {/* Console */}
        <div className="console bg-black text-white p-4 overflow-y-auto h-32 mt-4 rounded-md shadow-md">
          <h3 className="text-lg font-bold">Console</h3>
          {consoleLogs.map((log, index) => (
            <div key={index}>{log}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
