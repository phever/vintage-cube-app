export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 24px 80px",
        maxWidth: 1100,
        margin: "0 auto",
        width: "100%",
      }}
    >
      {/* Eyebrow */}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.2em",
          color: "var(--text-muted)",
          marginBottom: 20,
          textTransform: "uppercase",
        }}
      >
        Charity Event · Calgary AB · August 2026
      </div>

      {/* Headline */}
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(64px, 10vw, 130px)",
          lineHeight: 0.9,
          fontWeight: 700,
          margin: "0 0 20px",
          letterSpacing: "-1px",
        }}
      >
        Vintage Cube
        <br />
        <span style={{ color: "var(--accent)" }}>for a cause.</span>
      </h1>

      {/* Squiggle */}
      <svg
        width={200}
        height={12}
        viewBox="0 0 200 12"
        fill="none"
        style={{ marginBottom: 28 }}
      >
        <path
          d="M0 6 Q 25 0 50 6 Q 75 12 100 6 Q 125 0 150 6 Q 175 12 200 6"
          stroke="var(--accent)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Subtext */}
      <p
        style={{
          fontSize: 18,
          color: "var(--text-muted)",
          marginBottom: 40,
          maxWidth: 540,
          lineHeight: 1.6,
        }}
      >
        540 cards. 8 pods of 8. 100% of proceeds supporting the{" "}
        <span style={{ color: "var(--text)", fontWeight: 500 }}>
          Calgary Food Bank
        </span>
        . Grand prize:{" "}
        <span style={{ color: "var(--text)", fontWeight: 500 }}>
          Underground Sea
        </span>
        .
      </p>

      {/* CTAs */}
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a
          href="https://reliquarycards.com/events"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent"
        >
          Register for a seat →
        </a>
        <a
          href="https://cubecobra.com/cube/list/mokecube"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          Browse the cube list ↗
        </a>
      </div>

      {/* Stats bar */}
      <div
        style={{
          display: "flex",
          gap: 0,
          marginTop: 80,
          borderTop: "1px solid var(--border)",
          paddingTop: 32,
          flexWrap: "wrap",
        }}
      >
        {[
          { num: "64", label: "Players" },
          { num: "8", label: "Pods" },
          { num: "Aug 1–8", label: "Qualifying rounds" },
          { num: "Aug 15", label: "Top 8 final" },
        ].map((stat, i) => (
          <div
            key={i}
            style={{
              flex: "1 1 120px",
              paddingRight: 32,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 36,
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1,
              }}
            >
              {stat.num}
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginTop: 4,
                textTransform: "uppercase",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
