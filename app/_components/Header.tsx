"use client";

import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo" onClick={close}>
          <span className="logo-mark" aria-hidden>
            🌺
          </span>
          はいびすかす屋
        </a>
        <nav className={`nav${open ? " open" : ""}`}>
          <ul>
            <li><a href="#about" onClick={close}>私たち</a></li>
            <li><a href="#services" onClick={close}>サービス</a></li>
            <li><a href="#works" onClick={close}>制作実績</a></li>
            <li><a href="#contact" className="nav-cta" onClick={close}>お問い合わせ</a></li>
          </ul>
        </nav>
        <button
          className="menu-toggle"
          aria-label="メニュー"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
