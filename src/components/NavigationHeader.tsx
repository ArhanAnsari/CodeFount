import HeaderProfileBtn from "@/app/(root)/_components/HeaderProfileBtn";
import { Blocks, Code2, Sparkles } from "lucide-react";
import Link from "next/link";

function NavigationHeader() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6"> {/* Adjusted padding for mobile */}
        <div className="relative h-16 flex flex-wrap items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3 group relative">
              <div
                className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"
              />
              <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
                <Blocks className="w-6 h-6 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
              </div>
              <div className="relative">
                <span
                  className="block text-lg font-semibold bg-gradient-to-r
                  from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text"
                >
                  CodeFount
                </span>
                <span className="block text-xs text-blue-400/60 font-medium">
                  Interactive Code Editor
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/snippets"
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 
              border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden"
            >
              <Code2 className="w-4 h-4" />
              <span className="text-sm font-medium">Snippets</span>
            </Link>
            <Link
              href="/web-editor"
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 
              border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden"
            >
              <Code2 className="w-4 h-4" />
              <span className="text-sm font-medium">CodeFount Web Editor</span>
            </Link>
            <Link
              href="/pricing"
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg border border-amber-500/20
              hover:border-amber-500/40 bg-gradient-to-r from-amber-500/10 to-orange-500/10
              hover:from-amber-500/20 hover:to-orange-500/20 transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 text-amber-400 hover:text-amber-300" />
              <span className="text-sm font-medium text-amber-400/90 hover:text-amber-300">
                Pro
              </span>
            </Link>
          </div>

          {/* Profile Section */}
          <div className="flex items-center gap-4">
            <HeaderProfileBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationHeader;
