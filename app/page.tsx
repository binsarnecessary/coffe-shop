import ContactForm from "@/components/ContactForm";
import { site, waLink } from "@/lib/site";

const menu = [
  { icon: "🌅", name: "Es Kopi Senja", desc: "Signature kami — espresso, gula aren, susu segar, dan sentuhan pandan.", price: "Rp24.000" },
  { icon: "☕", name: "Manual Brew V60", desc: "Single origin pilihan (Gayo / Toraja / Kintamani), diseduh perlahan.", price: "Rp28.000" },
  { icon: "🥛", name: "Butterscotch Latte", desc: "Espresso double shot dengan butterscotch house-made dan susu oat.", price: "Rp32.000" },
  { icon: "🍰", name: "Basque Burnt Cheesecake", desc: "Lembut di dalam, karamel di luar. Pasangan sempurna kopi hitam.", price: "Rp35.000" },
  { icon: "🍞", name: "Sourdough Toast", desc: "Roti sourdough panggang dengan scrambled egg dan smoked beef.", price: "Rp38.000" },
  { icon: "🍵", name: "Houjicha Latte", desc: "Teh hijau panggang Jepang dengan susu segar.", price: "Rp30.000" },
];

const gallery = [
  { emoji: "☕", bg: "from-amber to-[#8a5a2b]" },
  { emoji: "🪴", bg: "from-brown to-[#7a4a28]" },
  { emoji: "🥐", bg: "from-[#e0b878] to-amber" },
  { emoji: "📖", bg: "from-[#6b4226] to-brown" },
  { emoji: "🎶", bg: "from-[#8a5a2b] to-amber" },
  { emoji: "🌇", bg: "from-brown-dark to-[#6b4226]" },
];

const packages = [
  {
    name: "Coffee Break",
    price: "Rp45rb",
    unit: "/pax",
    featured: false,
    items: ["Kopi / teh pilihan", "2 kudapan", "Min. 10 pax", "Area reguler"],
  },
  {
    name: "Semi-Private",
    price: "Rp85rb",
    unit: "/pax",
    featured: true,
    items: ["Kopi + mocktail", "Main course + dessert", "Min. 15 pax", "Area semi-private + proyektor"],
  },
  {
    name: "Full Buyout",
    price: "Hubungi Kami",
    unit: "",
    featured: false,
    items: ["Seluruh venue (60 pax)", "Custom menu", "Sound system + dekorasi", "Barista station"],
  },
];

const testimonials = [
  { text: "Es Kopi Senjanya juara. Tempatnya nyaman banget buat WFC, WiFi kencang dan banyak colokan.", name: "Dita Ramadhani", role: "Freelance Designer" },
  { text: "Sering meeting tim di sini. Paket semi-private-nya worth it, ada proyektor dan tempatnya tenang.", name: "Fajar Nugroho", role: "Startup Founder" },
  { text: "Manual brew-nya konsisten enak. Baristanya paham banget origin dan mau menjelaskan. Recommended!", name: "Kevin Halim", role: "Coffee Enthusiast" },
];

const faqs = [
  { q: "Apakah bisa reservasi tempat?", a: "Bisa. Reservasi gratis untuk 4+ orang melalui WhatsApp, minimal H-1. Untuk event gunakan paket di atas." },
  { q: "Apakah tersedia WiFi dan colokan?", a: "Ya, WiFi 100 Mbps dan colokan tersedia di hampir semua meja. Cocok untuk kerja dan meeting online." },
  { q: "Apakah ada menu non-kopi?", a: "Ada — houjicha latte, chocolate, aneka tea, dan mocktail. Semua dibuat dengan bahan berkualitas sama." },
  { q: "Apakah biji kopi bisa dibeli?", a: "Bisa. Kami menjual roasted beans 200g dari semua origin kami. Bisa digiling sesuai metode seduh Anda." },
  { q: "Di mana lokasi dan jam bukanya?", a: `${site.address}. Buka ${site.hours.toLowerCase()}.` },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[3px] text-amber">{children}</p>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brown-dark via-brown to-[#6b4226] py-28 text-cream">
        <span aria-hidden className="absolute -bottom-20 -right-10 rotate-[-15deg] text-[340px] opacity-[0.07]">☕</span>
        <div className="relative mx-auto max-w-5xl px-5">
          <Eyebrow>☕ Specialty Coffee · Jakarta</Eyebrow>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
            Tempat Terbaik Menikmati Senja &amp; Kopi
          </h1>
          <p className="mt-6 max-w-lg text-lg text-[#e8d9c5]">
            Biji kopi pilihan dari petani lokal Indonesia, di-roasting sendiri,
            disajikan dengan hati. Ruang hangat untuk kerja, ngobrol, atau
            sekadar menikmati waktu.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <a href="#menu" className="rounded-full bg-amber px-8 py-3.5 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brown">
              Lihat Menu
            </a>
            <a href="#contact" className="rounded-full border-2 border-cream px-8 py-3.5 font-bold text-cream transition-colors hover:bg-cream hover:text-brown-dark">
              Reservasi Tempat
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-2 text-sm text-[#d9c6ab]">
            <span>★ 4.9 Google Review</span>
            <span>⏰ Buka 08.00–22.00</span>
            <span>📶 WiFi Cepat &amp; Colokan</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-14 px-5 md:grid-cols-2">
          <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-gradient-to-br from-amber to-brown text-8xl shadow-2xl shadow-brown/25">
            ☕
          </div>
          <div>
            <Eyebrow>Tentang Kami</Eyebrow>
            <h2 className="text-3xl font-bold text-brown-dark md:text-4xl">
              Dari Petani Lokal, Untuk Cangkirmu
            </h2>
            <p className="mt-4 text-latte">
              Berdiri sejak 2021, Kopi Senja lahir dari kecintaan pada kopi
              Indonesia. Kami bekerja langsung dengan petani di Gayo, Toraja,
              dan Kintamani — memastikan setiap cangkir punya cerita dan
              kualitas terbaik.
            </p>
            <div className="mt-8 flex gap-10">
              {[
                ["3+", "Tahun Berdiri"],
                ["12", "Origin Single"],
                ["50k+", "Cangkir Tersaji"],
              ].map(([n, l]) => (
                <div key={l}>
                  <strong className="block font-heading text-3xl text-amber">{n}</strong>
                  <span className="text-xs text-latte">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <Eyebrow>Menu Favorit</Eyebrow>
          <h2 className="text-3xl font-bold text-brown-dark md:text-4xl">Signature Kami</h2>
          <p className="mx-auto mt-4 max-w-lg text-latte">
            Dibuat dari biji arabika pilihan dengan roasting profile khas Kopi Senja.
          </p>
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {menu.map((m) => (
              <div key={m.name} className="rounded-2xl bg-cream p-7 transition-all hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brown/10">
                <span className="text-4xl">{m.icon}</span>
                <h3 className="mt-3.5 text-xl font-bold text-brown-dark">{m.name}</h3>
                <p className="mt-2 text-sm text-latte">{m.desc}</p>
                <span className="mt-3.5 block text-lg font-bold text-amber">{m.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="text-3xl font-bold text-brown-dark md:text-4xl">Suasana Kopi Senja</h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((g, i) => (
              <div
                key={i}
                className={`flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br text-5xl transition-transform hover:scale-[1.03] ${g.bg}`}
              >
                {g.emoji}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-brown-dark py-20 text-cream">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <Eyebrow>Paket &amp; Event</Eyebrow>
          <h2 className="text-3xl font-bold text-cream md:text-4xl">Paket untuk Acara Anda</h2>
          <p className="mx-auto mt-4 max-w-lg text-[#c9b599]">
            Meeting, gathering, atau private event — kami siapkan tempatnya.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-2xl p-8 text-left ${
                  p.featured
                    ? "bg-amber"
                    : "border border-white/10 bg-white/5"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cream px-3.5 py-1 text-[11px] font-bold tracking-wider text-brown-dark">
                    TERPOPULER
                  </span>
                )}
                <h3 className={`font-heading text-xl font-bold ${p.featured ? "text-brown-dark" : "text-cream"}`}>
                  {p.name}
                </h3>
                <div className={`my-4 font-heading text-3xl font-bold ${p.featured ? "text-brown-dark" : "text-amber"}`}>
                  {p.price}
                  {p.unit && <span className="text-sm">{p.unit}</span>}
                </div>
                <ul className="space-y-1.5 text-sm">
                  {p.items.map((it) => (
                    <li key={it} className={p.featured ? "text-brown" : "text-[#d9c6ab]"}>
                      <span className={`mr-2 font-bold ${p.featured ? "text-brown-dark" : "text-amber"}`}>✓</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonial" className="py-20">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <Eyebrow>Testimonial</Eyebrow>
          <h2 className="text-3xl font-bold text-brown-dark md:text-4xl">Kata Mereka</h2>
          <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl bg-white p-7 shadow-md shadow-brown/5">
                <div className="mb-3.5 tracking-[3px] text-amber">★★★★★</div>
                <blockquote className="text-sm italic">“{t.text}”</blockquote>
                <figcaption className="mt-4">
                  <strong className="block text-sm">{t.name}</strong>
                  <span className="text-xs text-latte">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="pb-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-3xl font-bold text-brown-dark md:text-4xl">Sering Ditanyakan</h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                  {f.q}
                  <span className="text-xl text-amber transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3.5 text-sm text-latte">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center">
            <Eyebrow>Kontak</Eyebrow>
            <h2 className="text-3xl font-bold text-brown-dark md:text-4xl">
              Reservasi &amp; Pertanyaan
            </h2>
          </div>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              {[
                ["📍", "Alamat", site.address],
                ["⏰", "Jam Buka", site.hours],
                ["💬", "WhatsApp", "+62 878-3037-7139"],
                ["📸", "Instagram", site.instagram],
              ].map(([ic, t, d]) => (
                <div key={t} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cream text-xl">
                    {ic}
                  </div>
                  <div>
                    <strong className="block text-sm">{t}</strong>
                    <span className="text-sm text-latte">{d}</span>
                  </div>
                </div>
              ))}
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
