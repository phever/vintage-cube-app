const pods = [
  { date: "Sat Aug 1", times: ["2:00 PM", "6:00 PM"] },
  { date: "Sun Aug 2", times: ["2:00 PM", "6:00 PM"] },
  { date: "Sat Aug 7", times: ["2:00 PM", "6:00 PM"] },
  { date: "Sun Aug 8", times: ["2:00 PM", "6:00 PM"] },
];

export default function Schedule() {
  return (
    <section id="schedule" style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          {/* Left: section header */}
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
              Pick Your Pod
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
              Tournament
              <br />
              Schedule.
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "var(--text-muted)",
                lineHeight: 1.7,
                maxWidth: 360,
              }}
            >
              Eight pods run across two weekends. Win your pod to qualify for
              the Top 8 final draft on August 15th. Each pod seats 8 players.
            </p>

            {/* How it works */}
            <div style={{ marginTop: 32 }}>
              {[
                { n: "1", text: "Choose a pod time and register" },
                { n: "2", text: "Draft the cube with your pod of 8" },
                { n: "3", text: "Play single-elimination within your pod" },
                { n: "4", text: "Pod winner qualifies for the Top 8 final" },
              ].map((step) => (
                <div
                  key={step.n}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    marginBottom: 14,
                  }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: "1px solid var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "var(--accent)",
                      marginTop: 1,
                    }}
                  >
                    {step.n}
                  </div>
                  <span style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
                    {step.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: schedule table */}
          <div>
            <div
              style={{
                border: "1px solid var(--border)",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              {/* Header row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  padding: "10px 16px",
                  background: "var(--surface)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {["Date", "2 PM Pod", "6 PM Pod"].map((h) => (
                  <div
                    key={h}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    {h}
                  </div>
                ))}
              </div>

              {/* Pod rows */}
              {pods.map((pod, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    padding: "14px 16px",
                    borderBottom: i < pods.length - 1 ? "1px solid var(--border-muted)" : "none",
                    background: "var(--surface-raised)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "var(--text)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {pod.date}
                  </div>
                  {pod.times.map((t, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          border: "1px solid var(--border)",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 12,
                          color: "var(--text-muted)",
                        }}
                      >
                        {t}
                      </span>
                    </div>
                  ))}
                </div>
              ))}

              {/* Top 8 final row */}
              <div
                style={{
                  padding: "16px",
                  background: "var(--accent-faint)",
                  borderTop: "1px solid var(--accent)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "var(--accent)",
                      letterSpacing: "0.1em",
                      fontWeight: 500,
                    }}
                  >
                    ★ SAT AUG 15
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "var(--text)",
                      marginTop: 2,
                    }}
                  >
                    Top 8 Final Draft
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--text-muted)",
                    textAlign: "right",
                  }}
                >
                  Invite only
                  <br />
                  Second cube draft
                </div>
              </div>
            </div>

            {/* Note */}
            <p
              style={{
                marginTop: 16,
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--text-subtle)",
                letterSpacing: "0.04em",
                lineHeight: 1.6,
              }}
            >
              All times Mountain Time (Calgary, AB). Each pod runs approximately
              3–4 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
