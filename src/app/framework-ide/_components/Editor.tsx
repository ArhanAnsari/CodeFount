// src/app/framework-ide/_components/Editor.tsx
import { useState, useEffect } from "react";
import MonacoEditor from "@monaco-editor/react";

export default function Editor({
  framework,
  initialFiles,
  onSave,
}: {
  framework: string;
  initialFiles: any;
  onSave: (files: any) => void;
}) {
  const [files, setFiles] = useState(initialFiles);

  useEffect(() => {
    setFiles(initialFiles);
  }, [initialFiles]);

  const handleChange = (filename: string, content: string) => {
    setFiles({ ...files, [filename]: content });
  };

  return (
    <div className="flex-1 bg-gray-900 p-4">
      <button
        className="mb-2 p-2 bg-blue-600 text-white"
        onClick={() => onSave(files)}
      >
        Save Code
      </button>
      {Object.keys(files).map((filename) => (
        <div key={filename}>
          <h3 className="text-white">{filename}</h3>
          <MonacoEditor
            height="200px"
            defaultLanguage={framework.toLowerCase()}
            theme="vs-dark"
            value={files[filename]}
            onChange={(value) => handleChange(filename, value || "")}
          />
        </div>
      ))}
    </div>
  );
}
