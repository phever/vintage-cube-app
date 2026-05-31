import Image from "next/image";

const prizes = [
  {
    place: "1st place",
    card: "Tundra",
    type: "Revised Edition",
    image: "https://cards.scryfall.io/large/front/9/c/9c9d5f72-e199-4d5b-ae7e-cc5b9bdfae99.jpg?1559596750",
    featured: true,
  },
  {
    place: "2nd place",
    card: "Berserk",
    type: "Limited Edition Beta",
    image: "https://cards.scryfall.io/large/front/8/8/88d6f431-a7ea-4508-a52c-86d33e12e4e4.jpg?1559591868",
    featured: false,
  },
  {
    place: "3rd–4th",
    card: "Demonic Tutor",
    type: "Unlimited Edition",
    image: "https://cards.scryfall.io/large/front/c/8/c8d5d6a5-6807-4a80-9460-7633dc430ee9.jpg?1559591813",
    featured: false,
  },
  {
    place: "5th–8th",
    card: "Force of Will",
    type: "Alliances",
    image: "https://cards.scryfall.io/large/front/9/a/9a879b60-4381-447d-8a5a-8e0b6a1d49ca.jpg?1562769672",
    featured: false,
  },
];

function CardArt({ image, featured, cardName }: { image: string | null; featured: boolean; cardName: string }) {
  if (!image) {
    return (
      <div
        style={{
          width: featured ? 120 : 90,
          height: featured ? 168 : 126,
          borderRadius: 6,
          border: "1px solid var(--border)",
          background: "var(--surface-raised)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <div style={{ textAlign: "center", padding: 8 }}>
          <div style={{ fontSize: 24, marginBottom: 4 }}>💳</div>
          <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", opacity: 0.5 }}>CREDIT</div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: featured ? 140 : 100,
        height: featured ? 196 : 140,
        borderRadius: 8,
        border: featured ? "2px solid var(--accent)" : "1px solid var(--border)",
        background: "var(--surface-raised)",
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
        boxShadow: featured ? "0 8px 24px rgba(201,100,66,0.3)" : "none",
      }}
    >
      <Image
        src={image}
        alt={cardName}
        fill
        style={{ objectFit: "cover" }}
        unoptimized
      />
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
            The Prize Pool
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
            Top 8 Stakes.
          </h2>
        </div>

        {/* Prize cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          {prizes.map((prize, i) => (
            <div
              key={i}
              style={{
                background: prize.featured ? "var(--accent-faint)" : "var(--surface-raised)",
                border: `1px solid ${prize.featured ? "var(--accent)" : "var(--border)"}`,
                borderRadius: 16,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 20,
                transition: "transform 0.2s, background 0.2s",
                position: "relative",
              }}
            >
              {prize.card === "Berserk" && (
                <div
                  style={{
                    position: "absolute",
                    top: -45,
                    right: -30,
                    zIndex: 20,
                    transform: "rotate(6deg)",
                    pointerEvents: "none",
                  }}
                >
                  <div
                    style={{
                      background: "#ffeb3b",
                      color: "#1a1612",
                      padding: "10px 14px",
                      borderRadius: "2px",
                      boxShadow: "4px 4px 0px rgba(0,0,0,0.2)",
                      fontFamily: "var(--font-display)",
                      fontSize: "18px",
                      fontWeight: 700,
                      lineHeight: 1.1,
                      maxWidth: "140px",
                      border: "2px solid #1a1612",
                      textAlign: "center",
                    }}
                  >
                    this is you when you lose the finals
                  </div>
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    style={{
                      position: "absolute",
                      left: -35,
                      bottom: -15,
                      transform: "rotate(-15deg)",
                    }}
                  >
                    <path
                      d="M45 5 C 35 15 25 35 5 45"
                      stroke="#c96442"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5 45 L 15 42 M 5 45 L 8 35"
                      stroke="#c96442"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}
              <CardArt image={prize.image} featured={prize.featured} cardName={prize.card} />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    color: prize.featured ? "var(--accent)" : "var(--text-muted)",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  {prize.place}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: prize.featured ? 32 : 24,
                    fontWeight: 700,
                    color: prize.featured ? "var(--accent)" : "var(--text)",
                    lineHeight: 1.1,
                    marginBottom: 6,
                  }}
                >
                  {prize.card}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--text-muted)",
                    letterSpacing: "0.02em",
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
            marginTop: 32,
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--text-subtle)",
            maxWidth: 600,
            lineHeight: 1.6,
          }}
        >
          * All prizes are Magic: the Gathering cards. All prizes can be traded in by the prize winners to Reliquary Cards for 100% of their sale value - approximately $700, $360, $170, $110.
        </p>
      </div>
    </section>
  );
}
