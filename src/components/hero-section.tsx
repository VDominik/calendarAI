import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[200px] h-[200px] bg-purple-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-120px] right-[-80px] w-[250px] h-[250px] bg-indigo-300 opacity-30 rounded-full blur-3xl"></div>

      <h1 className="text-7xl sm:text-7xl font-bold leading-tight tracking-tight mb-4 z-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
          AI tells you what
        </span><br />
        <span>
        to work on next
      </span>
      </h1>
      <p className="text-2xl sm:text-2xl text-gray-700 max-w-xl mb-6 z-10">
        Noltra connects to your calendar, task manager, and energy levels to
        recommend the perfect task at the perfect time.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 z-10">
        <Link href="/waitlist">
      <button className="group flex text-xl items-center cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-4 px-8 rounded-xl shadow-md transition-all duration-200 transform hover:scale-105 z-10 gap-4">
        <span className="inline-flex items-center gap-4">
          Join the waitlist
          <FaArrowRight className="opacity-70 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </button>
      </Link>
      <p className="text-sm text-gray-500 font-bold mt-3 z-10">
        Be among the first to experience AI-powered productivity
      </p>
      </div>
    </section>
  );
}