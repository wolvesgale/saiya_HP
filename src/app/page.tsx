import Image from "next/image";
import Link from "next/link";
import { ParticleCanvas } from "@/components/ParticleCanvas";

// ── 苺大福 SVG ──────────────────────────────────────────────
function Daifuku({ size = 120 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="70" cy="128" rx="48" ry="9" fill="#D4A882" opacity="0.18"/>
      <ellipse cx="70" cy="80" rx="60" ry="55" fill="#FFF8F5"/>
      <ellipse cx="70" cy="80" rx="60" ry="55" stroke="#EDD5C0" strokeWidth="1.2"/>
      <path d="M 18 92 Q 70 118 122 92" stroke="#EDD5C0" strokeWidth="1" fill="none" opacity="0.6"/>
      <path d="M 52 70 Q 44 50 62 44 Q 70 38 78 44 Q 96 50 88 70 Q 78 88 70 96 Q 62 88 52 70 Z" fill="#E8415A"/>
      <path d="M 62 52 Q 68 44 74 48 Q 68 50 66 58 Z" fill="#FF7090" opacity="0.55"/>
      <ellipse cx="63" cy="57" rx="1.8" ry="2.2" fill="#fff" opacity="0.7" transform="rotate(-15 63 57)"/>
      <ellipse cx="72" cy="52" rx="1.8" ry="2.2" fill="#fff" opacity="0.7"/>
      <ellipse cx="80" cy="61" rx="1.8" ry="2.2" fill="#fff" opacity="0.7" transform="rotate(15 80 61)"/>
      <ellipse cx="67" cy="68" rx="1.8" ry="2.2" fill="#fff" opacity="0.65"/>
      <ellipse cx="58" cy="67" rx="1.8" ry="2.2" fill="#fff" opacity="0.65" transform="rotate(-10 58 67)"/>
      <ellipse cx="77" cy="73" rx="1.8" ry="2.2" fill="#fff" opacity="0.6" transform="rotate(20 77 73)"/>
      <path d="M 60 44 Q 52 28 44 34 Q 52 36 58 44 Z" fill="#5BAD46"/>
      <path d="M 70 38 Q 70 20 65 26 Q 68 31 68 40 Z" fill="#5BAD46"/>
      <path d="M 80 44 Q 88 28 96 34 Q 88 36 82 44 Z" fill="#5BAD46"/>
      <path d="M 52 70 Q 44 50 62 44 Q 70 38 78 44 Q 96 50 88 70 Q 78 88 70 96 Q 62 88 52 70 Z" fill="none" stroke="#FFF8F5" strokeWidth="3.5"/>
    </svg>
  );
}

// ── フローステップ アイコン ──────────────────────────────────
function FlowIcon({ type }: { type: string }) {
  if (type === "contact") return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect x="6" y="10" width="36" height="26" rx="3" stroke="#8B6F47" strokeWidth="2"/>
      <path d="M6 14 L24 26 L42 14" stroke="#8B6F47" strokeWidth="2"/>
    </svg>
  );
  if (type === "meeting") return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <circle cx="17" cy="18" r="7" stroke="#8B6F47" strokeWidth="2"/>
      <circle cx="31" cy="18" r="7" stroke="#8B6F47" strokeWidth="2"/>
      <path d="M6 38 Q6 28 17 28 Q24 28 24 28 Q24 28 31 28 Q42 28 42 38" stroke="#8B6F47" strokeWidth="2" fill="none"/>
    </svg>
  );
  if (type === "plan") return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect x="8" y="6" width="32" height="36" rx="2" stroke="#8B6F47" strokeWidth="2"/>
      <line x1="14" y1="16" x2="34" y2="16" stroke="#8B6F47" strokeWidth="2"/>
      <line x1="14" y1="24" x2="34" y2="24" stroke="#8B6F47" strokeWidth="2"/>
      <line x1="14" y1="32" x2="24" y2="32" stroke="#8B6F47" strokeWidth="2"/>
    </svg>
  );
  if (type === "contract") return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M14 24 L21 31 L34 17" stroke="#8B6F47" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="24" cy="24" r="16" stroke="#8B6F47" strokeWidth="2"/>
    </svg>
  );
  // event (open)
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path d="M6 34 L12 18 L24 22 L36 18 L42 34 Z" stroke="#8B6F47" strokeWidth="2" fill="none"/>
      <line x1="6" y1="34" x2="42" y2="34" stroke="#8B6F47" strokeWidth="2"/>
      <line x1="24" y1="18" x2="24" y2="10" stroke="#8B6F47" strokeWidth="2"/>
      <circle cx="24" cy="8" r="2" fill="#8B6F47"/>
    </svg>
  );
}

const FLOW_STEPS = [
  {
    icon: "contact",
    step: "01",
    title: "お問い合わせ・ご連絡",
    desc: "まずはお問い合わせフォームまたはメールにてご連絡ください。弊社担当者が内容を確認のうえ、折り返しご連絡いたします。",
  },
  {
    icon: "meeting",
    step: "02",
    title: "ヒアリング・お打合せ",
    desc: "開催場所・スペース・期間・ご希望のジャンルなどをお伺いします。事前の集客施策についてもアドバイスいたします。",
  },
  {
    icon: "plan",
    step: "03",
    title: "企画・出展者のご提案",
    desc: "催事場の広さと目的に合わせた売り場プランをご提案。和菓子・漆器・陶芸など最適な出展者をご紹介します。",
  },
  {
    icon: "contract",
    step: "04",
    title: "ご契約・開催日の確定",
    desc: "正式にご契約を結びます。開催日までのスケジュール、当日のタイムテーブル、什器・スタッフの手配を進めます。",
  },
  {
    icon: "event",
    step: "05",
    title: "開催当日・運営サポート",
    desc: "搬入設営から開店・接客・売上管理・撤去まで一括で対応。終了後は実績レポートをご報告し、次回へ活かします。",
  },
];

const EXAMPLES = [
  { location: "愛知県 名古屋市", venue: "百貨店", category: "和菓子・生菓子フェア", bg: "from-amber-800 to-amber-600" },
  { location: "大阪府 大阪市", venue: "ショッピングセンター", category: "全国銘菓・スイーツ展", bg: "from-stone-700 to-stone-500" },
  { location: "東京都 新宿区", venue: "百貨店", category: "伝統工芸・漆器展", bg: "from-zinc-700 to-zinc-500" },
  { location: "岐阜県 各務原市", venue: "商業施設", category: "産直和スイーツ市", bg: "from-amber-700 to-yellow-600" },
  { location: "三重県 津市", venue: "ホテル", category: "クラフト・陶器展", bg: "from-stone-600 to-amber-700" },
  { location: "静岡県 浜松市", venue: "ショッピングモール", category: "和雑貨・工芸品フェア", bg: "from-zinc-600 to-stone-600" },
];

const MERITS = [
  {
    num: "01",
    title: "搬入から撤去まで完全一括",
    desc: "商品の搬入・設営、当日の販売スタッフ配置、売上・在庫管理、そして撤去まで。会場様は場所を提供するだけで、すべてお任せいただけます。",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
        <rect x="8" y="14" width="40" height="28" rx="3" stroke="#8B6F47" strokeWidth="2"/>
        <path d="M8 22 H48" stroke="#8B6F47" strokeWidth="1.5"/>
        <path d="M20 14 V8 M36 14 V8" stroke="#8B6F47" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 32 L24 32 M30 32 L40 32" stroke="#8B6F47" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 38 L32 38" stroke="#8B6F47" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "全国の会場・出展者ネットワーク",
    desc: "百貨店・ショッピングセンター・ホテルなど全国の会場と、和菓子・陶芸・漆器など優れた作り手の両方と直接つながりを持っています。",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
        <circle cx="28" cy="28" r="18" stroke="#8B6F47" strokeWidth="2"/>
        <ellipse cx="28" cy="28" rx="10" ry="18" stroke="#8B6F47" strokeWidth="1.5"/>
        <line x1="10" y1="28" x2="46" y2="28" stroke="#8B6F47" strokeWidth="1.5"/>
        <line x1="13" y1="18" x2="43" y2="18" stroke="#8B6F47" strokeWidth="1.5"/>
        <line x1="13" y1="38" x2="43" y2="38" stroke="#8B6F47" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "売り場を活性化するプロスタッフ",
    desc: "実演販売・接客に慣れたスタッフが対面でお客様を引きつけます。催事ならではの賑わいと売上を同時に実現します。",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
        <circle cx="20" cy="20" r="7" stroke="#8B6F47" strokeWidth="2"/>
        <path d="M8 44 Q8 32 20 32 Q32 32 32 44" stroke="#8B6F47" strokeWidth="2" fill="none"/>
        <path d="M34 26 L38 30 L46 20" stroke="#8B6F47" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const FAQS = [
  {
    q: "申し込みはどのくらい前に行えばよいですか？",
    a: "2〜3ヶ月前のご連絡を推奨しています。ただしスケジュールの空き状況によっては短期間での対応も可能な場合がありますので、まずはお気軽にご相談ください。",
  },
  {
    q: "必要なスペースはどのくらいですか？",
    a: "概ね10坪〜50坪のスペースで対応しております。会場の広さや形状に合わせて最適な売り場構成をご提案します。小規模なスペースでもご相談ください。",
  },
  {
    q: "遠方の会場でも対応できますか？",
    a: "全国各地での開催実績があります。交通費・宿泊費等については開催規模に応じてご相談させていただきます。まずはお気軽にお問い合わせください。",
  },
  {
    q: "出展者を自分たちで指定することはできますか？",
    a: "もちろん可能です。ご要望のジャンルや出展者のご紹介も承ります。弊社ネットワーク内でご希望に合った出展者をご提案することもできます。",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.svg" alt="株式会社Saiya" width={120} height={50} priority />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#flow" className="text-zinc-600 hover:text-[var(--accent)] transition-colors">催事の流れ</Link>
            <Link href="#examples" className="text-zinc-600 hover:text-[var(--accent)] transition-colors">催事実例</Link>
            <Link href="#merit" className="text-zinc-600 hover:text-[var(--accent)] transition-colors">選ばれる理由</Link>
            <Link href="#faq" className="text-zinc-600 hover:text-[var(--accent)] transition-colors">よくある質問</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a href="mailto:saiya0318@saiya.info" className="hidden md:block text-xs text-zinc-500 hover:text-[var(--accent)] transition-colors">
              saiya0318@saiya.info
            </a>
            <Link href="/contact" className="px-4 py-2 bg-[var(--accent)] text-white text-xs tracking-widest rounded hover:opacity-80 transition-opacity">
              お問い合わせ
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="relative min-h-screen flex items-center justify-center bg-[var(--accent-light)] pt-20 overflow-hidden">
          <ParticleCanvas />
          <div className="absolute top-20 right-8 opacity-12 rotate-12 pointer-events-none hidden lg:block">
            <Daifuku size={180} />
          </div>
          <div className="absolute bottom-24 left-6 opacity-10 -rotate-6 pointer-events-none hidden lg:block">
            <Daifuku size={120} />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
            <p className="text-xs tracking-[0.4em] text-[var(--accent)] mb-6 uppercase">Catalytic Sales × Japanese Crafts</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide text-[var(--foreground)] mb-6">
              和の催事で、<br />人と場所を繋ぐ。
            </h1>
            <p className="text-base md:text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto mb-4">
              商品の搬入・設営・販売・撤去まで、すべてお任せください。<br className="hidden md:block"/>
              全国の会場と優れた和の作り手を結び、確かな売上と賑わいを生み出します。
            </p>
            <p className="text-sm text-zinc-400 mb-12">愛知県名古屋市 ／ 全国対応</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/service/venue"
                className="px-8 py-4 bg-[var(--foreground)] text-white text-sm tracking-widest rounded hover:bg-[var(--accent)] transition-colors">
                会場をお持ちの方
              </Link>
              <Link href="/service/vendor"
                className="px-8 py-4 border border-[var(--foreground)] text-[var(--foreground)] text-sm tracking-widest rounded hover:bg-[var(--foreground)] hover:text-white transition-colors">
                出展・販売をご希望の方
              </Link>
            </div>
          </div>
          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <div className="flex flex-col items-center gap-2 text-zinc-300">
              <span className="text-xs tracking-widest">SCROLL</span>
              <div className="w-px h-10 bg-gradient-to-b from-zinc-300 to-transparent"/>
            </div>
          </div>
        </section>

        {/* ── 実績数字 ── */}
        <section className="py-16 bg-[var(--foreground)]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-zinc-700">
              {[
                { num: "全国", unit: "対応", label: "北海道〜九州まで" },
                { num: "10", unit: "坪〜", label: "対応スペース目安" },
                { num: "2〜3", unit: "ヶ月前", label: "推奨申込みタイミング" },
                { num: "一括", unit: "代行", label: "搬入〜撤去まで" },
              ].map((item, i) => (
                <div key={i} className="px-6 py-6 text-center">
                  <p className="font-serif text-3xl md:text-4xl text-white leading-none">
                    {item.num}<span className="text-base ml-1 text-zinc-300">{item.unit}</span>
                  </p>
                  <p className="text-xs text-zinc-400 mt-2 tracking-wide">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 二方向 CTA ── */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-3 text-center">SERVICE</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] mb-12 text-center">
              お客様のご状況に合わせて<br/>ご相談ください
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group border border-[var(--border)] p-10 hover:border-[var(--accent)] transition-colors">
                <p className="text-xs tracking-[0.2em] text-[var(--accent)] mb-3">FOR VENUE OWNERS</p>
                <h3 className="font-serif text-2xl text-[var(--foreground)] mb-5">催事開催をご検討の<br/>会場オーナー様へ</h3>
                <p className="text-sm text-zinc-500 leading-loose mb-6">
                  「空きスペースを有効活用したい」「集客力のある催事を開きたい」
                  そんなお悩みを、企画から運営まで一括でお引き受けします。
                </p>
                <ul className="space-y-2 text-xs text-zinc-400 mb-8">
                  <li>✓ 運営・スタッフ手配まで完全代行</li>
                  <li>✓ 20坪〜50坪のスペースに対応</li>
                  <li>✓ 和菓子・工芸品など多様なジャンル</li>
                </ul>
                <Link href="/service/venue"
                  className="inline-block text-sm tracking-widest text-[var(--accent)] border-b border-[var(--accent)] pb-1 group-hover:opacity-70 transition-opacity">
                  詳しく見る →
                </Link>
              </div>
              <div className="group border border-[var(--border)] p-10 hover:border-[var(--accent)] transition-colors">
                <p className="text-xs tracking-[0.2em] text-[var(--accent)] mb-3">FOR VENDORS / ARTISANS</p>
                <h3 className="font-serif text-2xl text-[var(--foreground)] mb-5">催事出展をご希望の<br/>作家・メーカー様へ</h3>
                <p className="text-sm text-zinc-500 leading-loose mb-6">
                  「全国の会場で販売したい」「準備の手間を減らしたい」
                  出展に必要な手続きから当日の販売サポートまでお任せください。
                </p>
                <ul className="space-y-2 text-xs text-zinc-400 mb-8">
                  <li>✓ 全国の会場をご紹介</li>
                  <li>✓ 什器・スタッフ手配を代行</li>
                  <li>✓ 作ることに専念できる環境</li>
                </ul>
                <Link href="/service/vendor"
                  className="inline-block text-sm tracking-widest text-[var(--accent)] border-b border-[var(--accent)] pb-1 group-hover:opacity-70 transition-opacity">
                  詳しく見る →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Flow ── */}
        <section id="flow" className="py-24 bg-[var(--accent-light)]">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-3">FLOW</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] mb-4">催事開催の流れ</h2>
            <p className="text-sm text-zinc-500 mb-14 max-w-xl">
              お問い合わせから開催当日まで、弊社が一貫してサポートします。<br/>
              はじめての方も安心してお任せください。
            </p>

            {/* Desktop: 横並び */}
            <div className="hidden md:block">
              <div className="flex items-start gap-0">
                {FLOW_STEPS.map((s, i) => (
                  <div key={i} className="flex-1 relative">
                    {i < FLOW_STEPS.length - 1 && (
                      <div className="absolute top-10 left-[calc(50%+24px)] right-0 h-px bg-[var(--border)] z-0"/>
                    )}
                    <div className="flex flex-col items-center text-center px-3 relative z-10">
                      <div className="w-20 h-20 rounded-full bg-white border border-[var(--border)] flex items-center justify-center mb-4 shadow-sm">
                        <FlowIcon type={s.icon} />
                      </div>
                      <p className="text-xs text-[var(--accent)] tracking-widest mb-1">{s.step}</p>
                      <h3 className="text-sm font-medium text-[var(--foreground)] mb-2 leading-snug">{s.title}</h3>
                      <p className="text-xs text-zinc-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: 縦並び */}
            <div className="md:hidden space-y-0">
              {FLOW_STEPS.map((s, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-white border border-[var(--border)] flex items-center justify-center shrink-0">
                      <FlowIcon type={s.icon} />
                    </div>
                    {i < FLOW_STEPS.length - 1 && <div className="w-px flex-1 bg-[var(--border)] my-2"/>}
                  </div>
                  <div className="pb-8 pt-2">
                    <p className="text-xs text-[var(--accent)] tracking-widest mb-1">{s.step}</p>
                    <h3 className="text-sm font-medium text-[var(--foreground)] mb-2">{s.title}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <Link href="/contact"
                className="inline-block px-10 py-4 bg-[var(--accent)] text-white text-sm tracking-widest hover:opacity-80 transition-opacity">
                まずは無料でご相談
              </Link>
            </div>
          </div>
        </section>

        {/* ── 催事実例 ── */}
        <section id="examples" className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-3">EXAMPLES</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] mb-4">催事実例</h2>
            <p className="text-sm text-zinc-500 mb-12">全国各地の会場にて、様々なジャンルの催事を開催しています。</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {EXAMPLES.map((ex, i) => (
                <div key={i} className={`relative rounded-sm overflow-hidden bg-gradient-to-br ${ex.bg} aspect-[4/3]`}>
                  {/* 苺大福装飾 */}
                  <div className="absolute top-3 right-3 opacity-20">
                    <Daifuku size={60} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-xs text-white/70 tracking-widest mb-1">{ex.venue}</p>
                    <h3 className="text-sm font-medium text-white leading-snug mb-1">{ex.category}</h3>
                    <p className="text-xs text-white/60">{ex.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 選ばれる理由 ── */}
        <section id="merit" className="py-24 bg-[var(--accent-light)]">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-3">WHY SAIYA</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] mb-14">選ばれる理由</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {MERITS.map((m, i) => (
                <div key={i} className="bg-white p-8 border border-[var(--border)]">
                  <div className="mb-5">{m.icon}</div>
                  <p className="text-xs text-[var(--accent)] tracking-widest mb-2">{m.num}</p>
                  <h3 className="text-base font-medium text-[var(--foreground)] mb-4 leading-snug">{m.title}</h3>
                  <p className="text-sm text-zinc-500 leading-loose">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-3">FAQ</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] mb-14">よくあるご質問</h2>
            <div className="space-y-0">
              {FAQS.map((faq, i) => (
                <div key={i} className="border-b border-[var(--border)] py-8">
                  <div className="flex gap-5 mb-4">
                    <span className="font-serif text-2xl text-[var(--accent)] leading-none shrink-0 w-6">Q</span>
                    <p className="text-base font-medium text-[var(--foreground)] leading-relaxed">{faq.q}</p>
                  </div>
                  <div className="flex gap-5">
                    <span className="font-serif text-2xl text-zinc-300 leading-none shrink-0 w-6">A</span>
                    <p className="text-sm text-zinc-500 leading-loose">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-zinc-400 mt-10 text-center">
              その他のご質問は、お問い合わせフォームよりお気軽にどうぞ。
            </p>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="py-24 bg-[var(--foreground)] text-white">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-4">まずは、ご相談ください。</h2>
              <p className="text-zinc-400 leading-loose text-sm">
                催事の規模・期間・ジャンルを問わずお気軽に。<br/>
                通常2営業日以内にご返信いたします。
              </p>
              <p className="mt-4 text-sm">
                <a href="mailto:saiya0318@saiya.info" className="text-[var(--accent)] hover:opacity-70 transition-opacity">
                  saiya0318@saiya.info
                </a>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/contact"
                className="px-10 py-4 border border-white text-sm tracking-widest text-center hover:bg-white hover:text-[var(--foreground)] transition-colors">
                お問い合わせフォーム
              </Link>
              <Link href="/service/venue"
                className="px-10 py-4 bg-[var(--accent)] text-sm tracking-widest text-center hover:opacity-80 transition-opacity">
                会場オーナー様はこちら
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="bg-white border-t border-[var(--border)] py-14">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <Image src="/logo.svg" alt="株式会社Saiya" width={110} height={46} className="mb-5" />
            <p className="text-xs text-zinc-400 leading-loose">
              愛知県名古屋市中川区中須町234-5<br/>
              代表取締役　加藤 真二<br/>
              <a href="mailto:saiya0318@saiya.info" className="hover:text-[var(--accent)] transition-colors">
                saiya0318@saiya.info
              </a>
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-16 gap-y-3 text-xs text-zinc-500">
            <Link href="/service/venue" className="hover:text-[var(--accent)] transition-colors">会場オーナー様へ</Link>
            <Link href="#flow" className="hover:text-[var(--accent)] transition-colors">催事の流れ</Link>
            <Link href="/service/vendor" className="hover:text-[var(--accent)] transition-colors">出展者様へ</Link>
            <Link href="#examples" className="hover:text-[var(--accent)] transition-colors">催事実例</Link>
            <Link href="/works" className="hover:text-[var(--accent)] transition-colors">実績</Link>
            <Link href="#faq" className="hover:text-[var(--accent)] transition-colors">よくある質問</Link>
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
