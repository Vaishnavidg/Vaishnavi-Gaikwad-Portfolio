import { useState } from "react";

import profileImage from "@/assets/Gaikwad_Vaishnavi_Profile1.png";

export function HeroPortrait() {
  const [imageOk, setImageOk] = useState(true);

  return (
    <div className="hero-portrait reveal">
      <span className="hero-portrait-glow" aria-hidden="true" />
      {imageOk ? (
        <img
          src={profileImage}
          alt="Vaishnavi Gaikwad"
          onError={() => setImageOk(false)}
          data-testid="img-hero-portrait"
        />
      ) : (
        <span
          className="hero-portrait-fallback"
          data-testid="hero-portrait-fallback"
        >
          <span className="hero-portrait-initials">VG</span>
        </span>
      )}
    </div>
  );
}
