import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, Scale } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/areas-de-atuacao", label: "Áreas" },
  { to: "/videos", label: "Vídeos" },
  { to: "/depoimentos", label: "Depoimentos" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-ink/95 backdrop-blur-md border-b border-white/5 shadow-[0_1px_0_0_rgba(201,169,110,0.15)]"
          : "bg-ink/80 backdrop-blur-sm",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-gold/40 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
            <Scale className="h-4 w-4" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-wide text-white">
              GVS Advogados
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-gold-soft/80">
              Associados
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-white" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-sm border border-gold/60 bg-transparent px-4 py-2 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-ink"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-sm text-white/80 hover:text-white"
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-ink text-white border-l-white/10 w-[85%] sm:max-w-sm">
            <SheetHeader>
              <SheetTitle className="font-serif text-2xl text-white">GVS Advogados</SheetTitle>
              <SheetDescription className="text-white/60">
                Associados
              </SheetDescription>
            </SheetHeader>
            <nav className="mt-8 flex flex-col divide-y divide-white/10 border-y border-white/10">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-4 text-base font-medium text-white/80 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <a
              href="#"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-gold bg-gold px-4 py-3 text-sm font-medium text-ink hover:bg-gold-soft"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
