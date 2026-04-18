import Link from "next/link";

export default function VenuePage() {
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
            <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-4">FOR VENUE OWNERS</p>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--foreground)] leading-tight">
              会場オーナー様へ
            </h1>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-2xl text-[var(--foreground)] mb-10">こんなお悩みはありませんか？</h2>
            <ul className="space-y-4 text-zinc-600 leading-loose">
              {[
                "週末のフロアが空いていてもったいない",
                "催事を企画したいが、出展者を集めるノウハウがない",
                "運営スタッフの確保が難しい",
                "売上管理・什器手配まで任せたい",
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
                { title: "出展者のご紹介", desc: "和菓子・漆器・陶芸など、全国の優れた作り手をご提案します。" },
                { title: "運営の一括サポート", desc: "設営・スタッフィング・什器手配・売上管理まで対応します。" },
                { title: "集客企画の立案", desc: "SNS告知・チラシ作成など、集客施策もご相談ください。" },
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
            <p className="text-zinc-400 mb-10 leading-loose">会場の規模・立地・空き期間をお伝えいただければ、具体的なご提案が可能です。</p>
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
