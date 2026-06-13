import {
  Benefit,
  NearbyFacility,
  HouseTypeData,
  ConstructionMilestone,
  PaymentOption,
  LegalityDocument,
  FAQItem
} from './types';

export const PROJECT_INFO = {
  name: 'Sekar Darussalam Islamic Village',
  location: 'Klaten Selatan, Klaten, Jawa Tengah',
  startingPrice: 298000000,
  type: 'Tipe 36/72',
  whatsappNumber: '6281234567890',
  adminName: 'Ahmad Hadi',
};

export const BENEFITS: Benefit[] = [
  {
    id: 'b1',
    title: 'Tetangga Muslim Selaras',
    description: 'Tumbuh bersama keluarga muslim yang memiliki kesamaan nilai spiritual, saling menjaga, dan menumbuhkan lingkungan sosial yang baik.',
    iconName: 'Users'
  },
  {
    id: 'b2',
    title: 'Rumah Tahfidz',
    description: 'Pusat belajar Al-Qur’an terintegrasi untuk mendidik karakter moral generasi Robbani sedari dini langsung di kawasan hunian.',
    iconName: 'BookOpen'
  },
  {
    id: 'b3',
    title: 'Infrastruktur Jalan 6-8m',
    description: 'Infrastruktur jalan utama yang lebar dan asri untuk kenyamanan berkendara serta tata lingkungan yang tertata rapi.',
    iconName: 'MapPin'
  },
  {
    id: 'b4',
    title: 'Akad Syariah Bank',
    description: 'Skema pembiayaan murni syariah bekerja sama dengan Bank Syariah Nasional, tanpa denda keterlambatan, tanpa sita, dan tanpa riba.',
    iconName: 'CheckCircle'
  }
];

export const DETAILED_REASONS = [
  {
    title: 'Pendidikan Islami Terbaik',
    description: 'Keberadaan Rumah Tahfidz di kompleks perumahan membantu pembentukan karakter anak sejak usia dini.',
    badge: 'Keluarga Berkarakter'
  },
  {
    title: 'Legalitas Clear & Aman',
    description: 'PBG/IMB induk serta pemecahan sertifikat (SHM) berstatus beres sempurna dan dapat diverifikasi langsung.',
    badge: 'Legalitas Clear'
  },
  {
    title: 'Arsitektur Islami Nyaman',
    description: 'Desain minimalis modern dengan sirkulasi udara optimal demi menjaga kenyamanan serta privasi keluarga.',
    badge: 'Privasi Terjaga'
  }
];

export const TAHFIDZ_BENEFITS = {
  headline: 'Lingkungan Terbaik Tumbuh Kembang Buah Hati',
  description: 'Kami menghadirkan program pembelajaran Al-Qur’an tepat di tengah kawasan hunian untuk mendampingi adab dan akhlak anak setiap hari.',
  points: [
    {
      title: 'Pembelajaran Terintegrasi',
      desc: 'Bukan sekadar kegiatan tambahan, melainkan program terencana untuk mendukung hafalan Al-Qur’an anak Anda.'
    },
    {
      title: 'Adab dan Akhlak Islami',
      desc: 'Membiasakan salat berjamaah di mushala kawasan dan melatih pembiasaan sunnah harian bersama tetangga muslim.'
    },
    {
      title: 'Pendekatan Menyenangkan',
      desc: 'Metode belajar yang ramah anak, memupuk kecintaan membaca Al-Qur’an secara natural tanpa tekanan.'
    }
  ]
};

export const NEARBY_FACILITIES: NearbyFacility[] = [
  { name: 'Mushola Thoriqul Jannah (Dalam Kompleks)', distance: '0 Meter', category: 'mosque', minutes: 1 },
  { name: 'SDIT & SMPIT Unggulan Klaten Selatan', distance: '2.0 km', category: 'education', minutes: 5 },
  { name: 'Pondok Pesantren Tahfidzul Qur’an', distance: '2.5 km', category: 'education', minutes: 6 },
  { name: 'Masjid Agung Al-Aqsha Klaten', distance: '3.5 km', category: 'mosque', minutes: 8 },
  { name: 'RSUD Bagas Waras Klaten', distance: '1.2 km', category: 'healthcare', minutes: 3 },
  { name: 'Klinik Pratama & Bersalin 24 Jam', distance: '1.8 km', category: 'healthcare', minutes: 4 },
  { name: 'Pasar Tradisional Wedi Klaten', distance: '3.0 km', category: 'shopping', minutes: 7 },
  { name: 'Swalayan & Alun-Alun Kota Klaten', distance: '4.5 km', category: 'shopping', minutes: 10 },
  { name: 'Stasiun Kereta Klaten (Akses KRL Jogja-Solo)', distance: '4.2 km', category: 'transport', minutes: 10 }
];

export const HOUSE_TYPE_SPEC: HouseTypeData = {
  name: 'Griya Darussalam Premium',
  type: 'Tipe 36/72',
  landArea: 72,
  buildingArea: 36,
  priceStarting: 298000000,
  bedrooms: 2,
  bathrooms: 1,
  carports: 1,
  specifications: {
    pondasi: 'Batu Kali & Beton Bertulang',
    dinding: 'Bata Ringan (Double Dinding), Plester Aci, Cat Premium',
    pintu: 'Kayu Jati Lokal, Kusen Aluminium Powder Coated',
    lantai: 'Granit Tile Ukuran 60 x 60 cm',
    atap: 'Baja Ringan, Genteng Beton Flat (Modern & Durabel)',
    sanitair: 'Kloset Duduk & Shower Mandi',
    listrik: 'Daya PLN 1.300 Watt',
    air: 'Sumur Bor Dalam, Pompa & Tandon Air Terpasang'
  }
};

export const CONSTRUCTION_MILESTONES: ConstructionMilestone[] = [
  {
    phase: 'Tahap 1',
    title: 'Legalitas Lahan & SHM',
    date: 'Januari - Maret 2026',
    status: 'completed',
    description: 'Lahan lunas tanpa sengketa. Sertifikat (SHM) induk serta perizinan PBG/IMB telah terbit resmi.',
    progressPercentage: 100
  },
  {
    phase: 'Tahap 2',
    title: 'Infrastruktur & Drainase',
    date: 'April - Mei 2026',
    status: 'completed',
    description: 'Pembersihan lahan, perataan (cut & fill), dan pembangunan saluran pembuangan air beton precast.',
    progressPercentage: 100
  },
  {
    phase: 'Tahap 3',
    title: 'Pintu Gerbang & Mushola',
    date: 'Juni - Juli 2026',
    status: 'in-progress',
    description: 'Pembangunan pos keamanan, gapura utama kawasan, serta landasan pondasi Mushola internal.',
    progressPercentage: 45
  },
  {
    phase: 'Tahap 4',
    title: 'Konstruksi Unit Rumah',
    date: 'Agustus - Desember 2026',
    status: 'upcoming',
    description: 'Pembangunan fisik unit rumah secara bertahap mulai dari struktur pondasi, dinding, hingga rangka atap.',
    progressPercentage: 0
  }
];

export const PAYMENT_OPTIONS: PaymentOption[] = [
  {
    title: 'Cash Keras Promo',
    subtitle: 'Skema Paling Hemat & Banyak Dipilih',
    description: 'Opsi terbaik bagi Anda yang memiliki dana siap pakai. Nikmati potongan harga langsung puluhan juta rupiah.',
    badge: 'Diskon Terbesar',
    points: [
      'Harga Spesial mulai 298 Juta Saja (Net)',
      'Bebas biaya Notaris, AJB, dan balik nama SHM',
      'Prioritas utama dalam pemilihan nomor kavling strategis'
    ],
    isPopular: true
  },
  {
    title: 'KPR Bank Syariah',
    subtitle: 'Kemitraan Bank Syariah Terpercaya',
    description: 'Pembelian unit inden menggunakan KPR Syariah dangan akad pesanan bangun (Istishna\') yang aman dan diawasi DSN-MUI.',
    badge: 'Kemitraan Bank',
    points: [
      'Angsuran bulanan tetap (flat margin) hingga lunas',
      'Diawasi ketat oleh Dewan Syariah Nasional bebas riba',
      'Pendampingan penuh oleh tim kami dari berkas hingga akad selesai'
    ],
    isPopular: false
  },
  {
    title: 'Cash Bertahap Developer',
    subtitle: 'Skema Cicilan Fleksibel Tanpa Margin',
    description: 'Angsuran bulanan ringan dicicil langsung ke developer tanpa verifikasi BI checking yang rumit.',
    badge: 'Bunga 0%',
    points: [
      'Murni dicicil tanpa denda pelunasan murni',
      'Legalitas aman diikat di hadapan Notaris resmi',
      'Tenor fleksibel disesuaikan dengan kemampuan kas keluarga'
    ],
    isPopular: false
  }
];

export const LEGALITY_DOCUMENTS: LegalityDocument[] = [
  {
    name: 'Sertifikat Hak Milik (SHM)',
    statusLabel: 'Siap Balik Nama',
    description: 'Lahan berstatus Sertifikat Hak Milik (SHM) murni, aman tanpa sengketa dan siap dibalik nama ke pembeli.',
    isVerified: true
  },
  {
    name: 'Persetujuan Bangunan Gedung (IMB)',
    statusLabel: 'Izin Terbit',
    description: 'Keselarasan tata ruang kawasan terjamin dengan izin PBG/IMB induk yang telah terbit resmi.',
    isVerified: true
  },
  {
    name: 'Izin Tata Ruang Kawasan',
    statusLabel: 'Lengkap',
    description: 'Verifikasi tata guna lahan kering non-banjir, bebas dari zona hijau pertanian basah.',
    isVerified: true
  },
  {
    name: 'Asosiasi Developer PT',
    statusLabel: 'Terdaftar Resmi',
    description: 'Dikembangkan oleh PT Sekar Mandiri Berkah, berbadan hukum sah dengan akreditasi terpercaya.',
    isVerified: true
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'construction',
    question: 'Apakah proyek perumahan ini sudah mulai dibangun?',
    answer: 'Ya, saat ini proyek sedang membangun gapura gerbang utama, pos keamanan, serta landasan pondasi Mushola. Pekerjaan cut-and-fill lahan serta drainase beton precast telah selesai dikerjakan.'
  },
  {
    category: 'legal',
    question: 'Bagaimana status kepemilikan tanah dan sertifikatnya?',
    answer: 'Status tanah adalah Sertifikat Hak Milik (SHM). Setiap unit rumah yang diserahterimakan akan mendapatkan SHM pecah kapling dan izin bangunan (PBG/IMB) atas nama pembeli.'
  },
  {
    category: 'payment',
    question: 'Bagaimana skema pembayaran KPR Bank Syariah?',
    answer: 'KPR Syariah kami diproses melalui partner Bank Syariah mitra tepercaya menggunakan akad Istishna\' (pesanan bangun). Margin bersifat murni flat sehingga angsuran Anda tetap dari awal hingga masa akhir tenor.'
  },
  {
    category: 'general',
    question: 'Apakah diperbolehkan mengubah tata letak ruangan (custom layout)?',
    answer: 'Tentu bisa. Untuk pembelian dengan akad pesanan bangun (istishna), kami menyediakan fasilitas konsultasi tata interior ruang secara gratis selama tidak mengubah batas luar bangunan.'
  }
];

export const SOCIAL_PROOFS = [
  {
    name: 'Bapak Haris & Ibu Nisa',
    status: 'Pembeli Kavling 04',
    avatarText: 'HN',
    comment: 'Alhamdulillah, membeli lewat skema Bank Syariah di sini sangat menenangkan. Angsuran murni flat tanpa khawatir bunga mengambang atau denda.'
  },
  {
    name: 'Ibu Fatimah',
    status: 'Pembeli Kavling 11',
    avatarText: 'IF',
    comment: 'Kami sangat mengapresiasi visi developer menyediakan sarana Rumah Tahfidz demi masa depan adab dan akhlak anak-anak di kompleks.'
  }
];
