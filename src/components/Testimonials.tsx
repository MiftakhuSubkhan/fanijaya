import { Star } from "lucide-react";

const TESTIMONIAL_ITEMS = [
  {
    id: "testi-1",
    name: "Rizky Pratama",
    avatar: "RP",
    avatarBg: "bg-blue-600",
    rating: 5,
    review:
      "Pelayanannya sangat memuaskan, bus bersih, nyaman, sopirnya ramah dan profesional. Pasti akan pakai lagi untuk trip berikutnya!",
    tag: "Rombongan Wisata • Semarang",
  },
  {
    id: "testi-2",
    name: "Siti Nurhaliza",
    avatar: "SN",
    avatarBg: "bg-orange-500",
    rating: 5,
    review:
      "Harga sesuai dengan fasilitas yang didapat. Perjalanan jadi lebih menyenangkan bersama Fani Jaya Trans.",
    tag: "Family Trip • Yogyakarta",
  },
  {
    id: "testi-3",
    name: "Andi Setiawan",
    avatar: "AS",
    avatarBg: "bg-emerald-600",
    rating: 5,
    review:
      "Armada bagus, tepat waktu, dan sangat membantu selama perjalanan. Sangat recommended untuk study tour sekolah!",
    tag: "Study Tour • Solo Raya",
  },
  {
    id: "testi-4",
    name: "Dewi Lestari",
    avatar: "DL",
    avatarBg: "bg-purple-600",
    rating: 5,
    review:
      "Sopirnya ramah, bus nyaman, ac dingin, dan pelayanan cepat. Terima kasih banyak Fani Jaya Trans Boyolali!",
    tag: "Wisata Keluarga • Dieng",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-16 sm:py-24 bg-[#0B1B3D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2">
            <span className="w-5 h-0.5 bg-orange-500 rounded-full" />
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
              TESTIMONI PELANGGAN
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Apa Kata Mereka?
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            Terima kasih atas kepercayaan pelanggan kami. Berikut beberapa ulasan nyata dari mereka yang telah merasakan kenyamanan armada kami.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIAL_ITEMS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white text-slate-800 shadow-xl border border-white/10 flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full ${item.avatarBg} text-white font-bold flex items-center justify-center text-xs shadow-sm flex-shrink-0`}
                  >
                    {item.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0B1B3D]">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-0.5 text-amber-400 mt-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <span className="inline-block text-[11px] font-medium text-slate-400">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
