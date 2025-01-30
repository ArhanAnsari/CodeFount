"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import NavigationHeader from "@/components/NavigationHeader";
import EditorPanel from "./EditorPanel";
import PreviewPanel from "./PreviewPanel";
import TabBar from "./TabBar";
import ReactMarkdown from "react-markdown";

export default function WebEditor() {
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
    }
  }, [isLoaded, isSignedIn, user]);

  const updateCode = useMutation(api.webEditor.saveContent);
  const codeData = useQuery(api.webEditor.fetchContent, { userId });

  const [html, setHtml] = useState(codeData?.html || "<p>Hello from CodeFount!</p>");
  const [css, setCss] = useState(codeData?.css || `
    body {
      font-family: Arial, sans-serif;
      background-color: #12121a;
      color: #ffffff;
      margin: 0;
      padding: 20px;
    }

    h1 {
      text-align: center;
      color: #f5f5f5;
      font-size: 2.5rem;
    }
  `);
  const [js, setJs] = useState(codeData?.js || 'console.log("Hello from CodeFount!");');

  useEffect(() => {
    if (userId) {
      updateCode({ userId, html, css, js, updatedAt: Date.now() });
    }
  }, [html, css, js, userId, updateCode]);

  // AI Suggestion Function
  const handleAISuggest = async () => {
    const code = activeTab === "HTML" ? html : activeTab === "CSS" ? css : js;
    const prompt = `Improve the following ${activeTab} code:\n\n${code}`;
    setLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setAiSuggestion(data.generatedContent || "No suggestion available.");
    } catch (error) {
      console.error("AI Suggestion Error:", error);
      setAiSuggestion("AI suggestion failed. Please try again.");
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

  useEffect(() => {
    const handleConsoleMessage = (event: MessageEvent) => {
      if (event.data.type === "consoleLog") {
        setConsoleLogs((prevLogs) => [...prevLogs, ...event.data.args.map(String)]);
      }
    };
    window.addEventListener("message", handleConsoleMessage);
    return () => window.removeEventListener("message", handleConsoleMessage);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-[#12121a] text-white">
      
      {/* Navigation Header */}
      <NavigationHeader />
      <div className="mt-4 flex flex-col h-full p-4 space-y-4">
        {/* Tab Bar */}
        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* Editor Panel */}
        <div className="flex flex-col lg:flex-row flex-1 space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex-1 p-4 bg-[#1e1e2e] rounded-md shadow-md">
            <EditorPanel activeTab={activeTab} html={html} setHtml={setHtml} css={css} setCss={setCss} js={js} setJs={setJs} />
          </div>
          {/* Preview Panel */}
          <div className="flex-1 p-4 bg-[#1e1e2e] rounded-md shadow-md">
            <PreviewPanel preview={preview} />
          </div>
        </div>

        {/* AI Suggestion Section */}
        <div className="mt-4 p-4 bg-[#1e1e2e] rounded-md shadow-md">
          <button
            onClick={handleAISuggest}
            disabled={loading}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-4 py-2 rounded transition"
          >
            {loading ? "Getting AI Suggestion..." : `AI Suggest (${activeTab})`}
          </button>
          {aiSuggestion && (
            <div className="mt-4 p-2 border border-gray-600 rounded bg-[#2a2a3a]">
              <h3 className="font-bold">AI Suggestion:</h3>
              <ReactMarkdown className="whitespace-pre-wrap">{aiSuggestion}</ReactMarkdown>
            </div>
          )}
        </div>

        {/* Console */}
        <div className="console bg-black text-white p-4 overflow-y-auto h-32 mt-4 rounded-md shadow-md">
          <h3 className="text-lg font-bold">Console</h3>
          {consoleLogs.length > 0 ? consoleLogs.map((log, index) => (
            <div key={index}>{log}</div>
          )) : <p className="text-gray-400">No console output yet...</p>}
        </div>
      </div>
    </div>
  );
}
