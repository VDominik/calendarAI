import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { WiStars } from "react-icons/wi";

export default function CtaSection() {
  return (
    <>
      <section className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white py-24 px-4 text-center rounded-3xl m-12 w-8/10 max-w-400 mx-auto">
        <p className="text-sm font-medium bg-white/10 px-4 py-1 inline-flex items-center rounded-full mb-4">
          <WiStars className="opacity-70 w-12 h-12" /> Early Access Program
        </p>
        <h2 className="text-5xl sm:text-5xl font-bold mb-4">
          Be among the first to experience <br className="hidden sm:inline" />
          AI-powered productivity
        </h2>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          Join our exclusive early access program and help shape the future of productivity.
          Limited spots available for our beta launch.
        </p>
        <Link href="/waitlist">
        <button className="group bg-white cursor-pointer inline-flex items-center gap-4 text-indigo-600 font-semibold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
          <p className="text-2xl"> Join the waitlist </p>
          <FaArrowRight className="opacity-70 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
        </Link>
        <p className="text-sm mt-4 opacity-80">
          Free for early testers • No credit card required
        </p>
      </section>
      <div className="text-center mt-10 text-md font-semibold text-gray-500 mb-24">
        Built with ❤️ for people who want to do their best work
      </div>
    </>
  );
}