import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="株式会社Saiya" width={120} height={50} priority />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--foreground)]">
            <Link href="/service/venue" className="hover:text-[var(--accent)] transition-colors">会場オーナー様へ</Link>
            <Link href="/service/vendor" className="hover:text-[var(--accent)] transition-colors">出展者様へ</Link>
            <Link href="/works" className="hover:text-[var(--accent)] transition-colors">実績</Link>
            <Link href="/contact" className="px-5 py-2 border border-[var(--accent)] text-[var(--accent)] rounded hover:bg-[var(--accent)] hover:text-white transition-colors">お問い合わせ</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="min-h-screen flex items-center justify-center bg-[var(--accent-light)] pt-20">
          <div className="max-w-5xl mx-auto px-6 py-24 text-center">
            <p className="text-sm tracking-[0.3em] text-[var(--accent)] mb-6">SAIYA — CATALYTIC SALES</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide text-[var(--foreground)] mb-8">
              和の催事で、<br />人と場所を繋ぐ。
            </h1>
            <p className="text-base md:text-lg text-zinc-500 leading-relaxed max-w-xl mx-auto mb-14">
              全国の会場と優れた和の作り手を結び、<br className="hidden md:block" />
              忘れられない体験と確かな売上を生み出します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/service/venue"
                className="px-8 py-4 bg-[var(--foreground)] text-white text-sm tracking-widest rounded hover:bg-[var(--accent)] transition-colors"
              >
                会場をお持ちの方
              </Link>
              <Link
                href="/service/vendor"
                className="px-8 py-4 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest rounded hover:bg-[var(--foreground)] hover:text-white transition-colors"
              >
                出展・販売をご希望の方
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-4">ABOUT</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] mb-10">催事販売のプロが、<br />橋渡し役になります。</h2>
            <div className="grid md:grid-cols-2 gap-12 text-zinc-600 leading-loose">
              <p>
                株式会社Saiyaは、全国各地の百貨店・商業施設・ホテルなどの会場と、
                和菓子・漆器・陶芸などの伝統工芸作家・食品メーカーを繋ぐ、催事販売の専門会社です。
              </p>
              <p>
                単なるマッチングではなく、会場設計・スタッフィング・売上管理まで
                一気通貫でサポート。出展者様が"作ること"に集中できる環境を整えます。
              </p>
            </div>
          </div>
        </section>

        {/* Two-direction services */}
        <section className="py-24 bg-[var(--accent-light)]">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-4">SERVICE</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] mb-14">二つの方向から、<br />催事を支えます。</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Venue card */}
              <div className="bg-white p-10 rounded-sm border border-[var(--border)]">
                <p className="text-xs tracking-[0.2em] text-[var(--accent)] mb-3">FOR VENUE OWNERS</p>
                <h3 className="font-serif text-2xl text-[var(--foreground)] mb-5">会場オーナー様</h3>
                <ul className="space-y-3 text-zinc-600 text-sm leading-loose mb-8">
                  <li>— 空きスペースを収益化したい</li>
                  <li>— 集客力のある催事を開催したい</li>
                  <li>— 運営を丸ごと任せたい</li>
                </ul>
                <Link
                  href="/service/venue"
                  className="inline-block text-sm tracking-widest text-[var(--accent)] border-b border-[var(--accent)] pb-1 hover:opacity-60 transition-opacity"
                >
                  詳しく見る →
                </Link>
              </div>
              {/* Vendor card */}
              <div className="bg-white p-10 rounded-sm border border-[var(--border)]">
                <p className="text-xs tracking-[0.2em] text-[var(--accent)] mb-3">FOR VENDORS / ARTISANS</p>
                <h3 className="font-serif text-2xl text-[var(--foreground)] mb-5">出展者・作家様</h3>
                <ul className="space-y-3 text-zinc-600 text-sm leading-loose mb-8">
                  <li>— 販路を全国に広げたい</li>
                  <li>— 催事出展の手続きが煩わしい</li>
                  <li>— 作ることに専念したい</li>
                </ul>
                <Link
                  href="/service/vendor"
                  className="inline-block text-sm tracking-widest text-[var(--accent)] border-b border-[var(--accent)] pb-1 hover:opacity-60 transition-opacity"
                >
                  詳しく見る →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Flow */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-4">HOW IT WORKS</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] mb-14">ご依頼の流れ</h2>
            <div className="space-y-0">
              {[
                { step: "01", title: "お問い合わせ", desc: "フォームまたはお電話にてご連絡ください。" },
                { step: "02", title: "ヒアリング・ご提案", desc: "会場規模・期間・ジャンルなどをお伺いし、最適な企画をご提案します。" },
                { step: "03", title: "マッチング・調整", desc: "出展者の選定、スケジュール・什器・スタッフの手配を行います。" },
                { step: "04", title: "開催・運営サポート", desc: "当日の設営から売上管理・撤収まで一括でサポートします。" },
                { step: "05", title: "レポート・振り返り", desc: "終了後に売上・来場データをご報告し、次回企画に活かします。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-8 py-8 border-b border-[var(--border)] last:border-0">
                  <span className="font-serif text-4xl text-[var(--border)] leading-none w-12 shrink-0">{item.step}</span>
                  <div>
                    <h3 className="text-base font-medium text-[var(--foreground)] mb-1">{item.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 bg-[var(--foreground)] text-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">まずは、ご相談ください。</h2>
            <p className="text-zinc-400 leading-loose mb-10">
              催事の規模・期間・ジャンルを問わず、<br />お気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 border border-white text-sm tracking-widest hover:bg-white hover:text-[var(--foreground)] transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[var(--border)] py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <Image src="/logo.svg" alt="株式会社Saiya" width={100} height={42} className="mb-4" />
            <p className="text-xs text-zinc-400 leading-loose">
              〒466-0027<br />
              愛知県名古屋市昭和区福江三丁目2番8号 名栄ビル102<br />
              代表取締役 加藤 真二
            </p>
          </div>
          <nav className="flex flex-col gap-3 text-xs text-zinc-500">
            <Link href="/service/venue" className="hover:text-[var(--accent)] transition-colors">会場オーナー様へ</Link>
            <Link href="/service/vendor" className="hover:text-[var(--accent)] transition-colors">出展者様へ</Link>
            <Link href="/works" className="hover:text-[var(--accent)] transition-colors">実績</Link>
            <Link href="/contact" className="hover:text-[var(--accent)] transition-colors">お問い合わせ</Link>
          </nav>
        </div>
        <div className="max-w-5xl mx-auto px-6 mt-10 pt-6 border-t border-[var(--border)]">
          <p className="text-xs text-zinc-400">© 2024 株式会社Saiya. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
