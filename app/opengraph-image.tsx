import { ImageResponse } from "next/og";

export const alt = "Premium Concrete PM - Cabro Blocks & Paving Solutions Kenya";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0D1B30 0%, #132E52 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "#FFC20E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: 800,
              color: "#0D1B30",
            }}
          >
            PM
          </div>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
            }}
          >
            Premium Concrete PM
          </span>
        </div>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          Cabro Blocks &{" "}
          <span style={{ color: "#FFC20E" }}>Paving Solutions</span>
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.55)",
            marginTop: "24px",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          Supply & installation of premium interlocking cabro pavers for
          driveways, parking, estates and commercial projects across Kenya.
        </p>

        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "40px",
            fontSize: "16px",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          <span>Nairobi & Kiambu</span>
          <span>·</span>
          <span>0711 789 438</span>
          <span>·</span>
          <span>premiummovers.co.ke</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
