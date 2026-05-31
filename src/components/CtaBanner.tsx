export default function CtaBanner() {
  return (
    <section
      style={{
        padding: "80px 24px",
        background: "var(--accent)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 32,
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: 0.95,
              color: "#fff7e8",
              margin: "0 0 12px",
            }}
          >
            Reserve your seat.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255, 247, 232, 0.7)",
              margin: 0,
              maxWidth: 440,
              lineHeight: 1.6,
            }}
          >
            64 seats across 8 pods. $50 entry fee, 100% of proceeds to the{" "}
            <strong>Calgary Food Bank</strong>. Additional donations (including
            food donations like canned goods) will be accepted at the door.
          </p>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href="https://cubecobra.com/cube/list/mokecube"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-outline-white"
          >
            View cube list ↗
          </a>
          <a
            href="https://reliquarycards.com/events"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-white"
          >
            Get details & Register →
          </a>
        </div>
      </div>
    </section>
  );
}
