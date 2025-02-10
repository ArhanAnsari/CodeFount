// src/app/framework-ide/_components/FrameworkSelector.tsx
export default function FrameworkSelector({
  onSelect,
}: {
  onSelect: (framework: string) => void;
}) {
  const frameworks = ["React", "Next.js", "Vue", "Svelte", "Angular"];
  return (
    <div className="p-4 bg-gray-800">
      <select
        onChange={(e) => onSelect(e.target.value)}
        className="p-2 bg-gray-700 text-white"
      >
        {frameworks.map((fw) => (
          <option key={fw} value={fw}>
            {fw}
          </option>
        ))}
      </select>
    </div>
  );
}
