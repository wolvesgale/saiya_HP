import Link from "next/link";

export default function SalesPartnerPage() {
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
            <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-4">FOR SALES PARTNERS</p>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--foreground)] leading-tight">
              販売パートナーの方へ
            </h1>
            <p className="text-sm text-zinc-500 mt-6 max-w-xl leading-relaxed">
              イベント出店で安定した売上を作りたい方、全国規模での展開を目指す方へ。Saiyaが場所・システム・ノウハウをまとめて提供します。
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-2xl text-[var(--foreground)] mb-10">こんなお悩みはありませんか？</h2>
            <ul className="space-y-4 text-zinc-600 leading-loose">
              {[
                "全国でイベント出店したいが、会場確保の方法がわからない",
                "商材・資材の調達に手間と時間がかかっている",
                "販売スクリプト・接客トークを体系的に学びたい",
                "一人での出店では限界を感じている",
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
            <h2 className="font-serif text-2xl text-[var(--foreground)] mb-10">Saiyaが提供する4つの価値</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  label: "01",
                  title: "場所の確保",
                  desc: "全国の商業施設・百貨店・ホテル等との独自ネットワークで、最適な出店場所を確保します。",
                },
                {
                  label: "02",
                  title: "商材・資材の調達システム",
                  desc: "仕入れ・発注を効率化する調達システムへのアクセスを提供。準備の手間とコストを削減します。",
                },
                {
                  label: "03",
                  title: "現場販売のノウハウ",
                  desc: "実績のある販売スクリプト・接客トークを提供。現場での売上最大化をサポートします。",
                },
                {
                  label: "04",
                  title: "パートナー同士の連携",
                  desc: "他の販売パートナーと連携できる仕組みを整備。スケールしやすい体制を構築します。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 border border-[var(--border)]">
                  <p className="text-xs text-[var(--accent)] tracking-widest mb-2">{item.label}</p>
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
            <p className="text-zinc-400 mb-10 leading-loose">
              出店したいエリア・商材・希望時期をお伝えいただければ、具体的なご提案が可能です。
            </p>
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
