import { useState } from "react";

interface SummaryBoxProps {
  summary: string;
  loading?: boolean;
}

export default function SummaryBox({ summary, loading }: SummaryBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!summary) return;

    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy summary:", err);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-800 via-gray-900 to-black border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl h-full overflow-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
          ✅ Summary
        </h3>

        {summary && !loading && (
          <button
            onClick={handleCopy}
            className="text-xs md:text-sm px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-200 transition"
          >
            {copied ? "✅ Copied!" : "📋 Copy"}
          </button>
        )}
      </div>

      {/* Content */}
      {loading ? (
        <p className="text-gray-400 animate-pulse">Generating summary...</p>
      ) : summary ? (
        <pre className="whitespace-pre-wrap text-sm md:text-base text-gray-200 leading-relaxed">
          {summary}
        </pre>
      ) : (
        <p className="text-gray-500 text-sm">
          Your summarized content will appear here.
        </p>
      )}
    </div>
  );
}
