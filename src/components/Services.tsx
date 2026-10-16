import {
  MapPin,
  HeartHandshake,
  GraduationCap,
  PlaneTakeoff,
  ArrowRight,
  Compass,
  MessageCircle,
} from "lucide-react";
import { SERVICES_DATA, SITE_INFO } from "@/data/siteData";

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MapPin":
        return <MapPin className="w-5 h-5 text-white" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5 text-white" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-white" />;
      case "PlaneTakeoff":
        return <PlaneTakeoff className="w-5 h-5 text-white" />;
      default:
        return <Compass className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="layanan" className="py-16 sm:py-24 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="flex items-center justify-center gap-2">
            <span className="w-5 h-0.5 bg-orange-500 rounded-full" />
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
              RUTE & LAYANAN KAMI
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B1B3D] tracking-tight">
            Layanan & Destinasi Favorit
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
            Dari tour pariwisata antar pulau, ziarah makam wali, study tour sekolah, hingga carter drop bandara Solo & Semarang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              className="group p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF] flex items-center justify-center shadow-md">
                    {getIcon(srv.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white text-[#0B1B3D] border border-slate-200 shadow-sm">
                    {srv.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B1B3D] group-hover:text-[#0066FF] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs font-semibold text-orange-500 mt-1">
                    {srv.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {srv.description}
                </p>

                <div className="pt-1">
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Destinasi Sering Dikunjungi:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {srv.destinations.map((dest, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-white text-slate-700 border border-slate-200/70"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200">
                <a
                  href={`https://wa.me/${SITE_INFO.waNumber}?text=${encodeURIComponent(
                    `Halo Fani Jaya Trans, saya ingin konsultasi layanan sewa bus untuk: ${srv.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0066FF] hover:text-blue-700 group-hover:translate-x-1 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  <span>Konsultasi Rute Ini via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
