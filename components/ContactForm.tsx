"use client";

import { useState } from "react";
import { waLink } from "@/lib/site";

const input =
  "w-full rounded-xl border-[1.5px] border-cream-dark bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-amber";

export default function ContactForm() {
  const [form, setForm] = useState({ nama: "", jumlah: "", pesan: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      waLink(
        `Halo Kopi Senja! Saya ${form.nama}, ingin reservasi untuk ${form.jumlah} orang. ${form.pesan}`
      ),
      "_blank"
    );
  };

  return (
    <form onSubmit={submit} className="rounded-2xl bg-cream p-8">
      <label htmlFor="nama" className="mb-1.5 block text-sm font-bold">Nama</label>
      <input
        id="nama"
        required
        className={input}
        placeholder="Nama Anda"
        value={form.nama}
        onChange={(e) => setForm({ ...form, nama: e.target.value })}
      />
      <label htmlFor="jumlah" className="mb-1.5 mt-4 block text-sm font-bold">Jumlah Orang</label>
      <input
        id="jumlah"
        required
        className={input}
        placeholder="cth: 4"
        value={form.jumlah}
        onChange={(e) => setForm({ ...form, jumlah: e.target.value })}
      />
      <label htmlFor="pesan" className="mb-1.5 mt-4 block text-sm font-bold">Pesan</label>
      <textarea
        id="pesan"
        rows={3}
        className={input}
        placeholder="Tanggal, jam, atau kebutuhan khusus..."
        value={form.pesan}
        onChange={(e) => setForm({ ...form, pesan: e.target.value })}
      />
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-amber px-8 py-3.5 font-bold text-white transition-colors hover:bg-brown"
      >
        Kirim via WhatsApp
      </button>
    </form>
  );
}
