export default function Venue() {
  return (
    <section id="venue" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: 48, maxWidth: 600 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.2em",
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Where
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: 0.95,
              margin: "0 0 20px",
            }}
          >
            Reliquary Cards,
            <br />
            Calgary AB.
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "var(--text-muted)",
              lineHeight: 1.7,
            }}
          >
            Your local Calgary game store and home to this charity event.
            Tables, sleeves available at the shop. Bring your own playmat.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
        >
          {/* Map placeholder */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              height: 280,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <svg
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none"
              style={{ opacity: 0.3 }}
            >
              <circle
                cx="20"
                cy="18"
                r="8"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="20" cy="18" r="3" fill="currentColor" />
              <path
                d="M20 26 C14 30 8 35 8 38 L32 38 C32 35 26 30 20 26Z"
                fill="currentColor"
                opacity="0.3"
              />
            </svg>
            <a
              href="https://maps.google.com/?q=Reliquary+Cards+Calgary+AB"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
              style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.05em" }}
            >
              Open in Google Maps ↗
            </a>
          </div>

          {/* Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Store info */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 24,
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                Reliquary Cards
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  letterSpacing: "0.03em",
                }}
              >
                Calgary, Alberta
                <br />
                <a
                  href="https://reliquarycards.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  reliquarycards.ca ↗
                </a>
              </div>
            </div>

            {/* Entry info */}
            <div
              style={{
                background: "var(--accent-faint)",
                border: "1px solid var(--accent)",
                borderRadius: 12,
                padding: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                Entry Fee
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 52,
                  fontWeight: 700,
                  color: "var(--accent)",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                $50
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "var(--text-muted)",
                  lineHeight: 1.6,
                }}
              >
                Per seat · All proceeds go to charity.
                <br />
                <span
                  style={{ color: "var(--text-subtle)", fontSize: 12 }}
                >
                  Charity partner TBD — 100% of entry fees donated.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
