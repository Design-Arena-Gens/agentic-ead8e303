function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-slate-600">{description}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Agentic Starter</h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">
          A minimal Next.js app deployed to Vercel. Built autonomously.
        </p>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        <Feature title="Next.js 14" description="App router, fast builds, great DX." />
        <Feature title="TypeScript" description="Strict types for a safer codebase." />
        <Feature title="API route" description="/api/health returns a simple OK." />
        <Feature title="Vercel Ready" description="Optimized for instant Vercel deploys." />
      </section>

      <section className="mt-10 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-xl font-semibold">Quick Test</h2>
        <a className="mt-2 inline-block text-blue-600 underline" href="/api/health">Check health endpoint</a>
      </section>
    </main>
  );
}
