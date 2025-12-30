interface SummaryBoxProps {
  summary: string;
  loading?: boolean;
}

export default function SummaryBox({ summary, loading }: SummaryBoxProps) {
  return (
    <div className="bg-gradient-to-br from-slate-800 via-gray-900 to-black border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl h-full overflow-auto">
      <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-2">
        ✅ Summary
      </h3>

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
