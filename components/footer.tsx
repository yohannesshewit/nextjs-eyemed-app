import { ShieldCheck, Sparkles, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-8 rounded-3xl border border-border/50 bg-background/70 px-4 py-4 shadow-sm backdrop-blur-xl">
      <div className="flex flex-col md:flex md:flex-row justify-between gap-6 ">
        {/* Top */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-500">
            <Star className="h-5 w-5 fill-yellow-500/20" />
          </div>

          <div className="space-y-1">
            <h3 className="text-sm font-semibold leading-tight">
              Trusted by eye care professionals worldwide
            </h3>

            <p className="text-xs leading-relaxed text-muted-foreground">
              Evidence-based tools and resources for modern clinical practice.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <div className="flex items-center gap-2 rounded-2xl border bg-muted/40 px-3 py-2">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span className="text-xs text-muted-foreground">
              Evidence-based
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-2xl border bg-muted/40 px-3 py-2">
            <Sparkles className="h-4 w-4 text-violet-500" />
            <span className="text-xs text-muted-foreground">
              Regular updates
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-2xl border bg-muted/40 px-3 py-2">
            <Star className="h-4 w-4 text-amber-500" />
            <span className="text-xs text-muted-foreground">
              Expert reviewed
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
