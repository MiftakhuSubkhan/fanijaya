import {
  Bus,
  UserCheck,
  Armchair,
  Wallet,
} from "lucide-react";

const WHY_CHOOSE_ITEMS = [
  {
    id: "armada-terawat",
    title: "Armada Terawat",
    description: "Bus selalu dalam kondisi prima dan rutin diservis.",
    icon: Bus,
    circleColor: "bg-[#0066FF]",
  },
  {
    id: "sopir-berpengalaman",
    title: "Sopir Berpengalaman",
    description: "Sopir profesional, ramah, dan mengutamakan keselamatan.",
    icon: UserCheck,
    circleColor: "bg-[#E63946]",
  },
  {
    id: "fasilitas-lengkap",
    title: "Fasilitas Lengkap",
    description: "AC, reclining seat, TV, audio, WiFi dan lain-lain.",
    icon: Armchair,
    circleColor: "bg-[#FF8A00]",
  },
  {
    id: "harga-terjangkau",
    title: "Harga Terjangkau",
    description: "Pilihan harga terbaik dengan pelayanan maksimal.",
    icon: Wallet,
    circleColor: "bg-[#0066FF]",
  },
];

export default function Features() {
  return (
    <section id="keunggulan" className="py-16 sm:py-24 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2">
            <span className="w-5 h-0.5 bg-orange-500 rounded-full" />
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
              KEUNGGULAN KAMI
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B1B3D] tracking-tight">
            Mengapa Memilih Fani Jaya Trans?
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            Kami berkomitmen memberikan pelayanan terbaik untuk setiap perjalanan Anda, dengan mengutamakan keamanan, kenyamanan dan kepuasan pelanggan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {WHY_CHOOSE_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-slate-200 transition-all duration-300 text-center h-full flex flex-col justify-between items-center transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center w-full">
                  <div
                    className={`w-16 h-16 rounded-full ${item.circleColor} text-white flex items-center justify-center mb-5 shadow-md transform group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D] mb-2">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-auto pt-2">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
