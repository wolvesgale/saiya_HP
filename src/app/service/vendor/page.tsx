import Link from "next/link";

export default function BusinessPartnerPage() {
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
            <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-4">FOR BUSINESS PARTNERS</p>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--foreground)] leading-tight">
              ビジネスパートナーの方へ
            </h1>
            <p className="text-sm text-zinc-500 mt-6 max-w-xl leading-relaxed">
              イベント出店事業の立ち上げ・拡大を協業したい方へ。代表の会計・システムコンサル知見を活かし、事業ごと一緒に設計・展開します。
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-2xl text-[var(--foreground)] mb-10">こんなご状況の方へ</h2>
            <ul className="space-y-4 text-zinc-600 leading-loose">
              {[
                "新事業としてイベント出店ビジネスを立ち上げたい・拡大したい",
                "販路拡大や新規顧客開拓の手段としてイベント展開を検討している",
                "ノウハウ・ネットワーク・システムを活用した協業を探している",
                "事業設計・会計・システム面での専門的なサポートを求めている",
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
            <h2 className="font-serif text-2xl text-[var(--foreground)] mb-10">Saiyaが提供できること</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "事業設計・ビジネスモデル構築",
                  desc: "代表の会計・システムコンサル実績を活かし、収益構造から業務フローまで事業全体を設計します。",
                },
                {
                  title: "全国展開への体制整備",
                  desc: "場所の確保からパートナーネットワークの整備まで、スケールアップするための基盤を構築します。",
                },
                {
                  title: "現場ノウハウの移転",
                  desc: "販売スクリプト・現場運営のノウハウを法人向けに体系化して提供。再現性のある仕組みを構築します。",
                },
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
            <p className="text-zinc-400 mb-10 leading-loose">
              ご検討の事業内容・ご希望のエリア・協業の形態をお伝えいただければ、具体的にご提案します。
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
