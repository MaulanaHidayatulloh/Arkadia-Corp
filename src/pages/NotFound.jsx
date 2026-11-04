import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 py-18 sm:px-10">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="h-[2px] w-8 bg-orange-500" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
            Page Not Found
          </span>
          <span className="h-[2px] w-8 bg-orange-500" />
        </div>

        <h1 className="font-sans text-[120px] font-bold leading-none tracking-tight text-black sm:text-[180px] lg:text-[220px]">
          404
        </h1>

        <h2 className="mt-6 font-serif text-3xl font-normal text-black sm:text-4xl lg:text-5xl">
          Lost in the Network?
        </h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-black/60 sm:text-base sm:leading-8">
          Sorry, the page you're looking for doesn't exist or may have been
          moved. Let's get you back to where the stories begin.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex cursor-pointer items-center gap-2 px-5 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-black transition-colors hover:text-orange-500"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
          <Link
            to="/"
            className="group rounded-full inline-flex items-center gap-3 bg-orange-500 px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white hover:bg-orange-700"
          >
            Back to Homepage
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="mt-20 border-t border-black/30 pt-6">
          <p className="font-serif text-sm italic text-black/60 sm:text-base">
            PT Arkadia Digital Media Tbk
          </p>
        </div>
      </div>
    </main>
  );
}
