import { site, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brown-dark pt-14 text-[#c9b599]">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 pb-11 md:grid-cols-3">
        <div>
          <h4 className="mb-4 font-heading text-lg font-bold text-cream">☕ Kopi Senja</h4>
          <p className="max-w-xs text-sm">
            Specialty coffee shop di Jakarta Selatan. Dari petani lokal, untuk cangkirmu.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-heading text-lg font-bold text-cream">Menu</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#about" className="hover:text-amber">Tentang</a></li>
            <li><a href="#menu" className="hover:text-amber">Menu</a></li>
            <li><a href="#gallery" className="hover:text-amber">Gallery</a></li>
            <li><a href="#pricing" className="hover:text-amber">Paket Event</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-heading text-lg font-bold text-cream">Hubungi</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href={waLink("Halo Kopi Senja!")} className="hover:text-amber">WhatsApp</a></li>
            <li><a href="#" className="hover:text-amber">Instagram {site.instagram}</a></li>
            <li><a href="#" className="hover:text-amber">Google Maps</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">
        © {new Date().getFullYear()} Kopi Senja. Website by{" "}
        <a href="#" className="text-amber">Studio Website</a>.
      </div>
    </footer>
  );
}
