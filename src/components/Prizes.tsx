const prizes = [
  {
    place: "1st place",
    card: "Underground Sea",
    type: "Dual Land",
    color: "var(--accent)",
    featured: true,
  },
  {
    place: "2nd place",
    card: "Vintage Staple",
    type: "Reserved List",
    color: "var(--text-muted)",
    featured: false,
  },
  {
    place: "3rd–4th",
    card: "Power-adjacent",
    type: "Reserved List",
    color: "var(--text-muted)",
    featured: false,
  },
  {
    place: "5th–8th",
    card: "Reserved List",
    type: "Vintage Rare",
    color: "var(--text-muted)",
    featured: false,
  },
];

function CardArt({ featured }: { featured: boolean }) {
  return (
    <div
      style={{
        width: featured ? 120 : 90,
        height: featured ? 168 : 126,
        borderRadius: 6,
        border: featured ? "2px solid var(--accent)" : "1px solid var(--border)",
        background: featured ? "var(--accent-faint)" : "var(--surface-raised)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* MTG-ish card frame lines */}
      <div
        style={{
          position: "absolute",
          inset: 6,
          border: featured ? "1px solid rgba(201,100,66,0.3)" : "1px solid rgba(255,255,255,0.06)",
          borderRadius: 3,
        }}
      />
      <svg
        width={featured ? 48 : 36}
        height={featured ? 48 : 36}
        viewBox="0 0 48 48"
        fill="none"
        style={{ opacity: featured ? 0.6 : 0.25 }}
      >
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 8 L28 20 L40 20 L30 28 L34 40 L24 32 L14 40 L18 28 L8 20 L20 20 Z" fill="currentColor" opacity="0.5" />
      </svg>
    </div>
  );
}

export default function Prizes() {
  return (
    <section
      id="prizes"
      style={{
        padding: "80px 24px",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: 48 }}>
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
            Top 8 Takes Home Vintage
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 700,
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            The Prize Pool.
          </h2>
        </div>

        {/* Prize cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {prizes.map((prize, i) => (
            <div
              key={i}
              style={{
                background: prize.featured ? "var(--accent-faint)" : "var(--surface-raised)",
                border: `1px solid ${prize.featured ? "var(--accent)" : "var(--border)"}`,
                borderRadius: 12,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 16,
                transform: prize.featured ? "none" : `rotate(${(i - 1.5) * 0.4}deg)`,
                transition: "transform 0.2s",
              }}
            >
              <CardArt featured={prize.featured} />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    color: prize.featured ? "var(--accent)" : "var(--text-muted)",
                    textTransform: "uppercase",
                    marginBottom: 6,
                  }}
                >
                  {prize.place}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: prize.featured ? 28 : 22,
                    fontWeight: 700,
                    color: prize.featured ? "var(--accent)" : "var(--text)",
                    lineHeight: 1,
                    marginBottom: 4,
                  }}
                >
                  {prize.card}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--text-muted)",
                  }}
                >
                  {prize.type}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: 24,
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--text-subtle)",
            letterSpacing: "0.05em",
          }}
        >
          * Exact prizes for 2nd–8th place TBD. All prizes are vintage Magic: the Gathering cards.
        </p>
      </div>
    </section>
  );
}
