import { Link } from "@tanstack/react-router";
import { Scale, Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-gold/40 text-gold">
              <Scale className="h-4 w-4" />
            </span>
            <div className="leading-none">
              <div className="font-serif text-xl text-white">GVS Advogados</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-gold-soft/80">
                Associados
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
            [Breve texto institucional placeholder sobre o escritório, sua missão e a forma de
            atendimento personalizada oferecida a cada cliente.]
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 hover:border-gold hover:text-gold transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 hover:border-gold hover:text-gold transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 hover:border-gold hover:text-gold transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg text-white">Navegação</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/" className="hover:text-gold transition-colors">Início</Link></li>
            <li><Link to="/quem-somos" className="hover:text-gold transition-colors">Quem Somos</Link></li>
            <li><Link to="/areas-de-atuacao" className="hover:text-gold transition-colors">Áreas de Atuação</Link></li>
            <li><Link to="/videos" className="hover:text-gold transition-colors">Vídeos</Link></li>
            <li><Link to="/depoimentos" className="hover:text-gold transition-colors">Depoimentos</Link></li>
            <li><Link to="/contato" className="hover:text-gold transition-colors">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-white">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-gold" />
              <span>[Telefone placeholder]</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-gold" />
              <span>[email@placeholder.com.br]</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" />
              <span>[Endereço completo placeholder — Rua, número, cidade, UF]</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} GVS Advogados Associados. Todos os direitos reservados.</span>
          <span>OAB [placeholder] · [Slogan opcional placeholder]</span>
        </div>
      </div>
    </footer>
  );
}
