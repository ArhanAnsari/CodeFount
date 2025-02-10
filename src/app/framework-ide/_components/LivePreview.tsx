// src/app/framework-ide/_components/LivePreview.tsx
import { useEffect, useRef } from "react";

export default function LivePreview({ framework }: { framework: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = `<html><body><h1>${framework} Preview</h1></body></html>`;
    }
  }, [framework]);

  return (
    <div className="flex-1 bg-gray-900 p-4">
      <iframe ref={iframeRef} title="Live Preview" className="w-full h-full bg-white" />
    </div>
  );
}
