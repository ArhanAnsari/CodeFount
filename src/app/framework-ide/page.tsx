"use client";

import Editor from "./_components/Editor";
import FrameworkSelector from "./_components/FrameworkSelector";
import LivePreview from "./_components/LivePreview";
import FileTree from "./_components/FileTree";
import AIButton from "./_components/AIButton";
import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "./../../../convex/_generated/api"; // ✅ Correctly using API
import { useUser } from "@clerk/nextjs";

export default function FrameworkIDE() {
  const { user } = useUser();
  const [selectedFramework, setSelectedFramework] = useState("React");

  // Fetch the existing framework code from Convex
  const frameworkData = useQuery(api.frameworks.getFrameworkCode, {
    framework: selectedFramework,
    userId: user?.id || "",
  });

  // Mutation for saving framework code
  const saveCode = useMutation(api.frameworks.saveFrameworkCode);

  return (
    <div className="flex h-screen">
      <FileTree framework={selectedFramework} />
      <div className="flex-1 flex flex-col">
        <FrameworkSelector onSelect={setSelectedFramework} />
        <Editor
          framework={selectedFramework}
          initialFiles={frameworkData?.files || {}} // ✅ Handles missing files safely
          onSave={(files) =>
            saveCode({
              framework: selectedFramework,
              userId: user?.id || "",
              files,
            })
          }
        />
        <AIButton framework={selectedFramework} />
        <LivePreview framework={selectedFramework} />
      </div>
    </div>
  );
}
