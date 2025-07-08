"use client"
import Link from "next/link";
import { useState } from "react";
import { supabase } from '../../../libs/supabase'

export default function WaitlistPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { error } = await supabase.from('emails').insert([{ email }])

if (error) {
  alert(`Error: ${error.message}`)
} else {
  alert('You’ve been added to the waitlist!')
  setEmail('') // reset form
}
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 text-center">
      <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
        Join the <span className="text-indigo-500">waitlist</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mb-10">
        Be among the first to experience AI-powered productivity. <br />
        We'll notify you when early access opens.
      </p>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <label htmlFor="email" className="block text-left font-medium mb-1">
          Email address
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-indigo-500 cursor-pointer hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2"
        >
          Join waitlist <span className="text-xl">→</span>
        </button>
      </form>
      <Link
        href="/"
        className="mt-8 text-sm text-gray-500 hover:underline flex items-center gap-1"
      >
        ← Back to home
      </Link>
    </main>
  );
}