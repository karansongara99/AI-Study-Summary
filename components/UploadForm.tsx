"use client";

import { useState } from "react";
import SummaryBox from "./SummaryBox";

export default function UploadForm() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSummarize() {
    if (!text.trim() || loading) return;

    setLoading(true);
    setSummary("");

    try {
      const res = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();
      setSummary(data.summary || "No summary returned.");
    } catch (err) {
      setSummary("Error generating summary. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="h-[calc(100vh-120px)] w-full px-4 pb-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full max-w-7xl mx-auto">
        
        {/* LEFT SIDE - Upload */}
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl flex flex-col">
          <h2 className="text-2xl font-semibold mb-2">📄 Paste Your Content</h2>
          <p className="text-gray-400 mb-4 text-sm">
            Paste articles, README files, notes, or any raw text.
          </p>

          <textarea
            rows={12}
            maxLength={10000}
            disabled={loading}
            className="flex-1 w-full rounded-xl bg-black/40 border border-white/10 p-4 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none disabled:opacity-60"
            placeholder="Paste any content here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-gray-500">
              {text.length} / 10,000 characters
            </span>

            <button
              onClick={handleSummarize}
              disabled={loading}
              className="px-6 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition font-semibold shadow-lg"
            >
              {loading ? "Summarizing..." : "✨ Summarize"}
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Summary */}
        <SummaryBox summary={summary} loading={loading} />
      </div>
    </section>
  );
}
