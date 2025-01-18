'use client';

import { FC } from 'react';
import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

interface Props {
  activeTab: string;
  html: string;
  setHtml: (value: string) => void;
  css: string;
  setCss: (value: string) => void;
  js: string;
  setJs: (value: string) => void;
}

const EditorPanel: FC<Props> = ({ activeTab, html, setHtml, css, setCss, js, setJs }) => {
  const handleEditorChange = (value: string | undefined) => {
    if (activeTab === 'HTML') setHtml(value || '');
    else if (activeTab === 'CSS') setCss(value || '');
    else if (activeTab === 'JavaScript') setJs(value || '');
  };

  return (
    <MonacoEditor
      height="100%"
      language={activeTab.toLowerCase()}
      value={activeTab === 'HTML' ? html : activeTab === 'CSS' ? css : js}
      onChange={handleEditorChange}
      theme="vs-dark"
    />
  );
};

export default EditorPanel;
