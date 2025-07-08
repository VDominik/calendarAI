

import { LuBrain, LuTarget, LuClock4 } from "react-icons/lu";

export default function SolutionSection() {
  return (
    <section className="py-24 px-4 bg-white text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl sm:text-6xl font-bold mb-4">
          One AI assistant that <span className="text-indigo-500">connects everything</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16">
          Noltra plugs into your existing tools and becomes your intelligent productivity guide.
          No more context switching. No more decision fatigue.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="text-center">
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600 text-xl">
              <LuBrain className="text-4xl"/>
            </div>
            <h3 className="font-bold text-xl mb-4">AI-powered recommendations</h3>
            <p className="text-md text-gray-600">
              Our AI analyzes your calendar, tasks, and energy patterns to suggest the optimal work for right now.
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600 text-xl">
              <LuTarget className="text-4xl" />
            </div>
            <h3 className="font-bold text-xl mb-4">Context-aware prioritization</h3>
            <p className="text-md text-gray-600">
              Considers deadlines, energy levels, available time blocks, and your personal productivity patterns.
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-indigo-100 rounded-full text-indigo-600 text-xl">
              <LuClock4 className="text-4xl"/>
            </div>
            <h3 className="font-bold text-xl mb-4">Real-time adaptation</h3>
            <p className="text-md text-gray-600">
              As your day changes, Noltra adapts. Meeting canceled? Task finished early? Get new recommendations instantly.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm max-w-3xl mx-auto text-left">
          <h4 className="text-xl font-semibold mb-6 text-center">How it works</h4>
          <ol className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">1</div>
              <div>
                <div className="font-semibold">Connect your tools</div>
                <p className="text-gray-600">
                  Link your calendar, task manager, and productivity apps in one click.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">2</div>
              <div>
                <div className="font-semibold">Share your energy patterns</div>
                <p className="text-gray-600">
                  Tell Noltra when you're most focused, creative, or prefer meetings.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">3</div>
              <div>
                <div className="font-semibold">Get intelligent recommendations</div>
                <p className="text-gray-600">
                  Receive personalized suggestions for what to work on next, when to take breaks, and how to optimize your day.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}