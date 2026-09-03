"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

const wishes = [
  { icon: "🛎️", title: "A magical year", text: "May every day bring a new adventure, a kind friend, and a little bit of magic." },
  { icon: "🥞", title: "Infinite dorayaki", text: "May your happiness be as unlimited as Doraemon's love for dorayaki!" },
  { icon: "🚪", title: "Anywhere you dream", text: "May every door you open lead to something wonderful, unexpected and unforgettable." },
];

function Doraemon() {
  return (
    <div className="doraemon-character" aria-label="Doraemon inspired cartoon">
      <div className="d-head">
        <div className="face" />
        <div className="eye eye-left"><i /></div><div className="eye eye-right"><i /></div>
        <div className="nose" /><div className="nose-line" />
        <div className="mouth" /><span className="whisker w1" /><span className="whisker w2" /><span className="whisker w3" />
        <span className="whisker w4" /><span className="whisker w5" /><span className="whisker w6" />
      </div>
      <div className="neck-bell"><span /></div>
      <div className="d-body"><div className="pocket" /></div>
      <div className="foot foot-left" /><div className="foot foot-right" />
    </div>
  );
}

function Door({ open }) {
  return (
    <div className={`anywhere-door ${open ? "door-open" : ""}`}>
      <div className="door-glow" />
      <div className="door-frame"><div className="door-panel"><span>✨</span><b>3</b></div></div>
      <div className="door-label">ANYWHERE DOOR</div>
    </div>
  );
}

export default function Home() {
  const [started, setStarted] = useState(false);
  const [selected, setSelected] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setMouse({ x: (e.clientX / window.innerWidth - .5) * 2, y: (e.clientY / window.innerHeight - .5) * 2 });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const celebrate = () => {
    setStarted(true);
    setShowMessage(true);
    confetti({ particleCount: 220, spread: 120, startVelocity: 48, scalar: 1.05, origin: { y: .58 } });
    setTimeout(() => confetti({ particleCount: 120, spread: 90, origin: { x: .12, y: .72 } }), 300);
    setTimeout(() => confetti({ particleCount: 120, spread: 90, origin: { x: .88, y: .72 } }), 550);
  };

  return (
    <main className="birthday-site">
      <div className="noise" />
      <div className="aurora aurora-one" /><div className="aurora aurora-two" />
      <div className="stars" aria-hidden="true">{Array.from({ length: 55 }, (_, i) => <span key={i} style={{ "--i": i }} />)}</div>

      <nav className="topbar">
        <div className="brand"><span className="brand-dot">●</span> DORAEMON <em>BIRTHDAY</em></div>
        <div className="date-pill">03 <small>SEP</small> <span>•</span> A FUTURE FULL OF MAGIC</div>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span /> A tiny birthday universe <span /></div>
          <h1>Happy Birthday<br /><strong>Doraemon</strong><b>!</b></h1>
          <p className="lead">Today, the Anywhere Door opens to a place where <strong>friendship, laughter, dorayaki</strong> and impossible adventures never end.</p>
          <button className="surprise-btn" onClick={celebrate}>
            <span className="btn-icon">🎁</span><span>{started ? "THE SURPRISE IS OPEN!" : "OPEN THE BIRTHDAY SURPRISE"}</span><span className="arrow">↗</span>
          </button>
          <div className="tiny-note">No homework today. That's an official Doraemon rule. ✨</div>
        </div>

        <div className="hero-art" style={{ transform: `translate3d(${mouse.x * 10}px, ${mouse.y * 8}px, 0)` }}>
          <div className="orbit orbit-a" /><div className="orbit orbit-b" />
          <div className="moon"><span>3</span></div>
          <div className="cloud cloud-a" /><div className="cloud cloud-b" />
          <Doraemon />
          <div className="floating-dorayaki">🥞</div><div className="floating-gift">🎁</div><div className="floating-heart">💙</div>
          <div className="ground-glow" />
        </div>
      </section>

      <section className="story-section">
        <div className="section-heading"><span>01 / THE MAGIC STARTS</span><h2>One birthday.<br /><i>Three little wishes.</i></h2></div>
        <div className="wish-grid">
          {wishes.map((wish, i) => (
            <button key={wish.title} className={`wish-card ${selected === i ? "active" : ""}`} onClick={() => setSelected(i)}>
              <div className="wish-number">0{i + 1}</div><div className="wish-icon">{wish.icon}</div>
              <h3>{wish.title}</h3><p>{wish.text}</p><span className="card-arrow">↗</span>
            </button>
          ))}
        </div>
        <div className="selected-wish"><span>✦</span> {wishes[selected].text} <span>✦</span></div>
      </section>

      <section className="door-section">
        <div className="door-copy"><span className="section-tag">02 / YOUR NEXT ADVENTURE</span><h2>Every great story<br />starts with a <i>door.</i></h2><p>Step through the Anywhere Door and leave the ordinary behind. There are galaxies to explore, friends to meet and memories waiting to happen.</p><button onClick={celebrate}>STEP INTO THE MAGIC <b>→</b></button></div>
        <Door open={started} />
      </section>

      <section className="final-section">
        <div className="final-card">
          <div className="final-top"><span>03 / ONE LAST THING</span><span>SEPTEMBER 3, 2026</span></div>
          <div className="final-content"><div><div className="mini-kicker">FROM THE HEART 💙</div><h2>May your next year be<br /><i>your best adventure yet.</i></h2><p>Keep your curiosity in your pocket, kindness in your heart, and a little courage for every impossible day.</p></div><div className="gift-box"><div className="lid" /><div className="box">🎁</div><span>FOR YOU</span></div></div>
          <button className="final-btn" onClick={() => setShowMessage(true)}>READ THE SECRET MESSAGE <span>♥</span></button>
        </div>
      </section>

      <footer><div className="footer-mark">D</div><p>Made with <span>♥</span> for Doraemon by Rafsanul Rifat</p><small>SEPTEMBER 3 · THE CUTEST BIRTHDAY IN THE FUTURE</small></footer>

      {showMessage && <div className="modal-backdrop" onClick={() => setShowMessage(false)}><div className="message-modal" onClick={e => e.stopPropagation()}><button className="close" onClick={() => setShowMessage(false)}>×</button><div className="modal-cat">🤖💙</div><span>SECRET MESSAGE UNLOCKED</span><h2>Happy Birthday,<br /><i>Doraemon!</i></h2><p>May your pocket always have a gadget for every impossible moment, your table always have dorayaki, and your world always have someone to laugh with.</p><div className="signature">— with a pocket full of love 💙</div></div></div>}
    </main>
  );
}
