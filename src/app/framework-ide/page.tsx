// src/app/framework-ide/page.tsx
"use client";

import Editor from "./_components/Editor";
import FrameworkSelector from "./_components/FrameworkSelector";
import LivePreview from "./_components/LivePreview";
import FileTree from "./_components/FileTree";
import AIButton from "./_components/AIButton";
import { useState, useEffect } from "react";
import { useMutation, useQuery } from "convex/react";
import { getFrameworkCode, saveFrameworkCode } from "./../../convex/frameworks";
import { useUser } from "@clerk/nextjs";

export default function FrameworkIDE() {
  const { user } = useUser();
  const [selectedFramework, setSelectedFramework] = useState("React");
  const frameworkData = useQuery(getFrameworkCode, {
    framework: selectedFramework,
    userId: user?.id || "",
  });
  const saveCode = useMutation(saveFrameworkCode);

  return (
    <div className="flex h-screen">
      <FileTree framework={selectedFramework} />
      <div className="flex-1 flex flex-col">
        <FrameworkSelector onSelect={setSelectedFramework} />
        <Editor
          framework={selectedFramework}
          initialFiles={frameworkData?.files || {}}
          onSave={(files) => saveCode({
            framework: selectedFramework,
            userId: user?.id || "",
            files,
          })}
        />
        <AIButton framework={selectedFramework} />
        <LivePreview framework={selectedFramework} />
      </div>
    </div>
  );
}
