"use client";

import { useState, useEffect } from "react";
import { ConvexHttpClient } from "convex/browser";
import { useUser } from "@clerk/nextjs";
import { api } from "../../../convex/_generated/api";
import NavigationHeader from "@/components/NavigationHeader";

import EditorPanel from "./EditorPanel";
import PreviewPanel from "./PreviewPanel";
import TabBar from "./TabBar";

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

  const { user, isLoaded, isSignedIn } = useUser();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (isLoaded && isSignedIn && user?.id) {
      setUserId(user.id);

      const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
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

    const timeout = setTimeout(() => {
      if (userId) {
        const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
        convex
          .mutation(api.webEditor.saveContent, { userId, html, css, js })
          .catch(console.error);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [html, css, js, userId]);

  useEffect(() => {
    const handleConsoleLog = (event: MessageEvent) => {
      if (event.data.type === "consoleLog") {
        setConsoleLogs((prevLogs) => [...prevLogs, ...event.data.args]);
      }
    };
    window.addEventListener("message", handleConsoleLog);
    return () => window.removeEventListener("message", handleConsoleLog);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {/* Navigation Header */}
      <NavigationHeader />
      <div className="mt-4 flex flex-col h-full px-4 md:px-6">
        {/* Tab Bar */}
        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 flex flex-col lg:flex-row my-4 space-y-4 lg:space-y-0 lg:space-x-4">
          {/* Editor Panel */}
          <div className="flex-1 p-4 bg-white rounded-md shadow-md overflow-hidden lg:overflow-auto">
            <EditorPanel activeTab={activeTab} html={html} setHtml={setHtml} css={css} setCss={setCss} js={js} setJs={setJs} />
          </div>

          {/* Preview Panel */}
          <div className="flex-1 p-4 bg-gray-200 rounded-md shadow-md overflow-hidden lg:overflow-auto">
            <PreviewPanel preview={preview} />
          </div>
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
