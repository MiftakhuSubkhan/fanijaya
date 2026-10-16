import Link from "next/link";
import {
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
  Phone,
} from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

export default function ContactFooter() {
  return (
    <footer id="kontak" className="bg-[#071328] text-white pt-16 sm:pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800/80 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight">
                FANI JAYA <span className="text-orange-500">TRANS</span>
              </span>
              <span className="text-[10px] font-bold text-sky-400 tracking-widest uppercase">
                BOYOLALI
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300">
              Perjalanan Nyaman, Kenangan Tak Terlupakan.
            </p>

            <a
              href={`https://wa.me/${SITE_INFO.waNumber}?text=Halo%20Fani%20Jaya%20Trans,%20saya%20ingin%20tanya%20sewa%20bus`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-xl shadow-orange-600/20 transition-all duration-200 transform hover:-translate-y-0.5 max-w-lg"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <span className="block text-[11px] font-medium text-orange-100 uppercase tracking-wider">
                    Hubungi Kami via WhatsApp
                  </span>
                  <span className="block text-lg sm:text-2xl font-black text-white tracking-wide">
                    {SITE_INFO.phoneFormatted}
                  </span>
                </div>
              </div>
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5" />
              </div>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white text-xs mb-0.5">Alamat Pool:</span>
                  <p className="text-slate-400 leading-snug">
                    {SITE_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-bold text-white text-xs mb-0.5">Jam Operasional:</span>
                  <p className="text-slate-400 leading-snug">
                    Setiap Hari <br />
                    24 Jam Siap Respon
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${SITE_INFO.waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="WhatsApp Fani Jaya Trans"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={SITE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-pink-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Instagram @po.fanijaya"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={SITE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-300 hover:text-pink-400 font-semibold transition-colors ml-1"
              >
                {SITE_INFO.instagramHandle}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-6 bg-slate-900/50 p-6 rounded-2xl border border-slate-800/80">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Menu Navigasi
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <Link href="#hero" className="hover:text-orange-400 transition-colors">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link href="#keunggulan" className="hover:text-orange-400 transition-colors">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="#armada" className="hover:text-orange-400 transition-colors">
                    Pilihan Armada
                  </Link>
                </li>
                <li>
                  <Link href="#layanan" className="hover:text-orange-400 transition-colors">
                    Rute Wisata
                  </Link>
                </li>
                <li>
                  <Link href="#testimoni" className="hover:text-orange-400 transition-colors">
                    Testimoni Pelanggan
                  </Link>
                </li>
                <li>
                  <Link href="#lokasi" className="hover:text-orange-400 transition-colors">
                    Lokasi Pool & Garasi
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Layanan Armada
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <Link href="#armada" className="hover:text-orange-400 transition-colors">
                    Big Bus 45-59 Seat
                  </Link>
                </li>
                <li>
                  <Link href="#armada" className="hover:text-orange-400 transition-colors">
                    Medium Bus 31-35 Seat
                  </Link>
                </li>
                <li>
                  <Link href="#layanan" className="hover:text-orange-400 transition-colors">
                    Tour Jawa - Bali - Lombok
                  </Link>
                </li>
                <li>
                  <Link href="#layanan" className="hover:text-orange-400 transition-colors">
                    Ziarah Wali Songo
                  </Link>
                </li>
                <li>
                  <Link href="#layanan" className="hover:text-orange-400 transition-colors">
                    Study Tour & Industri
                  </Link>
                </li>
                <li>
                  <Link href="#estimasi" className="hover:text-orange-400 transition-colors">
                    Cek Estimasi Biaya
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-slate-500">
          <p>© {SITE_INFO.copyrightYear} {SITE_INFO.fullName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
