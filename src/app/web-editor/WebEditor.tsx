'use client';

import { useState, useEffect } from 'react';
import EditorPanel from './EditorPanel';
import PreviewPanel from './PreviewPanel';
import TabBar from './TabBar';
import { useMutation, useQuery } from 'convex/react';
//import { api } from '@/convex/_generated/api';
import { api } from "../../../../convex/_generated/api";

export default function WebEditor() {
  const userId = 'user-id-placeholder'; // Replace with Clerk's userId
  const { data: content } = useQuery(api.webEditor.fetchContent, userId);
  const saveContent = useMutation(api.webEditor.saveContent);

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [activeTab, setActiveTab] = useState('HTML');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (content) {
      setHtml(content.html || '');
      setCss(content.css || '');
      setJs(content.js || '');
    }
  }, [content]);

  useEffect(() => {
    const combinedPreview = `
      <html>
        <head><style>${css}</style></head>
        <body>${html}<script>${js}</script></body>
      </html>`;
    setPreview(combinedPreview);

    const timeout = setTimeout(() => {
      saveContent({ userId, html, css, js });
    }, 300);

    return () => clearTimeout(timeout);
  }, [html, css, js, saveContent]);

  return (
    <div className="flex flex-col h-screen">
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex flex-1">
        <EditorPanel
          activeTab={activeTab}
          html={html}
          setHtml={setHtml}
          css={css}
          setCss={setCss}
          js={js}
          setJs={setJs}
        />
        <PreviewPanel preview={preview} />
      </div>
    </div>
  );
}
