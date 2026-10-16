export interface FleetItem {
  id: string;
  name: string;
  category: string;
  tagBadge: string;
  seatCount: string;
  seatConfig: string;
  image: string;
  description: string;
  facilities: string[];
  specs: { label: string; value: string }[];
  waMessage: string;
  popularFor: string[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  destinations: string[];
  iconName: string;
  badge: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  rating: number;
  date: string;
  review: string;
  avatarInitials: string;
  destination: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SITE_INFO = {
  name: "Fani Jaya Trans",
  fullName: "Fani Jaya Trans Boyolali",
  tagline: "Sewa Bus Pariwisata Aman & Nyaman Boyolali",
  phone: "0822-8787-9191",
  phoneFormatted: "+62 822-8787-9191",
  waNumber: "6282287879191",
  address: "Jl. Karanggede – Gemolong KM 05, Karangkepoh, Karanggede, Boyolali, Jawa Tengah",
  addressShort: "Karangkepoh, Karanggede, Boyolali",
  hours: "24 Jam Siap Respon",
  googleRating: 4.4,
  googleReviewCount: 230,
  yearsExperience: "8+",
  totalTrips: "1.500+",
  copyrightYear: 2026,
  instagramUrl: "https://www.instagram.com/po.fanijaya?exln=c2Z4NHkzbjdmOHls",
  instagramHandle: "@po.fanijaya",
};

export const FLEET_DATA: FleetItem[] = [
  {
    id: "big-bus",
    name: "Big Bus Pariwisata",
    category: "45 – 59 Seats",
    tagBadge: "Best for School & Corporate Gathering",
    seatCount: "45 - 59 Kursi Penumpang",
    seatConfig: "Konfigurasi Kursi 2-2 / 2-3 (Ergonomis)",
    image: "/images/big-bus.png",
    description:
      "Pilihan armada terbaik untuk rombongan besar sekolah, instansi swasta/pemerintah, study tour, dan family gathering dengan kenyamanan maksimal dan bagasi tembus ekstra lapang.",
    facilities: [
      "Kapasitas 45 - 59 Kursi Reclining Seat",
      "Full AC Dingin Ducting Tiap Baris",
      "Audio Karaoke System & Wireless Mic",
      "Dual LED TV Screen (Depan & Tengah)",
      "Port USB Fast Charger di Setiap Kursi",
      "Bagasi Tembus Luas (Muat Koper & Logistik)",
      "Peralatan Keselamatan & Kotak P3K Lengkap",
      "Dispenser & Bantal Selimut (Sesuai Request)",
    ],
    specs: [
      { label: "Kapasitas", value: "45 - 59 Seat" },
      { label: "Konfigurasi", value: "2-2 atau 2-3" },
      { label: "Pendingin", value: "Full AC Ducting" },
      { label: "Hiburan", value: "Karaoke & Dual TV" },
    ],
    popularFor: [
      "Study Tour Sekolah & Kampus",
      "Family Gathering Perusahaan",
      "Ziarah Wali & Rombongan Religi",
      "Kunjungan Kerja Luar Kota",
    ],
    waMessage: "Halo Fani Jaya Trans, saya ingin tanya harga sewa Big Bus",
  },
  {
    id: "medium-bus",
    name: "Medium Bus Pariwisata",
    category: "31 – 35 Seats",
    tagBadge: "Favorit Keluarga & Instansi",
    seatCount: "31 - 35 Kursi Penumpang",
    seatConfig: "Konfigurasi Kursi 2-2 Lega",
    image: "/images/medium-bus.png",
    description:
      "Armada medium bus yang sangat lincah, elegan, dan nyaman untuk menjangkau destinasi wisata perbukitan atau pegunungan menanjak seperti Tawangmangu, Dieng, Guci, hingga Bromo.",
    facilities: [
      "Kapasitas 31 - 35 Kursi Reclining Mewah",
      "Interior Modern dengan LED Ambient Light",
      "Full AC Dingin Merata ke Seluruh Kabin",
      "Audio System Jernih & Mic Karaoke",
      "LED TV Multimedia Player",
      "USB Charger Port di Area Penumpang",
      "Suspensi Lembut Nyaman di Jalan Berkelok",
      "Lincah untuk Rute Wisata Menanjak & Perbukitan",
    ],
    specs: [
      { label: "Kapasitas", value: "31 - 35 Seat" },
      { label: "Konfigurasi", value: "2-2 Ergonomis" },
      { label: "Penerangan", value: "LED Ambient Light" },
      { label: "Performa", value: "Tangguh Rute Menanjak" },
    ],
    popularFor: [
      "Wisata Keluarga Besar & Arisan",
      "Rombongan Hajatan & Pernikahan",
      "Trip Komunitas & Reuni",
      "Jelajah Wisata Alam Menanjak",
    ],
    waMessage: "Halo Fani Jaya Trans, saya ingin tanya harga sewa Medium Bus",
  },
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: "armada-prima",
    title: "Armada Modern & Prima",
    description:
      "Semua unit bus kami melalui perawatan berkala resmi dan uji kelaikan jalan (KIR) rutin. Interior kabin wangi, higienis, dan selalu dibersihkan sebelum pemberangkatan.",
    iconName: "ShieldCheck",
    badge: "Unit Terawat",
    highlights: ["Uji KIR Berkala Rutin", "Kabin Bersih & Higienis", "Suspensi Udara Empuk"],
  },
  {
    id: "driver-ahli",
    title: "Driver Berpengalaman",
    description:
      "Para pengemudi ramah, berlisensi resmi, sangat memahami rute wisata nasional, serta selalu memprioritaskan keselamatan (safety driving) dan ketepatan waktu rombongan.",
    iconName: "Compass",
    badge: "Ramah & Profesional",
    highlights: ["Paham Rute Wisata Nasional", "Safety Driving Teruji", "Crew Sopan & Siaga"],
  },
  {
    id: "fasilitas-lengkap",
    title: "Fasilitas Lengkap",
    description:
      "Nikmati perjalanan seru tanpa bosan dengan Full AC dingin, Reclining Seat ergonomis, Audio Karaoke mantap, LED TV multimedia, serta USB Charger port di setiap kursi.",
    iconName: "Sparkles",
    badge: "Hiburan & Nyaman",
    highlights: ["Audio Karaoke & Smart TV", "Full AC Dingin Merata", "USB Charger Tiap Kursi"],
  },
  {
    id: "harga-transparan",
    title: "Harga Terjangkau & Transparan",
    description:
      "Tarif sewa kompetitif dan bersahabat dengan rincian biaya yang jelas sejak awal. Konsultasi pemilihan armada serta rancangan rute perjalanan 100% gratis tanpa biaya tersembunyi.",
    iconName: "BadgePercent",
    badge: "Tanpa Biaya Tersembunyi",
    highlights: ["Tarif Bersaing & Fleksibel", "Konsultasi Rute Gratis", "Sistem Pembayaran Mudah"],
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "wisata-jawa-bali-lombok",
    title: "Wisata Jawa – Bali – Lombok",
    subtitle: "Eksplorasi Keindahan Nusantara Bersama Rombongan",
    description:
      "Layanan tour pariwisata antar kota dan antar pulau. Melayani rute populer Yogyakarta, Bromo, Malang, Banyuwangi, Pulau Dewata Bali, hingga pulau eksotis Lombok dengan armada prima.",
    destinations: ["Yogyakarta & Borobudur", "Malang & Gunung Bromo", "Pulau Bali (Kuta, Ubud, Bedugul)", "Lombok & Gili Trawangan"],
    iconName: "MapPin",
    badge: "Antar Pulau & Nasional",
  },
  {
    id: "ziarah-wali-songo",
    title: "Ziarah Wali Songo & Religi",
    subtitle: "Perjalanan Ibadah Khidmat dan Tepat Waktu",
    description:
      "Paket perjalanan ziarah makam auliya dan situs religi di Jawa Tengah, Jawa Timur, hingga Jawa Barat. Crew kami paham betul tata rute ziarah dan siap mendampingi kelancaran ibadah rombongan.",
    destinations: ["Ziarah 5 Wali Jawa Tengah", "Ziarah 9 Wali Jawa - Madura", "Wisata Religi Pamijahan & Banten", "Rombongan Pengajian & Majelis"],
    iconName: "HeartHandshake",
    badge: "Khidmat & Paham Rute",
  },
  {
    id: "study-tour-sekolah",
    title: "Kunjungan Industri & Study Tour",
    subtitle: "Edukasi Siswa & Mahasiswa yang Seru dan Aman",
    description:
      "Mitra terpercaya ratusan sekolah (SD, SMP, SMA, SMK) dan universitas untuk kegiatan study tour, outbound, study tiru, serta kunjungan industri di Jakarta, Bandung, Semarang, dan Surabaya.",
    destinations: ["Study Tour Jakarta - Bandung", "Kunjungan Industri Cikarang / Surabaya", "Outbound & Kemah Edukasi", "Wisata Sejarah & Budaya"],
    iconName: "GraduationCap",
    badge: "Favorit Sekolah & Kampus",
  },
  {
    id: "carter-drop-bandara",
    title: "Carter Drop Bandara & Stasiun",
    subtitle: "Antar Jemput Rombongan Tepat Waktu & Nyaman",
    description:
      "Layanan one-way drop off atau pick-up rombongan tamu dari/ke Bandara Internasional Adi Soemarmo Solo, Bandara Ahmad Yani Semarang, Stasiun Solo Balapan, dan Stasiun Tawang.",
    destinations: ["Bandara Adi Soemarmo Solo", "Bandara Jenderal Ahmad Yani Semarang", "Stasiun Solo Balapan & Jebres", "Stasiun Semarang Tawang / Poncol"],
    iconName: "PlaneTakeoff",
    badge: "On-Time Guarantee",
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "testi-1",
    name: "Bpk. H. Tri Wahyono",
    role: "Ketua Rombongan Paguyuban Warga",
    organization: "Karanggede, Boyolali",
    rating: 5,
    date: "12 Februari 2026",
    review:
      "Alhamdulillah perjalanan ziarah Wali Songo kemarin lancar sekali bersama Fani Jaya Trans. Busnya bersih, AC dingin terus, suspensinya empuk jadi simbah-simbah tidak capek di jalan. Driver Mas Joko dan kernetnya sangat sopan dan sabar menunggu rombongan. Sangat kami rekomendasikan!",
    avatarInitials: "TW",
    destination: "Ziarah Wali Songo (5 Hari)",
  },
  {
    id: "testi-2",
    name: "Ibu Dra. Sri Mulyani, M.Pd",
    role: "Koordinator Kesiswaan & Panitia Tour",
    organization: "SMK Negeri di Solo Raya",
    rating: 5,
    date: "18 Januari 2026",
    review:
      "Sudah 3 tahun berturut-turut sekolah kami mempercayakan study tour siswa ke Fani Jaya Trans. Big Bus-nya selalu unit terbaru, sound karaoke jernih bikin anak-anak enjoy, dan yang terpenting driver mengemudi sangat hati-hati dan taat lalu lintas. Harga sewa sangat bersahabat untuk anggaran sekolah.",
    avatarInitials: "SM",
    destination: "Study Tour Jakarta - Bandung (3 Unit Big Bus)",
  },
  {
    id: "testi-3",
    name: "Keluarga dr. Raditya Pratama",
    role: "Penyelenggara Family Gathering",
    organization: "Boyolali & Surakarta",
    rating: 5,
    date: "3 Januari 2026",
    review:
      "Sewa Medium Bus untuk liburan keluarga besar ke Dieng dan Jogja. Medium bus-nya bertenaga banget melibas tanjakan ekstrem Dieng tanpa kendala sama sekali. Interior dengan lampu LED ambient bikin suasana malam makin mewah. Pasti langganan terus kalau ada agenda tour keluarga!",
    avatarInitials: "RP",
    destination: "Tour Wisata Dieng & Wonosobo (3 Hari)",
  },
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: "Apa saja fasilitas yang sudah termasuk dalam harga sewa bus?",
    answer:
      "Tarif sewa bus pariwisata Fani Jaya Trans umumnya sudah mencakup unit bus pilihan, driver berpengalaman, kernet/co-driver, dan bahan bakar (BBM). Untuk biaya tol, parkir objek wisata, dan tips crew dapat disesuaikan dengan paket all-in atau non-all-in sesuai kesepakatan bersama.",
  },
  {
    question: "Bagaimana cara melakukan pemesanan (booking) dan berapa DP-nya?",
    answer:
      "Pemesanan sangat mudah! Cukup klik tombol WhatsApp di website ini, tentukan tanggal perjalanan, rute tujuan, dan tipe armada. Anda dapat mengunci jadwal armada dengan membayar Uang Muka (DP) mulai dari 20% - 30%. Pelunasan dapat dilakukan maksimal H-3 sebelum keberangkatan.",
  },
  {
    question: "Apakah bisa konsultasi rute dan estimasi waktu perjalanan terlebih dahulu?",
    answer:
      "Tentu saja! Kami memberikan layanan konsultasi rute dan itinerary gratis. Tim kami akan membantu memberikan rekomendasi jalur terbaik, rest area nyaman, dan estimasi waktu perjalanan agar agenda wisata rombongan Anda berjalan lancar dan efisien.",
  },
  {
    question: "Apakah armada Fani Jaya Trans siap melayani perjalanan ke luar Pulau Jawa?",
    answer:
      "Ya, kami sangat berpengalaman melayani rute jarak jauh lintas pulau, khususnya Pulau Bali dan Pulau Lombok, hingga rute Sumatera. Seluruh armada kami dilengkapi surat-surat resmi, asuransi, serta dipastikan dalam kondisi prima untuk perjalanan jauh.",
  },
  {
    question: "Di mana alamat pool dan kantor pusat Fani Jaya Trans?",
    answer:
      "Kantor dan pool kami berlokasi di Jl. Karanggede – Gemolong KM 05, Karangkepoh, Karanggede, Boyolali, Jawa Tengah. Anda dipersilakan datang langsung untuk melihat unit armada kami atau cukup hubungi kami via WhatsApp 24 jam di 0822-8787-9191.",
  },
];
