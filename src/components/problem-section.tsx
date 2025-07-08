import { FiAlertTriangle, FiZap } from "react-icons/fi";
import { GoTasklist } from "react-icons/go";


export default function ProblemSection() {
  return (
    <section className="py-24 px-4 bg-white text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-6xl sm:text-6xl font-bold mb-4">
          Modern productivity is <span className="text-red-500">chaos</span>
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          We&apos;ve never had more productivity tools, yet we&apos;ve never been more overwhelmed.
          The problem isn&apos;t the tools, it&apos;s the chaos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-lg transition text-left">
            <GoTasklist className="text-indigo-600 text-3xl mb-4" />
            <h3 className="font-semibold text-xl mb-6">Too many tools</h3>
            <p className="text-gray-600 text-md">
              Calendar, task manager, notes app, email. Your attention is scattered across a dozen different places.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-lg transition text-left">
            <FiAlertTriangle className="text-indigo-600 text-3xl mb-4" />
            <h3 className="font-bold text-xl mb-6">Hard to prioritize</h3>
            <p className="text-gray-600 text-md">
              Everything feels urgent. You spend more time deciding what to work on than actually working.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-lg transition text-left">
            <FiZap className="text-indigo-600 text-3xl mb-4" />
            <h3 className="font-semibold text-xl mb-6">Energy mismatches</h3>
            <p className="text-gray-600 text-md">
              Deep work when you&apos;re tired. Meetings when you&apos;re in flow. Your schedule fights against your natural rhythms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
