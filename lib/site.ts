export const site = {
  name: "Kopi Senja",
  whatsapp: "6281234567890", // TODO: ganti nomor asli
  address: "Jl. Senja Raya No. 16, Kebayoran Baru, Jakarta Selatan",
  hours: "Setiap hari, 08.00 – 22.00 WIB",
  instagram: "@kopisenja.jkt",
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
