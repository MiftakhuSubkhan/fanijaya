"use client";

import { useState } from "react";
import {
  Calculator,
  Bus,
  MessageCircle,
  Clock,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  MapPin,
  Calendar,
} from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

export default function BookingEstimator() {
  const [fleetType, setFleetType] = useState("Big Bus (45-59 Seat)");
  const [originCity, setOriginCity] = useState("Boyolali / Solo Raya");
  const [destination, setDestination] = useState("Yogyakarta / Solo Raya");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("1 Hari (PP)");
  const [passengerCount, setPassengerCount] = useState("40-50 Orang");
  const [notes, setNotes] = useState("");

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();

    const busType = fleetType.includes("Big Bus") ? "Big Bus (45-59 Seat)" : "Medium Bus (31-35 Seat)";
    const kotaAsal = originCity.trim() || "Boyolali / Solo Raya";
    const tujuan = destination.trim() || "Yogyakarta / Solo Raya";
    const tgl = date ? date : "Segera (Jadwal Menyesuaikan)";

    const message = `Halo Fani Jaya Trans, saya ingin sewa bus dengan detail berikut:
- Kota Asal: ${kotaAsal}
- Tujuan: ${tujuan}
- Tanggal: ${tgl}
- Jenis Bus: ${busType}
${duration ? `- Durasi: ${duration}\n` : ""}${passengerCount ? `- Jumlah Penumpang: ${passengerCount}\n` : ""}${notes ? `- Catatan: ${notes}\n` : ""}
Mohon info ketersediaan unit dan estimasi harganya ya. Terima kasih!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${SITE_INFO.waNumber}?text=${encoded}`, "_blank");
  };

  return (
    <section id="estimasi" className="py-16 sm:py-24 bg-[#EEF4FB] text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="flex items-center gap-2">
              <span className="w-5 h-0.5 bg-orange-500 rounded-full" />
              <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
                ESTIMASI & KONSULTASI
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B1B3D] tracking-tight">
              Rencanakan Perjalanan Wisata Anda Bersama Kami
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Dapatkan perkiraan tarif sewa bus paling hemat tanpa biaya tersembunyi. Isi data rute singkat di samping dan tim admin kami akan langsung memberikan penawaran resmi via WhatsApp dalam hitungan menit.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-[#0066FF]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0B1B3D]">Konsultasi Rute 100% Gratis</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Bebas tanya rekomendasi destinasi dan jalur perjalanan terbaik.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 text-orange-500">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0B1B3D]">Respon Cepat 24 Jam Siap Melayani</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Admin WhatsApp kami siaga melayani kebutuhan rombongan Anda.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0B1B3D]">Kunci Armada Cukup DP Ringan</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Kunci unit bus impian Anda dengan sistem pembayaran amanah.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-9 rounded-3xl bg-white border border-slate-200/80 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] relative">
              <div className="pb-5 mb-5 border-b border-slate-100">
                <h3 className="text-lg sm:text-xl font-bold text-[#0B1B3D] flex items-center gap-2">
                  <Bus className="w-5 h-5 text-[#0066FF]" />
                  Formulir Cek Tarif Sewa Bus
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Pilih spesifikasi kebutuhan rombongan Anda untuk pesan otomatis ke WhatsApp.
                </p>
              </div>

              <form onSubmit={handleWhatsAppBooking} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
                    1. Pilihan Tipe Armada
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFleetType("Big Bus (45-59 Seat)")}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        fleetType.includes("Big Bus")
                          ? "bg-blue-50/80 border-[#0066FF] text-[#0B1B3D] shadow-sm"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm">Big Bus Pariwisata</div>
                      <div className="text-[11px] text-[#0066FF] mt-0.5 font-medium">45 – 59 Kursi Penumpang</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFleetType("Medium Bus (31-35 Seat)")}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        fleetType.includes("Medium Bus")
                          ? "bg-blue-50/80 border-[#0066FF] text-[#0B1B3D] shadow-sm"
                          : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm">Medium Bus Pariwisata</div>
                      <div className="text-[11px] text-[#0066FF] mt-0.5 font-medium">31 – 35 Kursi Penumpang</div>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                      2. Kota Asal / Titik Jemput
                    </label>
                    <input
                      type="text"
                      value={originCity}
                      onChange={(e) => setOriginCity(e.target.value)}
                      placeholder="Contoh: Boyolali / Solo / Karanggede"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                      3. Rute / Destinasi Tujuan
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF] cursor-pointer"
                    >
                      <option value="Yogyakarta / Solo Raya">Wisata Yogyakarta / Solo Raya</option>
                      <option value="Gunung Bromo & Malang">Malang & Gunung Bromo</option>
                      <option value="Pulau Bali (3-5 Hari)">Pulau Bali (Dewata Tour)</option>
                      <option value="Pulau Lombok & Gili">Lombok & Gili Trawangan</option>
                      <option value="Ziarah Wali Songo">Ziarah Wali Songo (Jateng - Jatim)</option>
                      <option value="Jakarta - Bandung (Study Tour)">Jakarta - Bandung (Study Tour)</option>
                      <option value="Dieng / Tawangmangu">Dieng / Tawangmangu</option>
                      <option value="Drop Bandara Solo / Semarang">Drop Bandara Solo / Semarang</option>
                      <option value="Rute Kustom Lainnya">Rute Kustom Lainnya</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                      4. Tanggal Rencana Berangkat
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                      5. Durasi Sewa
                    </label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF] cursor-pointer"
                    >
                      <option value="1 Hari (PP)">1 Hari (PP)</option>
                      <option value="2 Hari 1 Malam">2 Hari 1 Malam</option>
                      <option value="3 Hari 2 Malam">3 Hari 2 Malam</option>
                      <option value="4 Hari 3 Malam">4 Hari 3 Malam</option>
                      <option value="5 Hari atau Lebih">5 Hari atau Lebih</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                      6. Jumlah Penumpang
                    </label>
                    <select
                      value={passengerCount}
                      onChange={(e) => setPassengerCount(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF] cursor-pointer"
                    >
                      <option value="20 - 30 Orang">20 - 30 Orang (Medium Bus)</option>
                      <option value="31 - 35 Orang">31 - 35 Orang (Medium Bus)</option>
                      <option value="40 - 50 Orang">40 - 50 Orang (Big Bus)</option>
                      <option value="51 - 59 Orang">51 - 59 Orang (Big Bus)</option>
                      <option value="Multi Bus (> 60 Orang)">Multi Bus (&gt; 60 Orang)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                      7. Catatan Tambahan (Opsional)
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Contoh: Ada jemput di 2 titik"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full font-bold text-sm text-white bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 cursor-pointer mt-3"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Kirim & Cek Tarif via WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
