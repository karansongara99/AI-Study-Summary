import UploadForm from "@/components/UploadForm";

export default function UploadPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center py-8">
        🤖 AI Study <span className="text-blue-400">Summary</span>
      </h1>

      {/* Split Screen */}
      <UploadForm />
    </main>
  );
}
