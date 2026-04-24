import Image from "next/image";
import Link from "next/link";
import { ParticleCanvas } from "@/components/ParticleCanvas";

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
    title: "ヒアリング・要件整理",
    desc: "ご希望の業種・商材・エリア・時期などをお伺いします。販売パートナー・ビジネスパートナーのどちらとしての参加かも整理します。",
  },
  {
    icon: "plan",
    step: "03",
    title: "プラン・マッチングのご提案",
    desc: "ご要件に合わせた出店プランをご提案。場所の確保、商材調達システムの活用方法、パートナー候補のご紹介など具体策をご提示します。",
  },
  {
    icon: "contract",
    step: "04",
    title: "ご契約・体制確定",
    desc: "正式にご契約を結びます。出店日までのスケジュール、当日の役割分担、商材・資材の手配を進めます。",
  },
  {
    icon: "event",
    step: "05",
    title: "出店当日・現場サポート",
    desc: "販売スクリプト・接客ノウハウをもとに現場をサポート。終了後は実績レポートをもとに次回へ向けた改善を行います。",
  },
];

const EXAMPLES = [
  { location: "愛知県 名古屋市", venue: "百貨店", category: "和菓子・生菓子フェア", img: "/event-japan-02.png" },
  { location: "東京都 渋谷区", venue: "商業施設", category: "サンプル提供イベント", img: "/event-japan-01.png" },
  { location: "大阪府 大阪市", venue: "ショッピングセンター", category: "食品・物販マーケット", img: "/event-market.png" },
  { location: "愛知県 岡崎市", venue: "ホテル", category: "地域特産品・クラフト展", bg: "from-slate-600 to-zinc-600" },
  { location: "神奈川県 横浜市", venue: "商業施設", category: "美容・ヘルスケア展示", bg: "from-zinc-600 to-slate-600" },
  { location: "三重県 津市", venue: "ショッピングモール", category: "食品・雑貨フェスタ", bg: "from-stone-600 to-zinc-700" },
] as { location: string; venue: string; category: string; img?: string; bg?: string }[];

const MERITS = [
  {
    num: "01",
    title: "場所の確保と商材・資材の調達システム",
    desc: "全国の商業施設・百貨店・ホテル等との独自ネットワークで出店場所を確保。商材・資材の調達システムで準備の手間とコストを大幅に削減します。",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
        <rect x="8" y="14" width="40" height="28" rx="3" stroke="var(--accent)" strokeWidth="2"/>
        <path d="M8 22 H48" stroke="var(--accent)" strokeWidth="1.5"/>
        <path d="M20 14 V8 M36 14 V8" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 32 L24 32 M30 32 L40 32" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 38 L32 38" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "現場で成果を出す販売ノウハウ",
    desc: "大手チェーン店での現場マネジメント経験と、会計・システムコンサルの知見を融合。実績のある販売スクリプト・接客ノウハウで現場の売上を最大化します。",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
        <circle cx="28" cy="28" r="18" stroke="var(--accent)" strokeWidth="2"/>
        <ellipse cx="28" cy="28" rx="10" ry="18" stroke="var(--accent)" strokeWidth="1.5"/>
        <line x1="10" y1="28" x2="46" y2="28" stroke="var(--accent)" strokeWidth="1.5"/>
        <line x1="13" y1="18" x2="43" y2="18" stroke="var(--accent)" strokeWidth="1.5"/>
        <line x1="13" y1="38" x2="43" y2="38" stroke="var(--accent)" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "販売パートナー同士の連携基盤",
    desc: "個別の出店にとどまらず、複数の販売パートナーが連携できる仕組みを整備。スケーラブルなビジネス展開をバックアップします。",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
        <circle cx="20" cy="20" r="7" stroke="var(--accent)" strokeWidth="2"/>
        <path d="M8 44 Q8 32 20 32 Q32 32 32 44" stroke="var(--accent)" strokeWidth="2" fill="none"/>
        <path d="M34 26 L38 30 L46 20" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const FAQS = [
  {
    q: "対応できる業種・商材に制限はありますか？",
    a: "業種・商材は問いません。和菓子・食品はもちろん、サンプル提供イベント、雑貨、美容・健康商品など、イベント販売に適した商材であればご相談ください。",
  },
  {
    q: "搬入・搬出はSaiyaが対応してもらえますか？",
    a: "搬入・搬出は原則として各パートナー様ご自身での対応となります。Saiyaは場所の確保、商材・資材調達システム、現場販売ノウハウ、パートナー連携をご提供します。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "全国対応しております。主要実績は東海（名古屋を中心に）、次いで関東・関西エリアです。その他のエリアもお気軽にご相談ください。",
  },
  {
    q: "申し込みはどのくらい前に行えばよいですか？",
    a: "2〜3ヶ月前のご連絡を推奨しています。スケジュールの空き状況によっては短期間での対応も可能な場合がありますので、まずはお気軽にご相談ください。",
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
            <Link href="#flow" className="text-zinc-600 hover:text-[var(--accent)] transition-colors">出店の流れ</Link>
            <Link href="#examples" className="text-zinc-600 hover:text-[var(--accent)] transition-colors">実績事例</Link>
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
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <Image src="/event-booth.png" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-[var(--foreground)]/65" />
          <ParticleCanvas />
          <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
            <p className="text-xs tracking-[0.4em] text-[var(--accent)] mb-6 uppercase">Event Business Platform</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide text-white mb-6">
              イベント出店の仕組みで、<br />ビジネスを前に進める。
            </h1>
            <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl mx-auto mb-4">
              業種・商材を問わず、全国のイベント出店を支援。<br className="hidden md:block"/>
              場所の確保、商材調達システム、現場販売ノウハウ、パートナー連携まで。
            </p>
            <p className="text-sm text-white/50 mb-12">拠点：愛知県名古屋市 ／ 主要実績：東海・関東・関西 ／ 全国対応</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/service/venue"
                className="px-8 py-4 bg-white text-[var(--foreground)] text-sm tracking-widest rounded hover:bg-[var(--accent)] hover:text-white transition-colors">
                販売パートナーとして参加する
              </Link>
              <Link href="/service/vendor"
                className="px-8 py-4 border border-white text-white text-sm tracking-widest rounded hover:bg-white hover:text-[var(--foreground)] transition-colors">
                ビジネスパートナーとして協業する
              </Link>
            </div>
          </div>
          <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
            <div className="flex flex-col items-center gap-2 text-white/50">
              <span className="text-xs tracking-widest">SCROLL</span>
              <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"/>
            </div>
          </div>
        </section>

        {/* ── 実績数字 ── */}
        <section className="py-16 bg-[var(--foreground)]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-zinc-700">
              {[
                { num: "全国", unit: "対応", label: "東海・関東・関西を中心に全国展開" },
                { num: "業種", unit: "不問", label: "あらゆる商材・イベント形式に対応" },
                { num: "2〜3", unit: "ヶ月前", label: "推奨申込みタイミング" },
                { num: "4", unit: "つの提供価値", label: "場所・調達・ノウハウ・連携" },
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
                <p className="text-xs tracking-[0.2em] text-[var(--accent)] mb-3">FOR SALES PARTNERS</p>
                <h3 className="font-serif text-2xl text-[var(--foreground)] mb-5">販売パートナーとしての<br/>参加を検討の方へ</h3>
                <p className="text-sm text-zinc-500 leading-loose mb-6">
                  イベント出店で安定した売上を作りたい方、全国展開を目指す方へ。
                  場所・システム・ノウハウをまとめて提供します。
                </p>
                <ul className="space-y-2 text-xs text-zinc-400 mb-8">
                  <li>✓ 全国の出店場所を確保</li>
                  <li>✓ 商材・資材の調達システム提供</li>
                  <li>✓ 現場販売のノウハウ・スクリプト提供</li>
                </ul>
                <Link href="/service/venue"
                  className="inline-block text-sm tracking-widest text-[var(--accent)] border-b border-[var(--accent)] pb-1 group-hover:opacity-70 transition-opacity">
                  詳しく見る →
                </Link>
              </div>
              <div className="group border border-[var(--border)] p-10 hover:border-[var(--accent)] transition-colors">
                <p className="text-xs tracking-[0.2em] text-[var(--accent)] mb-3">FOR BUSINESS PARTNERS</p>
                <h3 className="font-serif text-2xl text-[var(--foreground)] mb-5">ビジネスパートナーとしての<br/>協業を検討の方へ</h3>
                <p className="text-sm text-zinc-500 leading-loose mb-6">
                  イベント出店事業の立ち上げ・拡大を協業したい方へ。
                  代表の会計・システム知見を活かし、事業ごと支援します。
                </p>
                <ul className="space-y-2 text-xs text-zinc-400 mb-8">
                  <li>✓ 事業設計・ビジネスモデル構築の支援</li>
                  <li>✓ 全国展開への体制整備</li>
                  <li>✓ 多角的経営ノウハウの活用</li>
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
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] mb-4">出店までの流れ</h2>
            <p className="text-sm text-zinc-500 mb-14 max-w-xl">
              お問い合わせから出店当日まで、弊社が一貫してサポートします。<br/>
              はじめての方も安心してご相談ください。
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
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] mb-4">実績事例</h2>
            <p className="text-sm text-zinc-500 mb-12">全国各地の会場にて、様々な業種・形態のイベント出店を支援しています。</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {EXAMPLES.map((ex, i) => (
                <div key={i} className="relative rounded-sm overflow-hidden aspect-[4/3]">
                  {ex.img ? (
                    <Image src={ex.img} alt={ex.category} fill className="object-cover" />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${ex.bg}`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>
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

        {/* ── About ── */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-xs tracking-[0.3em] text-[var(--accent)] mb-3">ABOUT</p>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--foreground)] mb-10">代表について</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-lg font-medium text-[var(--foreground)] mb-1">加藤 真二</p>
                <p className="text-xs text-zinc-400 tracking-widest mb-6">代表取締役 / 株式会社Saiya</p>
                <p className="text-sm text-zinc-500 leading-loose">
                  大手チェーン店の店長として現場経験を積んだ後、会計・システムコンサルタントとして多くの企業の経営課題を解決。現在は介護事業など複数事業を手掛ける多角的な経営者として活動しながら、イベント出店支援事業を展開。現場で培った実践知と、数字・システムに強いコンサルの視点を組み合わせ、販売パートナー・ビジネスパートナーの成果最大化を支援している。
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "出発点", value: "大手チェーン店 店長として現場マネジメントを経験" },
                  { label: "専門領域", value: "会計・システム構築コンサルティング" },
                  { label: "現在の展開", value: "介護事業等を含む多角的な事業経営" },
                  { label: "本サービス", value: "イベント出店支援事業（全国対応）" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 py-3 border-b border-[var(--border)]">
                    <span className="text-xs text-[var(--accent)] tracking-widest w-24 shrink-0 pt-0.5">{item.label}</span>
                    <span className="text-sm text-zinc-600">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="py-24 bg-[var(--foreground)] text-white">
          <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-4">あなたのイベント出店を、<br/>次のステージへ。</h2>
              <p className="text-zinc-400 leading-loose text-sm">
                業種・商材・規模を問わず、まずはご相談ください。<br/>
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
                販売パートナーとして参加
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
            <Link href="/service/venue" className="hover:text-[var(--accent)] transition-colors">販売パートナーの方へ</Link>
            <Link href="#flow" className="hover:text-[var(--accent)] transition-colors">出店の流れ</Link>
            <Link href="/service/vendor" className="hover:text-[var(--accent)] transition-colors">ビジネスパートナーの方へ</Link>
            <Link href="#examples" className="hover:text-[var(--accent)] transition-colors">実績事例</Link>
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
