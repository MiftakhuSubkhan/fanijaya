import {
  MapPin,
  Clock,
  ExternalLink,
  MessageCircle,
  Navigation,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

export default function LocationSection() {
  return (
    <section id="lokasi" className="py-16 sm:py-24 bg-[#F4F8FC] text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2">
            <span className="w-5 h-0.5 bg-orange-500 rounded-full" />
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
              LOKASI POOL & KANTOR
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B1B3D] tracking-tight">
            Kunjungi Pool Bus Fani Jaya Trans
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            Akses sangat mudah dan strategis di tepi jalan raya Karanggede – Gemolong. Anda dipersilakan berkunjung untuk cek kondisi unit armada langsung maupun konsultasi rute perjalanan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.06)] flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-[#0066FF] border border-blue-200/60 mb-3">
                  Pool & Garasi Utama
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0B1B3D]">
                  Fani Jaya Trans Boyolali
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Pusat operasional armada Big Bus & Medium Bus
                </p>
              </div>

              <div className="space-y-4 pt-1 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-[#0B1B3D]">Alamat Lengkap</span>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      {SITE_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-[#0B1B3D]">Jam Operasional & Pelayanan</span>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      Setiap Hari (Senin – Minggu) • <span className="text-emerald-600 font-semibold">24 Jam Siap Respon</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-[#0B1B3D]">Telepon / WhatsApp Reservasi</span>
                    <p className="text-slate-600 mt-0.5 font-bold text-sm sm:text-base">
                      {SITE_INFO.phoneFormatted}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Area parkir bus luas & akses jalan raya mudah</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Bisa cek unit bus langsung sebelum tanda jadi (DP)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Ruang kantor nyaman & crew ramah siap membantu</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.google.com/maps/place/Fani+Jaya+Trans/@-7.3572557,110.673825,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-xs sm:text-sm text-white bg-[#0066FF] hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all text-center"
              >
                <Navigation className="w-4 h-4" />
                <span>Petunjuk Arah (Maps)</span>
              </a>

              <a
                href={`https://wa.me/${SITE_INFO.waNumber}?text=Halo%20Fani%20Jaya%20Trans,%20saya%20ingin%20tanya%20patokan%20lokasi%20pool%20di%20Karanggede`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-xs sm:text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all text-center"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat Admin Pool</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-3xl p-3 sm:p-4 border border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.06)] flex flex-col justify-between overflow-hidden min-h-[380px] sm:min-h-[460px]">
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0B1B3D]">
                <MapPin className="w-4 h-4 text-[#0066FF]" />
                <span>Google Maps • Fani Jaya Trans Boyolali</span>
              </div>
              <a
                href="https://www.google.com/maps/place/Fani+Jaya+Trans/@-7.3572557,110.673825,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0066FF] hover:underline"
              >
                <span>Buka di Aplikasi</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative w-full flex-1 rounded-2xl overflow-hidden bg-slate-100 min-h-[320px] sm:min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.9700329332068!2d110.673825!3d-7.357255700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a75551f1c7f4f%3A0x791633bd464c082!2sFani%20Jaya%20Trans!5e0!3m2!1sid!2sid!4v1792119584863!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Peta Lokasi Pool Fani Jaya Trans Boyolali"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
