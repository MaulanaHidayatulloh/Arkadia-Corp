export default function PlaceholderPage({ title }) {
  return (
    <main className="min-h-[70vh] bg-slate-50">
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
          Arkadia Digital Media
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl leading-7 text-slate-600">
          Halaman ini akan kita bangun pada tahap berikutnya.
        </p>
      </section>
    </main>
  );
}
