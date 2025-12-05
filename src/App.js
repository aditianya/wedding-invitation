import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  // COUNTDOWN LOGIC
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const targetDate = new Date("2026-02-03T18:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>

      {/* 🔥 Sticky Navigation */}
      <nav className="navbar">
        <div className="nav-logo">💍 Tapatya & Laxmi</div>

        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#date">Wedding Date</a></li>
          <li><a href="#invite">Invite</a></li>
          <li><a href="#qr">Blessings</a></li>
          <li><a href="#rsvp">Compliments</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/wedding-video.mp4" type="video/mp4" />
        </video>

        <div className="overlay">
          <h1 className="couple-name">Tapatya ❤️ Laxmi</h1>
          <p className="wedding-date">Wedding on Feb 3, 2026</p>
        </div>
      </section>

      {/* SECTION WRAP */}
      <div className="section-light">

        {/* COUNTDOWN */}
        <h2 className="section-title center-text">⏳ Countdown to The Big Day</h2>

        <div className="countdown">
          <div><span>{timeLeft.days}</span> Days</div>
          <div><span>{timeLeft.hours}</span> Hours</div>
          <div><span>{timeLeft.minutes}</span> Minutes</div>
          <div><span>{timeLeft.seconds}</span> Seconds</div>
        </div>

        {/* CALENDAR DATE */}
       <div id="date" className="gold-frame">
  <div className="calendar-wrapper">
    <img src="/lotus.png" className="mandala-left" alt="" />

  {/* Mandala Right */}
  <img src="/lotus.png" className="mandala-right" alt="" />
  

    <div className="calendar-box">
      <h2 className="section-title">Wedding Date</h2>
      <p className="calendar-month-title">February 2026</p>

      <div className="calendar-grid">
        {Array.from({ length: 31 }).map((_, i) => {
          const day = i + 1;
          return (
            <div
              key={day}
              className={`calendar-day ${
                day === 3 ? "wedding-day" : ""
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  </div>
</div>

        {/* INVITATION */}
        <div id="invite" className="gold-frame">
          <div className="invite-box">
            <h2 className="section-title">Wedding Invitation</h2>

            <p className="invite-text center-text">
              With joyful hearts and the blessings of our families, <br />
              we invite you to celebrate our special day.
            </p>

            <p className="invite-text" style={{ marginTop: "10px" }}>
              📍 <b>Venue:</b> Kerukoacha <br />
              🕒 <b>Time:</b> 6:00 PM Onwards
            </p>
          </div>
        </div>

        {/* QR BLESSINGS */}
        <div id="qr" className="gold-frame">
          <div className="invite-box">
            <h2 className="section-title">💝 Send Your Blessings</h2>

            <img src="/qr.png" alt="QR" className="qr-img" />

            <button
              className="qr-btn"
              onClick={() => {
                const a = document.createElement("a");
                a.href = "/qr.png";
                a.download = "Wedding_QR.png";
                a.click();
              }}
            >
              Download QR
            </button>
          </div>
        </div>

        {/* COMPLIMENTS SECTION */}
        {/* COMPLIMENTS SECTION */}
<div id="rsvp" className="gold-frame">
  <div id="compliments-box">
    <h2 id="compliments-title">💌 With Best Compliments From</h2>

    <p>
      mampi, pintu, muna, Chutu, kono, piu, suman, bitu, mukta,
      litu, siu, tuktuki, sandeep, priya, kunal, ommi,
      koushik, ayush
    </p>
  </div>
</div>


      </div>

      <footer className="footer">
        Made with 💜 for the special day.
      </footer>

    </div>
  );
}

export default App;
