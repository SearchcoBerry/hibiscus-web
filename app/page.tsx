import { Header } from "./_components/Header";

const services = [
  {
    icon: "🌐",
    name: "Webサイト制作",
    desc: "コーポレートサイト・LP・サービスサイトを企画から運用まで。沖縄の中小企業の「顔」になるサイトを作ります。",
    tags: ["Next.js", "Vercel", "Headless CMS", "SEO"],
  },
  {
    icon: "⚙️",
    name: "システム開発",
    desc: "業務を回す管理ツール・予約システム・顧客管理など、現場で本当に使える業務システムをスモールスタートで。",
    tags: ["Web App", "業務効率化", "DB設計", "クラウド"],
  },
  {
    icon: "🛟",
    name: "運用・保守",
    desc: "作って終わりにしない。サイト・システムの安定運用、機能追加、データ運用まで一気通貫でサポート。",
    tags: ["継続保守", "改修", "監視", "相談窓口"],
  },
];

type Work = {
  category: string;
  title: string;
  desc: string;
  tags: string[];
  link: string | null;
  accent: "default" | "teal" | "amber";
};

const works: Work[] = [
  {
    category: "Webサイト制作",
    title: "響エステート 公式サイト",
    desc: "沖縄の不動産会社「響エステート」のコーポレートサイト。物件一覧・資料DL・お問い合わせフォームを実装。物件はゆきさん自身が管理画面から自由に追加・編集できる簡易CMSを内蔵。",
    tags: ["Next.js", "Vercel Blob", "簡易CMS", "Googleフォーム連携"],
    link: "https://hibikiestateweb.vercel.app",
    accent: "default",
  },
  {
    category: "システム開発",
    title: "アスリート工房 練習日誌",
    desc: "陸上クラブの練習記録・大会記録・出席管理を一元化するWebアプリ。選手・コーチ・指導者で役割を分けて、スマホから日々の練習を記録。大会記録はスプレッドシートからTSV一括取込み対応。",
    tags: ["業務システム", "選手認証", "TSV一括取込", "管理画面"],
    link: null,
    accent: "teal",
  },
  {
    category: "システム開発",
    title: "MSJ 月謝管理システム",
    desc: "学習塾の月謝請求・入金管理・延滞督促を自動化する管理システム。生徒ごとの料金プランに応じた請求書発行から入金消込までを、ひと月のルーチンを大きく短縮。",
    tags: ["月謝請求", "入金管理", "帳票出力", "業務自動化"],
    link: null,
    accent: "amber",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <section id="top" className="hero">
        <div className="container hero-inner">
          <span className="hero-eyebrow">🌺 Cyber Hibiscus / 電脳扶桑集団</span>
          <h1 className="hero-title">
            赤い花は、<br />
            <span className="accent">果敢に咲く</span>。
          </h1>
          <p className="hero-sub">
            はいびすかす屋は、沖縄の小さな技術屋集団です。<br />
            赤いハイビスカスの花言葉「<strong>勇敢・信頼・次々に新しい花を咲かせる</strong>」にちなんで、<br />
            ひとつひとつ、信頼を積み上げていく仕事を心がけています。
          </p>
          <div className="hero-cta">
            <a href="#about" className="btn-primary">私たちのことを見る →</a>
            <a href="#works" className="btn-secondary">仕事の例</a>
          </div>
        </div>
      </section>

      <section id="about" className="section section-paper">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">ABOUT</span>
            <h2 className="section-title">私たちについて</h2>
            <p className="section-lead">
              沖縄を拠点に、開発・運用・データを分担する3人体制のチームです。<br />
              小さく動いて、現場の声に応える距離感を大切にしています。
            </p>
          </div>

          <div className="origin-card">
            <p className="origin-label">屋号の由来</p>
            <p className="origin-quote">
              <strong>赤いハイビスカス</strong>の花言葉「<strong>勇敢・信頼・次々に新しい花を咲かせる</strong>」にちなんで。<br />
              どんな仕事にも果敢に挑戦し、ひとつずつ信頼を積み、次の花を咲かせる集団でありたい。<br />
              そんな願いを込めて「はいびすかす屋」と名乗っています。
            </p>
            <div className="origin-names">
              <div><span className="origin-lang">JP</span><span className="origin-text">はいびすかす屋</span></div>
              <div><span className="origin-lang">EN</span><span className="origin-text">Cyber Hibiscus</span></div>
              <div><span className="origin-lang">ZH</span><span className="origin-text">電脳扶桑集団</span></div>
            </div>
          </div>

          <div className="about-grid">
            <div className="member-card">
              <p className="member-role">DEVELOPMENT</p>
              <p className="member-name">米田 圭</p>
              <p className="member-desc">
                Web・システム開発全般。要件整理から実装・運用まで担当。Next.js / TypeScript / 業務システム設計が得意領域。
              </p>
            </div>
            <div className="member-card">
              <p className="member-role">OPERATIONS</p>
              <p className="member-name">前田</p>
              <p className="member-desc">
                運用・営業窓口。お客様との対話、要件すり合わせ、現場運用の整備を担当。「お客様の言葉」を技術に翻訳する役割。
              </p>
            </div>
            <div className="member-card">
              <p className="member-role">DATA</p>
              <p className="member-name">幸喜</p>
              <p className="member-desc">
                データ周りの設計・運用。データベース設計、データ移行、運用フローの整備を担当。
              </p>
            </div>
          </div>

          <dl className="about-meta">
            <div>
              <dt>所在地</dt>
              <dd>沖縄県</dd>
            </div>
            <div>
              <dt>体制</dt>
              <dd>少人数チーム / 受託制作</dd>
            </div>
            <div>
              <dt>対応領域</dt>
              <dd>Web・業務システム・運用</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="services" className="section section-white">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">SERVICES</span>
            <h2 className="section-title">— 答え合わせ —<br />実は、技術屋集団です。</h2>
            <p className="section-lead">
              「現場で使えるかどうか」を判断軸に、3つの領域で事業をお手伝いしています。<br />
              Web・業務システム・運用、どれも沖縄の中小企業の規模感に合わせて。
            </p>
          </div>

          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.name}>
                <div className="service-icon" aria-hidden>{s.icon}</div>
                <h3 className="service-name">{s.name}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-tags">
                  {s.tags.map((t) => (
                    <span className="service-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="works" className="section section-paper">
        <div className="container">
          <div className="section-head">
            <span className="section-eyebrow">WORKS</span>
            <h2 className="section-title">制作実績</h2>
            <p className="section-lead">
              実際にお取引させていただいているお客様のうち、公開可能な事例をご紹介します。
            </p>
          </div>

          <div className="works-grid">
            {works.map((w) => (
              <article className="work-card" key={w.title}>
                <div className={`work-thumb${w.accent === "default" ? "" : ` ${w.accent}`}`} aria-hidden>
                  {w.accent === "default" ? "🏠" : w.accent === "teal" ? "🏃" : "📚"}
                </div>
                <div className="work-body">
                  <p className={`work-category${w.accent === "default" ? "" : ` ${w.accent}`}`}>{w.category}</p>
                  <h3 className="work-title">{w.title}</h3>
                  <p className="work-desc">{w.desc}</p>
                  <div className="work-tags">
                    {w.tags.map((t) => (
                      <span className="work-tag" key={t}>{t}</span>
                    ))}
                  </div>
                  {w.link ? (
                    <a
                      href={w.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`work-link${w.accent === "default" ? "" : ` ${w.accent}`}`}
                    >
                      公開サイトを見る →
                    </a>
                  ) : (
                    <span className={`work-link disabled`}>非公開の業務システム</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-white">
        <div className="container">
          <div className="contact-card">
            <h2 className="contact-title">プロジェクトのご相談、お待ちしています</h2>
            <p className="contact-sub">
              「こんなことできる？」のひと言からで大丈夫です。<br />
              まずは現状をお聞かせください。沖縄県外のお客様もご相談を承ります。
            </p>
            <div className="contact-actions">
              <a
                href="mailto:k-yoneda@komekomecraft.work?subject=はいびすかす屋へのお問い合わせ"
                className="btn-primary"
              >
                ✉ メールでお問い合わせ
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Instagram DM
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div>
              <p className="footer-logo">🌺 はいびすかす屋</p>
              <p className="footer-desc">
                沖縄拠点のWeb制作・システム開発チーム。<br />
                中小企業の現場に、使えるITを。
              </p>
            </div>
            <div className="footer-section">
              <h4>SECTIONS</h4>
              <ul>
                <li><a href="#about">私たちについて</a></li>
                <li><a href="#services">サービス</a></li>
                <li><a href="#works">制作実績</a></li>
                <li><a href="#contact">お問い合わせ</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>CONTACT</h4>
              <ul>
                <li><a href="mailto:k-yoneda@komekomecraft.work">k-yoneda@komekomecraft.work</a></li>
              </ul>
            </div>
          </div>
          <p className="copyright">© 2026 はいびすかす屋 / Hibiscus Studio</p>
        </div>
      </footer>
    </>
  );
}
