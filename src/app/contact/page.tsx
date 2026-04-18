import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-sm tracking-widest text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">
            ← Saiya
          </Link>
        </div>
      </header>

      <main className="flex-1 pt-20">
        <section className="py-24 bg-[var(--accent-light)]">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-4">CONTACT</p>
            <h1 className="font-serif text-4xl md:text-5xl text-[var(--foreground)] leading-tight">お問い合わせ</h1>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-6">
            <p className="text-zinc-500 leading-loose mb-12">
              催事のご依頼・ご相談は以下のフォームよりお気軽にお問い合わせください。<br />
              通常2営業日以内にご返信いたします。
            </p>

            <form className="space-y-6">
              <div>
                <label className="block text-xs tracking-widest text-zinc-500 mb-2">お名前 <span className="text-red-400">*</span></label>
                <input
                  type="text"
                  required
                  className="w-full border border-[var(--border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  placeholder="加藤 太郎"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest text-zinc-500 mb-2">会社名・屋号</label>
                <input
                  type="text"
                  className="w-full border border-[var(--border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  placeholder="株式会社〇〇"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest text-zinc-500 mb-2">メールアドレス <span className="text-red-400">*</span></label>
                <input
                  type="email"
                  required
                  className="w-full border border-[var(--border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest text-zinc-500 mb-2">お問い合わせ種別 <span className="text-red-400">*</span></label>
                <select
                  required
                  className="w-full border border-[var(--border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors bg-white"
                >
                  <option value="">選択してください</option>
                  <option value="venue">会場オーナーとして相談したい</option>
                  <option value="vendor">出展者・作家として相談したい</option>
                  <option value="other">その他</option>
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-widest text-zinc-500 mb-2">お問い合わせ内容 <span className="text-red-400">*</span></label>
                <textarea
                  required
                  rows={6}
                  className="w-full border border-[var(--border)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                  placeholder="ご相談内容をご記入ください"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[var(--foreground)] text-white text-sm tracking-widest hover:bg-[var(--accent)] transition-colors"
              >
                送信する
              </button>
            </form>

            <div className="mt-16 pt-10 border-t border-[var(--border)]">
              <p className="text-xs tracking-widest text-zinc-400 mb-4">OFFICE</p>
              <p className="text-sm text-zinc-500 leading-loose">
                株式会社Saiya<br />
                愛知県名古屋市中川区中須町234-5<br />
                代表取締役 加藤 真二<br />
                <a href="mailto:saiya0318@saiya.info" className="text-[var(--accent)] hover:opacity-70 transition-opacity">
                  saiya0318@saiya.info
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-[var(--border)] py-8 text-center">
        <p className="text-xs text-zinc-400">© 2024 株式会社Saiya</p>
      </footer>
    </>
  );
}
