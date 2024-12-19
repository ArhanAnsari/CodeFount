import { Blocks } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50 mt-auto">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Blocks className="size-5" />
            <span>Built for developers, by developers</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/pricing" className="text-gray-400 hover:text-gray-300 transition-colors">
              Pricing
            </Link>
            <Link href="/support" className="text-gray-400 hover:text-gray-300 transition-colors">
              Support
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-gray-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-gray-300 transition-colors">
              Terms
            </Link>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Blocks className="size-5" />
            <span><p>
            Developed by{" "}
            <Link
              href="https://arhanansari.vercel.app"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Arhan Ansari
            </Link>
          </p></span>
          </div>
        </div>
        {/* Adding CopyRight Symbol along with current year and the name of the project CodeFount*/}
        <div className="flex items-center gap-6 text-gray-400 text-sm mt-4">
          <p>&copy; {new Date().getFullYear()} CodeFount. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
