export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-semibold tracking-tight">Hello, Codex</h1>
      <p className="text-center text-balance text-gray-600 dark:text-gray-300 max-w-prose">
        Next.js (App Router) + TypeScript + ESLint. Start the dev server with
        <code className="mx-1 rounded bg-black/5 px-1 py-0.5 dark:bg-white/10">npm run dev</code>
        and edit <code className="mx-1 rounded bg-black/5 px-1 py-0.5 dark:bg-white/10">src/app/page.tsx</code>.
      </p>
    </main>
  );
}
