import Link from "next/link";

export default function VendorPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-sm tracking-widest text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">
            ← Saiya
          </Link>
          <Link href="/contact" className="px-5 py-2 border border-[var(--accent)] text-[var(--accent)] text-sm rounded hover:bg-[var(--accent)] hover:text-white transition-colors">
            お問い合わせ
          </Link>
        </div>
      </header>

      <main className="flex-1 pt-20">
        <section className="py-24 bg-[var(--accent-light)]">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-4">FOR VENDORS / ARTISANS</p>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--foreground)] leading-tight">
              出展者・作家様へ
            </h1>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-2xl text-[var(--foreground)] mb-10">こんなお悩みはありませんか？</h2>
            <ul className="space-y-4 text-zinc-600 leading-loose">
              {[
                "作ることに専念したいが、販路開拓に時間が取られる",
                "催事出展の手続き・什器手配が煩雑",
                "全国の会場へのコネクションがない",
                "スタッフを自分で集めるのが難しい",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 py-4 border-b border-[var(--border)]">
                  <span className="text-[var(--accent)]">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 bg-[var(--accent-light)]">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-2xl text-[var(--foreground)] mb-10">Saiyaにお任せください</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "会場のご紹介", desc: "百貨店・商業施設・ホテルなど全国の会場をご紹介します。" },
                { title: "手続き・什器の代行", desc: "出展に必要な手続き・什器手配をすべて代行します。" },
                { title: "スタッフの確保", desc: "販売スタッフの採用・育成・当日管理もサポートします。" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 border border-[var(--border)]">
                  <h3 className="font-medium text-[var(--foreground)] mb-3">{item.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[var(--foreground)] text-white text-center">
          <div className="max-w-xl mx-auto px-6">
            <h2 className="font-serif text-3xl mb-6">まずはお気軽にご相談を</h2>
            <p className="text-zinc-400 mb-10 leading-loose">取り扱い商品・ご希望の地域・出展可能な時期をお伝えください。</p>
            <Link href="/contact" className="inline-block px-10 py-4 border border-white text-sm tracking-widest hover:bg-white hover:text-[var(--foreground)] transition-colors">
              お問い合わせ
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-[var(--border)] py-8 text-center">
        <p className="text-xs text-zinc-400">© 2024 株式会社Saiya</p>
      </footer>
    </>
  );
}
