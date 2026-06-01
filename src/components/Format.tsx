export default function Format() {
  return (
    <section
      id="format"
      style={{
        padding: "80px 24px",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="responsive-grid" style={{ gap: "clamp(32px, 5vw, 64px)" }}>
          {/* Left: explainer */}
          <div>
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
              New to cube?
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 700,
                lineHeight: 0.95,
                margin: "0 0 24px",
              }}
            >
              What&apos;s a
              <br />
              Vintage Cube?
            </h2>

            <div
              style={{
                fontSize: 15,
                color: "var(--text-muted)",
                lineHeight: 1.8,
                maxWidth: 440,
              }}
            >
              <p style={{ margin: "0 0 16px" }}>
                A cube is one person&apos;s curated singleton card list — this
                event features a curated{" "}
                <strong style={{ color: "var(--text)" }}>540-card</strong> pool
                inspired by the legendary MTGO Vintage Cube.
              </p>
              <p style={{ margin: "0 0 16px" }}>
                You sit down with 7 others and draft 3 packs of 15 cards. Build
                a 40-card deck (basic lands provided) and battle for your seat in the top 8.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: "var(--text)" }}>Vintage</strong> means
                the most iconic, powerful cards ever printed are all in the
                pool — Power Nine, dual lands, and every broken spell ever
                printed. Pure, unadulterated Magic.
              </p>
            </div>

            <a
              href="https://cubecobra.com/cube/list/mokecube"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-accent"
              style={{ marginTop: 32, display: "inline-block" }}
            >
              Browse the full cube list on CubeCobra ↗
            </a>
          </div>

          {/* Right: quick facts */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              {
                label: "Cards in pool",
                value: "540",
                note: "Singleton — based on the best of the MTGO Vintage Cube",
              },
              {
                label: "Pack size",
                value: "15",
                note: "3 packs per player, draft one card at a time",
              },
              {
                label: "Deck size",
                value: "40",
                note: "Build from your picks + basic lands",
              },
              {
                label: "Pod size",
                value: "8",
                note: "One pod winner advances to the Top 8",
              },
              {
                label: "Top 8 format",
                value: "Re-draft",
                note: "Top 8 drafts the cube fresh, then single elimination",
              },
            ].map((fact) => (
              <div
                key={fact.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  padding: "16px 0",
                  borderBottom: "1px solid var(--border-muted)",
                  gap: 24,
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    {fact.label}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--text-subtle)",
                      lineHeight: 1.4,
                    }}
                  >
                    {fact.note}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 32,
                    fontWeight: 700,
                    color: "var(--text)",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  {fact.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
