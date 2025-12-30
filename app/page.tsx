import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-screen h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white flex flex-col">
      
      {/* Center Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-5xl px-6 md:px-10 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center mb-6 rounded-full bg-white/10 px-4 py-1 text-sm text-gray-300 backdrop-blur">
            Local AI • Offline • Private
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            🤖 AI Study <span className="text-blue-400">Summarizer</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-xl lg:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto">
            Instantly summarize articles, notes, documentation, and README files
            using a powerful{" "}
            <span className="text-white font-medium">local AI model</span>.
            No cloud. No data leaks. Fully offline.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/upload"
              className="px-8 py-3 md:px-10 md:py-4 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-semibold shadow-lg"
            >
              🚀 Start Summarizing
            </Link>

            <a
              href="https://ollama.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 md:px-10 md:py-4 rounded-xl border border-white/20 hover:bg-white/10 transition font-semibold"
            >
              Learn about Ollama
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold mb-2 text-lg">⚡ Fast</h3>
              <p className="text-sm text-gray-300">
                Runs directly on your machine using optimized local AI models.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold mb-2 text-lg">🔒 Private</h3>
              <p className="text-sm text-gray-300">
                Your content never leaves your system. No cloud processing.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold mb-2 text-lg">🧠 Smart</h3>
              <p className="text-sm text-gray-300">
                Cleans markdown and README formatting before summarizing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-4 text-center text-xs text-gray-400 border-t border-white/10">
        Created by <span className="text-white font-medium"><a href="https://karansongara.vercel.app/">Karan Songara</a></span> • AI/ML Projects
      </footer>

    </main>
  );
}
