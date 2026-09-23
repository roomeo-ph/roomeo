import { Button } from '@/web/shared/components/ui/button'

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center background text-zinc-50 p-6">
      <div className="max-w-md w-full p-8 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl space-y-4">
        <h1 className="text-2xl font-bold tracking-tight text-emerald-400">
          Roomeo Web
        </h1>
        <p className="text-zinc-400 text-sm">
          Tailwind CSS v4 + Vite + React configured inside your Bun monorepo.
        </p>
        <Button className="w-full py-2 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-thin transition">
          Get Started
        </Button>
      </div>
    </main>
  );
}
