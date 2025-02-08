// src/app/framework-ide/_components/FileTree.tsx
export default function FileTree({ framework }: { framework: string }) {
  return (
    <div className="w-60 bg-gray-800 p-4">
      <h3 className="text-white">{framework} Files</h3>
      {/* File structure UI will go here */}
    </div>
  );
}
