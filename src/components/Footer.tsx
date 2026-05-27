export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "40px 24px",
        background: "var(--surface)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 4,
            }}
          >
            ✦ Reliquary Cards
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--text-muted)",
              letterSpacing: "0.08em",
            }}
          >
            Charity Vintage Cube · Calgary AB · August 2026
          </div>
        </div>

        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <a
            href="https://cubecobra.com/cube/list/mokecube"
            target="_blank"
            rel="noopener noreferrer"
            className="link-muted"
          >
            CubeCobra List ↗
          </a>
          <a
            href="https://reliquarycards.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="link-muted"
          >
            reliquarycards.ca ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
