import Image from "next/image";
import {
  MessageCircle,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Clock,
} from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-16 md:py-32 overflow-hidden bg-[#0B1B3D]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bus.jpg"
          alt="Armada Bus Pariwisata Fani Jaya Trans Boyolali"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:object-[center_right]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/40 pointer-events-none z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl space-y-6 text-left drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)]">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-0.5 bg-orange-500 rounded-full" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-orange-400 uppercase">
              FANI JAYA TRANS BOYOLALI
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.15]">
            Sewa Bus Pariwisata <br />
            <span className="text-orange-500">Aman & Nyaman</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-100 font-normal leading-relaxed max-w-xl">
            Nikmati perjalanan wisata bersama Fani Jaya Trans Boyolali. Dengan armada modern, sopir berpengalaman dan layanan terbaik, perjalanan Anda jadi lebih menyenangkan.
          </p>

          <div className="pt-2">
            <a
              href={`https://wa.me/${SITE_INFO.waNumber}?text=Halo%20Fani%20Jaya%20Trans,%20saya%20ingin%20konsultasi%20jadwal%20dan%20sewa%20bus%20pariwisata`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 pulse-glow-orange"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Pesan Sekarang via WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-sky-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-medium">
                Pelayanan Cepat Respon 24 Jam
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-orange-400">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-medium">
                Boyolali - Jawa Tengah • Siap Melayani Seluruh Indonesia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
