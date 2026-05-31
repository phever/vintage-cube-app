import Image from "next/image";

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

        <div className="responsive-grid">
          {/* Map visual */}
          <div
            style={{
              background: "#121212",
              border: "1px solid var(--border)",
              borderRadius: 12,
              height: 280,
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Faux map background */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 50% 50%, #222 0%, #111 100%)",
                opacity: 0.5,
              }}
            />
            {/* Faux grid lines */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: "var(--accent)",
                  borderRadius: "50% 50% 50% 0",
                  transform: "rotate(-45deg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(201,100,66,0.4)",
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    background: "white",
                    borderRadius: "50%",
                    transform: "rotate(45deg)",
                  }}
                />
              </div>
              <a
                href="https://maps.google.com/?q=Reliquary+Cards+Calgary+AB"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-outline-white"
                style={{ fontSize: 12, padding: "10px 20px" }}
              >
                View on Google Maps ↗
              </a>
            </div>
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
                  href="https://reliquarycards.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  reliquarycards.com ↗
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
                Per seat · Covers prizes and donation.
                <br />
                <div
                  style={{
                    marginTop: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <Image
                    src="/calgary-food-bank-logo.jpg"
                    alt="Calgary Food Bank"
                    width={60}
                    height={32}
                    style={{
                      borderRadius: 4,
                      objectFit: "contain",
                      background: "white",
                    }}
                  />
                  <span
                    style={{
                      color: "var(--text-subtle)",
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                  >
                    100% of proceeds (entry fees minus prizing) donated directly
                    to the Calgary Food Bank. Additional donations (including
                    food donations like canned goods) will be accepted at the
                    door.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

