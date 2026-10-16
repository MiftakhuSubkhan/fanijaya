"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end pointer-events-auto">
      {showTooltip && (
        <div className="mb-3 max-w-[240px] sm:max-w-[270px] bg-slate-900 border border-emerald-500/50 text-white rounded-2xl p-3.5 shadow-2xl relative animate-bounce motion-reduce:animate-none">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute top-2 right-2 text-slate-400 hover:text-white p-0.5 rounded-full"
            aria-label="Tutup pesan bantuan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Customer Service Online</span>
          </div>
          <p className="text-xs text-slate-200 leading-snug">
            Butuh info ketersediaan armada atau cek tarif sewa? <span className="font-semibold text-white">Chat kami sekarang!</span>
          </p>
        </div>
      )}

      <a
        href={`https://wa.me/${SITE_INFO.waNumber}?text=Halo%20Fani%20Jaya%20Trans,%20saya%20ingin%20info%20ketersediaan%20armada%20bus`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-500 text-white shadow-2xl shadow-emerald-950/60 hover:scale-110 active:scale-95 transition-all duration-300 pulse-glow-wa focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
        aria-label="Chat WhatsApp Fani Jaya Trans"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current" />

        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500 border-2 border-slate-950" />
        </span>
      </a>
    </div>
  );
}
