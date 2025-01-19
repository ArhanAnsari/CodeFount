import EditorPanel from "./_components/EditorPanel";
import Header from "./_components/Header";
import OutputPanel from "./_components/OutputPanel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-[1800px] mx-auto p-4">
        {/* Header Section */}
        <Header />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          <EditorPanel />
          <OutputPanel />
        </div>
      </div>
    </div>
  );
}
