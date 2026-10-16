import Image from "next/image";
import {
  Users,
  AirVent,
  Tv,
  Wifi,
  Luggage,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { SITE_INFO } from "@/data/siteData";

const FLEET_ITEMS = [
  {
    id: "big-bus",
    name: "Big Bus (45–59 Seat)",
    tag: "BIG BUS",
    tagColor: "bg-[#EF4444]",
    seatBadge: "45–59 Seat",
    image: "/images/big-bus.png",
    specsCol1: [
      { icon: Users, label: "Kapasitas 45 - 59 Penumpang" },
      { icon: AirVent, label: "AC, Reclining Seat" },
      { icon: Tv, label: "TV, Audio, Karaoke" },
    ],
    specsCol2: [
      { icon: Wifi, label: "WiFi & Fast USB Charger" },
      { icon: Luggage, label: "Bagasi Tembus Ekstra Luas" },
      { icon: Sparkles, label: "Bantal & Selimut (Sesuai Request)" },
    ],
    waMessage: "Halo Fani Jaya Trans, saya ingin cek harga sewa Big Bus",
  },
  {
    id: "medium-bus",
    name: "Medium Bus (31–35 Seat)",
    tag: "MEDIUM BUS",
    tagColor: "bg-[#0066FF]",
    seatBadge: "31–35 Seat",
    image: "/images/medium-bus.png",
    specsCol1: [
      { icon: Users, label: "Kapasitas 31 - 35 Penumpang" },
      { icon: AirVent, label: "AC, Reclining Seat" },
      { icon: Tv, label: "TV, Audio, Karaoke" },
    ],
    specsCol2: [
      { icon: Wifi, label: "WiFi & Fast USB Charger" },
      { icon: Luggage, label: "Bagasi Luas Nyaman" },
      { icon: Sparkles, label: "Lincah di Jalur Menanjak" },
    ],
    waMessage: "Halo Fani Jaya Trans, saya ingin cek harga sewa Medium Bus",
  },
];

export default function Fleet() {
  return (
    <section id="armada" className="py-16 sm:py-24 bg-[#F4F8FC] text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl sm:max-w-4xl mx-auto space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2">
            <span className="w-5 h-0.5 bg-orange-500 rounded-full" />
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
              KATALOG ARMADA
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B1B3D] tracking-tight sm:whitespace-nowrap">
            Pilihan Armada Sesuai Kebutuhan Anda
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            Kami menyediakan berbagai pilihan bus pariwisata dengan fasilitas lengkap, nyaman dan siap menemani perjalanan wisata Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {FLEET_ITEMS.map((fleet) => (
            <div
              key={fleet.id}
              className="group rounded-3xl bg-white border border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`inline-block px-3.5 py-1 rounded-full text-[11px] font-black text-white tracking-wider ${fleet.tagColor} shadow-md backdrop-blur-sm`}
                    >
                      {fleet.tag}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold text-white bg-[#0B1B3D]/90 backdrop-blur-sm shadow-md">
                      {fleet.seatBadge}
                    </span>
                  </div>

                  <Image
                    src={fleet.image}
                    alt={fleet.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B1B3D]">
                    {fleet.name}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-600">
                    <div className="space-y-3">
                      {fleet.specsCol1.map((spec, i) => {
                        const Icon = spec.icon;
                        return (
                          <div key={i} className="flex items-center gap-2.5">
                            <Icon className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
                            <span className="font-medium text-slate-700">{spec.label}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="space-y-3">
                      {fleet.specsCol2.map((spec, i) => {
                        const Icon = spec.icon;
                        return (
                          <div key={i} className="flex items-center gap-2.5">
                            <Icon className="w-4 h-4 text-[#0066FF] flex-shrink-0" />
                            <span className="font-medium text-slate-700">{spec.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <a
                  href={`https://wa.me/${SITE_INFO.waNumber}?text=${encodeURIComponent(fleet.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full font-bold text-sm text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md shadow-orange-500/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Cek Harga</span>
                  <ChevronRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
