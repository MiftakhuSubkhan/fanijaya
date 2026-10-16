"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  PhoneCall,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

const NAV_LINKS = [
  { name: "Beranda", href: "#hero" },
  { name: "Tentang Kami", href: "#keunggulan" },
  { name: "Armada", href: "#armada" },
  { name: "Layanan", href: "#layanan" },
  { name: "Testimoni", href: "#testimoni" },
  { name: "Lokasi Pool", href: "#lokasi" },
  { name: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B1B3D]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10 py-3 sm:py-3.5"
            : "bg-transparent border-b border-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="#hero"
              className="flex flex-col group focus:outline-none"
            >
              <span className="text-lg sm:text-xl font-black tracking-tight text-white leading-tight drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                FANI JAYA <span className="text-orange-500">TRANS</span>
              </span>
              <span className="text-[10px] font-bold text-sky-400 tracking-widest uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                BOYOLALI
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs xl:text-sm font-bold text-white hover:text-orange-400 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center">
              <a
                href={`https://wa.me/${SITE_INFO.waNumber}?text=Halo%20Fani%20Jaya%20Trans,%20saya%20ingin%20tanya%20sewa%20bus`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <PhoneCall className="w-3.5 h-3.5 text-white" />
                <span>Pesan Sekarang</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </a>
            </div>

            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors focus:outline-none"
                aria-label={isOpen ? "Tutup menu" : "Buka menu"}
              >
                {isOpen ? <X className="w-5 h-5 text-orange-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[450px] opacity-100 border-b border-slate-800 bg-[#08142c]/98 backdrop-blur-xl" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 pb-6 space-y-2">
            <div className="grid grid-cols-1 gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800">
              <a
                href={`https://wa.me/${SITE_INFO.waNumber}?text=Halo%20Fani%20Jaya%20Trans,%20saya%20ingin%20tanya%20sewa%20bus`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full font-bold text-sm text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-md shadow-orange-500/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pesan Sekarang via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
