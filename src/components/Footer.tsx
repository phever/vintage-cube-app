import Image from "next/image";

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
              marginBottom: 8,
            }}
          >
            <Image
              src="/Reliquary_Logo_Full_Stroke.png"
              alt="Reliquary Cards Logo"
              width={140}
              height={28}
              style={{ height: "28px", width: "auto" }}
            />
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "var(--text-muted)",
              letterSpacing: "0.08em",
            }}
          >
            Supporting the Calgary Food Bank · Calgary AB · August 2026
          </div>
        </div>

        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <a
            href="https://www.calgaryfoodbank.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-muted"
          >
            Calgary Food Bank ↗
          </a>
          <a
            href="https://reliquarycards.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-muted"
          >
            reliquarycards.com ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
