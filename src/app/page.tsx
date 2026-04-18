import Image from "next/image";
import Link from "next/link";
import { ParticleCanvas } from "@/components/ParticleCanvas";

// ── 苺大福 SVGイラスト ──────────────────────────────────────
function Daifuku({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 影 */}
      <ellipse cx="70" cy="128" rx="48" ry="9" fill="#D4A882" opacity="0.18"/>
      {/* 餅本体 */}
      <ellipse cx="70" cy="80" rx="60" ry="55" fill="#FFF8F5"/>
      <ellipse cx="70" cy="80" rx="60" ry="55" stroke="#EDD5C0" strokeWidth="1.2"/>
      {/* 餅の折り返し（底の丸み） */}
      <path d="M 18 92 Q 70 118 122 92" stroke="#EDD5C0" strokeWidth="1" fill="none" opacity="0.6"/>
      {/* 苺（ハート形） */}
      <path d="M 52 70 Q 44 50 62 44 Q 70 38 78 44 Q 96 50 88 70 Q 78 88 70 96 Q 62 88 52 70 Z"
        fill="#E8415A"/>
      {/* 苺ハイライト */}
      <path d="M 62 52 Q 68 44 74 48 Q 68 50 66 58 Z" fill="#FF7090" opacity="0.55"/>
      {/* 種 */}
      <ellipse cx="63" cy="57" rx="1.8" ry="2.2" fill="#fff" opacity="0.7" transform="rotate(-15 63 57)"/>
      <ellipse cx="72" cy="52" rx="1.8" ry="2.2" fill="#fff" opacity="0.7"/>
      <ellipse cx="80" cy="61" rx="1.8" ry="2.2" fill="#fff" opacity="0.7" transform="rotate(15 80 61)"/>
      <ellipse cx="67" cy="68" rx="1.8" ry="2.2" fill="#fff" opacity="0.65"/>
      <ellipse cx="58" cy="67" rx="1.8" ry="2.2" fill="#fff" opacity="0.65" transform="rotate(-10 58 67)"/>
      <ellipse cx="77" cy="73" rx="1.8" ry="2.2" fill="#fff" opacity="0.6" transform="rotate(20 77 73)"/>
      {/* ヘタ（葉） */}
      <path d="M 60 44 Q 52 28 44 34 Q 52 36 58 44 Z" fill="#5BAD46"/>
      <path d="M 70 38 Q 70 20 65 26 Q 68 31 68 40 Z" fill="#5BAD46"/>
      <path d="M 80 44 Q 88 28 96 34 Q 88 36 82 44 Z" fill="#5BAD46"/>
      {/* 餅と苺の境目のホワイトライン */}
      <path d="M 52 70 Q 44 50 62 44 Q 70 38 78 44 Q 96 50 88 70 Q 78 88 70 96 Q 62 88 52 70 Z"
        fill="none" stroke="#FFF8F5" strokeWidth="3.5"/>
    </svg>
  );
}

// ── イベントスペース SVG挿絵 ────────────────────────────────
function EventIllustration() {
  return (
    <svg viewBox="0 0 480 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xl mx-auto">
      {/* 天井・照明 */}
      <line x1="0" y1="30" x2="480" y2="30" stroke="#E8D5C0" strokeWidth="1.5"/>
      {/* 照明 */}
      {[80, 200, 320, 430].map((x) => (
        <g key={x}>
          <line x1={x} y1="30" x2={x} y2="50" stroke="#C4A882" strokeWidth="1.5"/>
          <ellipse cx={x} cy="54" rx="12" ry="6" fill="#FFF3DC" stroke="#D4B87A" strokeWidth="1"/>
          <ellipse cx={x} cy="54" rx="8" ry="4" fill="#FFE8A0" opacity="0.7"/>
        </g>
      ))}
      {/* 床 */}
      <rect x="0" y="210" width="480" height="50" fill="#F5EFE6"/>
      <line x1="0" y1="210" x2="480" y2="210" stroke="#E0CEBA" strokeWidth="1"/>
      {/* 床のタイル線 */}
      {[60, 120, 180, 240, 300, 360, 420].map((x) => (
        <line key={x} x1={x} y1="210" x2={x} y2="260" stroke="#E0CEBA" strokeWidth="0.5" opacity="0.5"/>
      ))}

      {/* ブース1（左） */}
      <rect x="30" y="150" width="100" height="62" fill="#EFE0CC"/>
      <rect x="24" y="144" width="112" height="10" fill="#C4A067" rx="1"/>
      {/* ブース1 テーブルクロス */}
      <path d="M 24 154 Q 80 162 136 154" stroke="#D4B07A" strokeWidth="1" fill="none"/>
      {/* 商品（和菓子箱） */}
      <rect x="42" y="128" width="28" height="18" fill="#8B6F47" rx="1.5"/>
      <rect x="44" y="126" width="28" height="4" fill="#A0826D" rx="1"/>
      <rect x="76" y="132" width="24" height="14" fill="#6B4F3A" rx="1.5"/>
      <rect x="78" y="130" width="24" height="4" fill="#8B6F47" rx="1"/>
      {/* のぼり旗 */}
      <line x1="148" y1="65" x2="148" y2="155" stroke="#8B6F47" strokeWidth="2.5"/>
      <rect x="148" y="65" width="36" height="55" fill="#D4B896" rx="2"/>
      <text x="166" y="95" fontFamily="serif" fontSize="11" fill="#6B4F3A" textAnchor="middle">和</text>
      <text x="166" y="110" fontFamily="serif" fontSize="11" fill="#6B4F3A" textAnchor="middle">菓</text>
      <text x="166" y="125" fontFamily="serif" fontSize="11" fill="#6B4F3A" textAnchor="middle">子</text>

      {/* ブース2（中央） */}
      <rect x="190" y="140" width="100" height="72" fill="#EFE0CC"/>
      <rect x="184" y="134" width="112" height="10" fill="#C4A067" rx="1"/>
      {/* 商品（積み重ね）*/}
      <rect x="200" y="110" width="22" height="26" fill="#9B7B5A" rx="1.5"/>
      <rect x="202" y="108" width="22" height="5" fill="#B08060" rx="1"/>
      <rect x="226" y="116" width="22" height="20" fill="#7A5C42" rx="1.5"/>
      <rect x="250" y="112" width="22" height="24" fill="#9B7B5A" rx="1.5"/>
      {/* 苺大福プレート */}
      <ellipse cx="215" cy="128" rx="12" ry="4" fill="#FFF0E8" stroke="#EDD5C0" strokeWidth="0.8"/>
      <circle cx="212" cy="126" r="5" fill="#E8415A" opacity="0.85"/>
      <circle cx="220" cy="126" r="5" fill="#E8415A" opacity="0.85"/>

      {/* ブース3（右） */}
      <rect x="330" y="155" width="100" height="57" fill="#EFE0CC"/>
      <rect x="324" y="149" width="112" height="10" fill="#C4A067" rx="1"/>
      <rect x="344" y="130" width="26" height="21" fill="#8B6F47" rx="1.5"/>
      <rect x="346" y="128" width="26" height="5" fill="#A0826D" rx="1"/>
      <rect x="376" y="133" width="24" height="18" fill="#6B4F3A" rx="1.5"/>

      {/* 来場者シルエット */}
      {/* 人1 */}
      <circle cx="170" cy="184" r="9" fill="#1a1a1a" opacity="0.55"/>
      <path d="M 162 193 Q 158 215 163 218 M 178 193 Q 182 215 177 218 M 162 193 Q 170 200 178 193" stroke="#1a1a1a" strokeWidth="2" fill="none" opacity="0.55"/>
      {/* 人2 */}
      <circle cx="295" cy="180" r="8" fill="#1a1a1a" opacity="0.45"/>
      <path d="M 288 188 Q 285 210 290 213 M 302 188 Q 305 210 300 213 M 288 188 Q 295 195 302 188" stroke="#1a1a1a" strokeWidth="2" fill="none" opacity="0.45"/>
      {/* 人3（小・遠景） */}
      <circle cx="395" cy="188" r="6" fill="#1a1a1a" opacity="0.35"/>
      <path d="M 390 194 Q 388 210 392 212 M 400 194 Q 402 210 398 212 M 390 194 Q 395 199 400 194" stroke="#1a1a1a" strokeWidth="1.5" fill="none" opacity="0.35"/>
      {/* 人4（家族連れ・小） */}
      <circle cx="90" cy="190" r="7" fill="#1a1a1a" opacity="0.4"/>
      <path d="M 84 197 Q 82 212 86 214 M 96 197 Q 98 212 94 214 M 84 197 Q 90 203 96 197" stroke="#1a1a1a" strokeWidth="1.5" fill="none" opacity="0.4"/>
      <circle cx="104" cy="194" r="5" fill="#1a1a1a" opacity="0.35"/>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="株式会社Saiya" width={130} height={55} priority />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--foreground)]">
            <Link href="/service/venue" className="hover:text-[var(--accent)] transition-colors">会場オーナー様へ</Link>
            <Link href="/service/vendor" className="hover:text-[var(--accent)] transition-colors">出展者様へ</Link>
            <Link href="/works" className="hover:text-[var(--accent)] transition-colors">実績</Link>
            <Link href="/contact" className="px-5 py-2 border border-[var(--accent)] text-[var(--accent)] rounded hover:bg-[var(--accent)] hover:text-white transition-colors">
              お問い合わせ
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* ── Hero + Particle ──────────────────────────── */}
        <section className="relative min-h-screen flex items-center justify-center bg-[var(--accent-light)] pt-20 overflow-hidden">
          {/* パーティクルアニメーション */}
          <ParticleCanvas />

          {/* 苺大福 装飾（背景） */}
          <div className="absolute top-16 right-8 opacity-15 rotate-12 pointer-events-none hidden md:block">
            <Daifuku size={160} />
          </div>
          <div className="absolute bottom-20 left-6 opacity-10 -rotate-6 pointer-events-none hidden md:block">
            <Daifuku size={110} />
          </div>
          <div className="absolute top-1/2 right-24 opacity-8 rotate-3 pointer-events-none hidden lg:block">
            <Daifuku size={80} />
          </div>

          {/* Hero コンテンツ */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
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

        {/* ── イベントスペース挿絵 ─────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-3 text-center">EVENT SCENE</p>
            <h2 className="font-serif text-2xl text-[var(--foreground)] mb-10 text-center">こんな催事を、一緒に作ります。</h2>
            <div className="border border-[var(--border)] rounded-sm p-6 bg-[var(--accent-light)]">
              <EventIllustration />
            </div>
          </div>
        </section>

        {/* ── About ────────────────────────────────────── */}
        <section className="py-24 bg-[var(--accent-light)]">
          <div className="max-w-4xl mx-auto px-6">
            {/* 苺大福アクセント */}
            <div className="flex items-start gap-10">
              <div className="flex-1">
                <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-4">ABOUT</p>
                <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] mb-10">
                  催事販売のプロが、<br />橋渡し役になります。
                </h2>
                <div className="space-y-5 text-zinc-600 leading-loose">
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
              {/* 苺大福 装飾 */}
              <div className="hidden md:flex flex-col gap-4 items-center pt-8 opacity-80">
                <Daifuku size={100} />
                <p className="text-xs text-zinc-400 tracking-widest">苺大福</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Two-direction services ───────────────────── */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-4">SERVICE</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] mb-14">
              二つの方向から、<br />催事を支えます。
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[var(--accent-light)] p-10 rounded-sm border border-[var(--border)]">
                <p className="text-xs tracking-[0.2em] text-[var(--accent)] mb-3">FOR VENUE OWNERS</p>
                <h3 className="font-serif text-2xl text-[var(--foreground)] mb-5">会場オーナー様</h3>
                <ul className="space-y-3 text-zinc-600 text-sm leading-loose mb-8">
                  <li>— 空きスペースを収益化したい</li>
                  <li>— 集客力のある催事を開催したい</li>
                  <li>— 運営を丸ごと任せたい</li>
                </ul>
                <Link href="/service/venue" className="inline-block text-sm tracking-widest text-[var(--accent)] border-b border-[var(--accent)] pb-1 hover:opacity-60 transition-opacity">
                  詳しく見る →
                </Link>
              </div>
              <div className="bg-[var(--accent-light)] p-10 rounded-sm border border-[var(--border)]">
                <p className="text-xs tracking-[0.2em] text-[var(--accent)] mb-3">FOR VENDORS / ARTISANS</p>
                <h3 className="font-serif text-2xl text-[var(--foreground)] mb-5">出展者・作家様</h3>
                <ul className="space-y-3 text-zinc-600 text-sm leading-loose mb-8">
                  <li>— 販路を全国に広げたい</li>
                  <li>— 催事出展の手続きが煩わしい</li>
                  <li>— 作ることに専念したい</li>
                </ul>
                <Link href="/service/vendor" className="inline-block text-sm tracking-widest text-[var(--accent)] border-b border-[var(--accent)] pb-1 hover:opacity-60 transition-opacity">
                  詳しく見る →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Flow ─────────────────────────────────────── */}
        <section className="py-24 bg-[var(--accent-light)]">
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
              ].map((item) => (
                <div key={item.step} className="flex gap-8 py-8 border-b border-[var(--border)] last:border-0">
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

        {/* ── CTA ──────────────────────────────────────── */}
        <section className="py-24 bg-[var(--foreground)] text-white text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-serif text-3xl md:text-4xl mb-6">まずは、ご相談ください。</h2>
            <p className="text-zinc-400 leading-loose mb-10">
              催事の規模・期間・ジャンルを問わず、<br />お気軽にお問い合わせください。
            </p>
            <Link href="/contact" className="inline-block px-10 py-4 border border-white text-sm tracking-widest hover:bg-white hover:text-[var(--foreground)] transition-colors">
              お問い合わせ
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[var(--border)] py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <Image src="/logo.svg" alt="株式会社Saiya" width={110} height={46} className="mb-4" />
            <p className="text-xs text-zinc-400 leading-loose">
              愛知県名古屋市中川区中須町234-5<br />
              代表取締役 加藤 真二<br />
              <a href="mailto:saiya0318@saiya.info" className="hover:text-[var(--accent)] transition-colors">
                saiya0318@saiya.info
              </a>
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
