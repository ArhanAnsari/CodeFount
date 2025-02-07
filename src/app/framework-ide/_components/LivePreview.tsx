// src/app/framework-ide/_components/LivePreview.tsx
export default function LivePreview({ framework }: { framework: string }) {
  return (
    <div className="flex-1 bg-gray-900 p-4">
      <iframe title="Live Preview" className="w-full h-full bg-white" />
    </div>
  );
}
