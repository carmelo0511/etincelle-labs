"use client";

/**
 * Hand-drawn SVG sketch illustrations inspired by pencil drawings.
 * Each sketch uses organic, imperfect stroke paths to create an
 * editorial, artistic feel for the works/projects section.
 */

type SketchProps = {
  className?: string;
  strokeColor?: string;
};

/* ── Burst: explosive energy radiating from center ──────────────── */
export function SketchBurst({ className = "", strokeColor = "#1a1a19" }: SketchProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} aria-hidden="true">
      {/* Base rectangle frame */}
      <path
        d="M100 260 L100 80 L320 80 L320 260 L100 260"
        stroke={strokeColor}
        strokeWidth="1.2"
        opacity="0.3"
      />
      {/* Ground line */}
      <path
        d="M80 262 L340 262"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Burst spikes from center */}
      <path
        d="M210 170 L180 60 M210 170 L140 90 M210 170 L100 140
           M210 170 L90 200 M210 170 L120 250 M210 170 L180 270
           M210 170 L250 265 M210 170 L300 240 M210 170 L330 190
           M210 170 L320 130 M210 170 L280 80 M210 170 L240 55"
        stroke={strokeColor}
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Inner burst with thicker strokes */}
      <path
        d="M210 170 L165 100 M210 170 L130 145 M210 170 L145 220
           M210 170 L210 255 M210 170 L275 230 M210 170 L290 150
           M210 170 L265 95"
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Jagged explosion outline */}
      <path
        d="M180 60 L165 100 L100 90 L130 145 L80 160 L130 190
           L90 230 L145 220 L120 270 L185 240 L180 275 L215 250
           L250 280 L255 230 L310 250 L290 195 L340 180 L290 155
           L330 120 L270 110 L290 65 L235 95 L240 50 L200 85 Z"
        stroke={strokeColor}
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
        opacity="0.9"
      />
      {/* Circle labeled "1" at bottom */}
      <circle cx="220" cy="230" r="14" stroke={strokeColor} strokeWidth="1.2" fill="none" opacity="0.6" />
      <text x="220" y="235" textAnchor="middle" fontSize="13" fontFamily="serif" fill={strokeColor} opacity="0.6">1</text>
      {/* Curved arrow at bottom */}
      <path
        d="M200 235 Q180 260 220 255"
        stroke={strokeColor}
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />
      <path d="M217 251 L222 256 L215 257" stroke={strokeColor} strokeWidth="1" fill="none" opacity="0.5" />
      {/* Circle labeled "2" at top right */}
      <circle cx="320" cy="95" r="12" stroke={strokeColor} strokeWidth="1" fill="none" opacity="0.5" />
      <text x="320" y="100" textAnchor="middle" fontSize="12" fontFamily="serif" fill={strokeColor} opacity="0.5">2</text>
      {/* Arrow pointing to "2" */}
      <path
        d="M295 120 Q310 105 315 105"
        stroke={strokeColor}
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      <path d="M312 102 L316 106 L311 107" stroke={strokeColor} strokeWidth="0.8" fill="none" opacity="0.4" />
      {/* Small triangle at top */}
      <path d="M175 48 L180 38 L185 48 Z" stroke={strokeColor} strokeWidth="1" fill="none" opacity="0.4" />
      {/* Small square at right */}
      <rect x="338" y="205" width="10" height="10" stroke={strokeColor} strokeWidth="1" fill="none" opacity="0.35" />
      {/* Spiral swirl left */}
      <path
        d="M85 170 Q65 140 75 120 Q90 100 100 130 Q105 155 85 170"
        stroke={strokeColor}
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      <path d="M82 173 L78 178 L88 175" stroke={strokeColor} strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  );
}

/* ── Head: contemplative profile with pencil ──────────────────── */
export function SketchHead({ className = "", strokeColor = "#1a1a19" }: SketchProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} aria-hidden="true">
      {/* Head profile outline */}
      <path
        d="M200 280 L200 265 Q185 260 175 250 Q160 240 155 225
           Q148 210 150 195 L150 180 Q150 165 158 155
           Q165 145 170 135 Q175 120 180 110 Q190 95 205 85
           Q220 75 240 72 Q260 72 275 80 Q290 90 295 105
           Q298 115 295 130"
        stroke={strokeColor}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Jaw/chin line */}
      <path
        d="M295 130 Q298 150 292 165 Q285 180 275 190
           Q268 198 265 210 Q262 225 260 240 Q258 255 255 265 L255 275"
        stroke={strokeColor}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Ear */}
      <path
        d="M170 170 Q160 165 158 175 Q155 190 162 195
           Q168 198 172 190"
        stroke={strokeColor}
        strokeWidth="1.8"
        fill="none"
        opacity="0.8"
      />
      {/* Inner ear detail */}
      <path
        d="M165 175 Q162 180 164 185 Q166 188 168 185"
        stroke={strokeColor}
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />
      {/* Eye area */}
      <path
        d="M235 115 Q240 112 248 115 Q252 118 248 120"
        stroke={strokeColor}
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />
      {/* Nose */}
      <path
        d="M275 140 Q282 152 278 160 Q275 165 270 162"
        stroke={strokeColor}
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      {/* Hand holding pencil at top of head */}
      <path
        d="M200 95 Q210 85 220 80 Q230 76 240 78
           Q245 80 242 85 Q238 90 230 88"
        stroke={strokeColor}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Thumb */}
      <path
        d="M225 82 Q222 88 218 92 Q215 95 212 92"
        stroke={strokeColor}
        strokeWidth="1.8"
        fill="none"
        opacity="0.7"
      />
      {/* Pencil body */}
      <path
        d="M215 88 L330 65"
        stroke={strokeColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Pencil tip */}
      <path
        d="M200 92 L192 95 L195 88 L200 92"
        stroke={strokeColor}
        strokeWidth="1.2"
        fill="none"
        opacity="0.7"
      />
      {/* Pencil end rings */}
      <path
        d="M325 66 L330 65 M327 63 L332 62 M329 60 L334 59"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Hair/top of head sketch lines */}
      <path
        d="M210 82 Q215 70 230 65 Q245 62 260 68"
        stroke={strokeColor}
        strokeWidth="1.2"
        fill="none"
        opacity="0.4"
      />
      {/* Writing marks from pencil */}
      <path
        d="M198 95 Q195 100 190 98 Q186 96 188 92"
        stroke={strokeColor}
        strokeWidth="0.8"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}

/* ── Wave: flowing organic waveform ───────────────────────────── */
export function SketchWave({ className = "", strokeColor = "#1a1a19" }: SketchProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} aria-hidden="true">
      {/* Large flowing wave lines */}
      <path
        d="M30 150 Q80 80 140 120 Q200 160 250 100 Q300 40 370 90"
        stroke={strokeColor}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M30 170 Q90 100 150 140 Q210 180 260 120 Q310 60 380 110"
        stroke={strokeColor}
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M30 190 Q100 120 160 160 Q220 200 270 140 Q320 80 385 130"
        stroke={strokeColor}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.35"
      />
      {/* Scattered dots along wave */}
      {[
        [80, 130], [120, 115], [170, 145], [220, 130], [280, 85],
        [330, 80], [360, 95], [100, 155], [200, 170], [310, 100],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={1.5 + (i % 3)} fill={strokeColor} opacity={0.15 + (i % 4) * 0.08} />
      ))}
      {/* Measurement lines */}
      <path d="M60 230 L60 90" stroke={strokeColor} strokeWidth="0.6" opacity="0.2" strokeDasharray="3 4" />
      <path d="M200 240 L200 80" stroke={strokeColor} strokeWidth="0.6" opacity="0.2" strokeDasharray="3 4" />
      <path d="M340 235 L340 70" stroke={strokeColor} strokeWidth="0.6" opacity="0.2" strokeDasharray="3 4" />
      {/* Baseline */}
      <path d="M30 220 L380 220" stroke={strokeColor} strokeWidth="0.8" opacity="0.15" />
      {/* Small annotations */}
      <text x="55" y="245" fontSize="9" fontFamily="serif" fill={strokeColor} opacity="0.3">t₀</text>
      <text x="195" y="255" fontSize="9" fontFamily="serif" fill={strokeColor} opacity="0.3">t₁</text>
      <text x="335" y="250" fontSize="9" fontFamily="serif" fill={strokeColor} opacity="0.3">t₂</text>
      {/* Arrow */}
      <path d="M370 220 L385 220" stroke={strokeColor} strokeWidth="0.8" opacity="0.25" />
      <path d="M382 217 L388 220 L382 223" stroke={strokeColor} strokeWidth="0.8" fill="none" opacity="0.25" />
    </svg>
  );
}

/* ── Spiral: recursive swirl pattern ──────────────────────────── */
export function SketchSpiral({ className = "", strokeColor = "#1a1a19" }: SketchProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} aria-hidden="true">
      {/* Main spiral */}
      <path
        d="M200 150 Q210 140 220 145 Q230 155 220 165
           Q205 175 190 165 Q175 150 185 135
           Q200 118 220 125 Q245 135 240 160
           Q232 190 200 185 Q165 178 168 148
           Q172 112 210 108 Q255 105 262 148
           Q268 200 210 205 Q148 208 142 150
           Q138 88 205 78 Q280 72 290 148
           Q298 235 200 240 Q100 242 95 150
           Q90 50 200 40"
        stroke={strokeColor}
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Center dot */}
      <circle cx="200" cy="150" r="3" fill={strokeColor} opacity="0.5" />
      {/* Radiating lines from spiral */}
      <path d="M95 150 L60 150" stroke={strokeColor} strokeWidth="0.8" opacity="0.2" strokeDasharray="2 3" />
      <path d="M200 40 L200 15" stroke={strokeColor} strokeWidth="0.8" opacity="0.2" strokeDasharray="2 3" />
      <path d="M290 148 L330 148" stroke={strokeColor} strokeWidth="0.8" opacity="0.2" strokeDasharray="2 3" />
      <path d="M200 240 L200 275" stroke={strokeColor} strokeWidth="0.8" opacity="0.2" strokeDasharray="2 3" />
      {/* Small circles at cardinal points */}
      <circle cx="55" cy="150" r="4" stroke={strokeColor} strokeWidth="0.8" fill="none" opacity="0.25" />
      <circle cx="200" cy="10" r="4" stroke={strokeColor} strokeWidth="0.8" fill="none" opacity="0.25" />
      <circle cx="335" cy="148" r="4" stroke={strokeColor} strokeWidth="0.8" fill="none" opacity="0.25" />
      <circle cx="200" cy="280" r="4" stroke={strokeColor} strokeWidth="0.8" fill="none" opacity="0.25" />
    </svg>
  );
}

/* ── Geometric: overlapping angular shapes ────────────────────── */
export function SketchGeometric({ className = "", strokeColor = "#1a1a19" }: SketchProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} aria-hidden="true">
      {/* Large triangle */}
      <path
        d="M200 40 L320 240 L80 240 Z"
        stroke={strokeColor}
        strokeWidth="1.8"
        fill="none"
        opacity="0.6"
      />
      {/* Rotated square */}
      <path
        d="M200 80 L290 150 L200 220 L110 150 Z"
        stroke={strokeColor}
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
        transform="rotate(15, 200, 150)"
      />
      {/* Circle */}
      <circle cx="200" cy="150" r="65" stroke={strokeColor} strokeWidth="1.2" fill="none" opacity="0.4" />
      {/* Smaller inner circle */}
      <circle cx="200" cy="150" r="30" stroke={strokeColor} strokeWidth="1" fill="none" opacity="0.3" />
      {/* Cross hairs */}
      <path d="M200 80 L200 220" stroke={strokeColor} strokeWidth="0.6" opacity="0.2" />
      <path d="M130 150 L270 150" stroke={strokeColor} strokeWidth="0.6" opacity="0.2" />
      {/* Corner marks */}
      <path d="M75 45 L95 45 M75 45 L75 65" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M325 45 L305 45 M325 45 L325 65" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M75 255 L95 255 M75 255 L75 235" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      <path d="M325 255 L305 255 M325 255 L325 235" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      {/* Diagonal construction lines */}
      <path d="M75 45 L325 255" stroke={strokeColor} strokeWidth="0.5" opacity="0.12" strokeDasharray="4 5" />
      <path d="M325 45 L75 255" stroke={strokeColor} strokeWidth="0.5" opacity="0.12" strokeDasharray="4 5" />
      {/* Small dot */}
      <circle cx="200" cy="150" r="2.5" fill={strokeColor} opacity="0.4" />
    </svg>
  );
}

/* ── Flow: connected nodes and paths ──────────────────────────── */
export function SketchFlow({ className = "", strokeColor = "#1a1a19" }: SketchProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} aria-hidden="true">
      {/* Main flowing curve */}
      <path
        d="M50 200 Q100 180 130 140 Q160 100 200 120
           Q240 140 260 100 Q280 60 320 80 Q360 100 380 70"
        stroke={strokeColor}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Node circles along the path */}
      <circle cx="50" cy="200" r="8" stroke={strokeColor} strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="130" cy="140" r="8" stroke={strokeColor} strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="200" cy="120" r="10" stroke={strokeColor} strokeWidth="1.8" fill="none" opacity="0.7" />
      <circle cx="260" cy="100" r="8" stroke={strokeColor} strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="320" cy="80" r="8" stroke={strokeColor} strokeWidth="1.5" fill="none" opacity="0.6" />
      <circle cx="380" cy="70" r="6" stroke={strokeColor} strokeWidth="1.2" fill="none" opacity="0.5" />
      {/* Inner dots */}
      <circle cx="50" cy="200" r="2.5" fill={strokeColor} opacity="0.4" />
      <circle cx="130" cy="140" r="2.5" fill={strokeColor} opacity="0.4" />
      <circle cx="200" cy="120" r="3" fill={strokeColor} opacity="0.5" />
      <circle cx="260" cy="100" r="2.5" fill={strokeColor} opacity="0.4" />
      <circle cx="320" cy="80" r="2.5" fill={strokeColor} opacity="0.4" />
      {/* Branch paths */}
      <path
        d="M130 140 Q150 180 180 200 Q210 220 250 210"
        stroke={strokeColor}
        strokeWidth="1"
        fill="none"
        strokeDasharray="4 4"
        opacity="0.3"
      />
      <path
        d="M260 100 Q250 140 270 170 Q290 200 330 190"
        stroke={strokeColor}
        strokeWidth="1"
        fill="none"
        strokeDasharray="4 4"
        opacity="0.3"
      />
      {/* Small branch nodes */}
      <circle cx="250" cy="210" r="5" stroke={strokeColor} strokeWidth="0.8" fill="none" opacity="0.3" />
      <circle cx="330" cy="190" r="5" stroke={strokeColor} strokeWidth="0.8" fill="none" opacity="0.3" />
      {/* Labels */}
      <text x="45" y="225" fontSize="8" fontFamily="serif" fill={strokeColor} opacity="0.3">start</text>
      <text x="370" y="55" fontSize="8" fontFamily="serif" fill={strokeColor} opacity="0.3">end</text>
      {/* Direction arrow */}
      <path d="M350 72 L380 68" stroke={strokeColor} strokeWidth="1" opacity="0.3" />
      <path d="M376 64 L382 68 L376 72" stroke={strokeColor} strokeWidth="0.8" fill="none" opacity="0.3" />
    </svg>
  );
}

/* ── Target: bullseye with arrows for "Outcomes" ────────────────── */
export function SketchTarget({ className = "", strokeColor = "#1a1a19" }: SketchProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} aria-hidden="true">
      {/* Concentric circles */}
      <circle cx="200" cy="150" r="110" stroke={strokeColor} strokeWidth="1.5" fill="none" opacity="0.3" />
      <circle cx="200" cy="150" r="80" stroke={strokeColor} strokeWidth="1.8" fill="none" opacity="0.45" />
      <circle cx="200" cy="150" r="50" stroke={strokeColor} strokeWidth="2" fill="none" opacity="0.6" />
      <circle cx="200" cy="150" r="20" stroke={strokeColor} strokeWidth="2.2" fill="none" opacity="0.8" />
      {/* Center dot */}
      <circle cx="200" cy="150" r="5" fill={strokeColor} opacity="0.7" />
      {/* Arrow 1 — stuck in bullseye */}
      <path d="M200 150 L155 95" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      <path d="M155 95 L148 105 M155 95 L165 98" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      {/* Fletching lines */}
      <path d="M155 95 L145 88 M155 95 L150 84" stroke={strokeColor} strokeWidth="1" opacity="0.4" />
      {/* Arrow 2 — near center */}
      <path d="M205 148 L248 108" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
      <path d="M248 108 L240 112 M248 108 L245 100" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      {/* Checkmark near target */}
      <path d="M280 195 L295 210 L325 175" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      {/* Small annotation */}
      <text x="290" y="230" fontSize="10" fontFamily="serif" fill={strokeColor} opacity="0.3">done</text>
      {/* Corner marks */}
      <path d="M60 40 L80 40 M60 40 L60 60" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" opacity="0.2" />
      <path d="M340 40 L320 40 M340 40 L340 60" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" opacity="0.2" />
    </svg>
  );
}

/* ── Lightning: electric bolt for "AI-native speed" ─────────────── */
export function SketchLightning({ className = "", strokeColor = "#1a1a19" }: SketchProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} aria-hidden="true">
      {/* Main lightning bolt */}
      <path
        d="M220 20 L160 130 L210 130 L170 280"
        stroke={strokeColor}
        strokeWidth="2.5"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Second bolt — thinner, offset */}
      <path
        d="M245 45 L200 125 L230 125 L200 240"
        stroke={strokeColor}
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.45"
      />
      {/* Energy sparks around bolt */}
      <path d="M155 120 L130 110" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <path d="M145 140 L118 145" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M215 85 L240 72" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      <path d="M230 145 L260 140" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Small circles — energy nodes */}
      <circle cx="130" cy="108" r="3" stroke={strokeColor} strokeWidth="1" fill="none" opacity="0.35" />
      <circle cx="260" cy="138" r="4" stroke={strokeColor} strokeWidth="1" fill="none" opacity="0.3" />
      <circle cx="170" cy="280" r="6" stroke={strokeColor} strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Speed lines */}
      <path d="M100 180 L80 180" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.25" />
      <path d="M110 200 L85 200" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" opacity="0.2" />
      <path d="M105 220 L90 220" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" opacity="0.15" />
      {/* Scattered dots */}
      <circle cx="295" cy="90" r="2" fill={strokeColor} opacity="0.15" />
      <circle cx="310" cy="110" r="1.5" fill={strokeColor} opacity="0.12" />
      <circle cx="105" cy="90" r="1.5" fill={strokeColor} opacity="0.12" />
    </svg>
  );
}

/* ── Key: skeleton key for "Full ownership" ─────────────────────── */
export function SketchKey({ className = "", strokeColor = "#1a1a19" }: SketchProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} aria-hidden="true">
      {/* Key head — ornate circle */}
      <circle cx="145" cy="130" r="55" stroke={strokeColor} strokeWidth="2" fill="none" opacity="0.7" />
      <circle cx="145" cy="130" r="38" stroke={strokeColor} strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="145" cy="130" r="20" stroke={strokeColor} strokeWidth="1.2" fill="none" opacity="0.35" />
      {/* Key hole shape inside */}
      <circle cx="145" cy="122" r="8" stroke={strokeColor} strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M141 128 L141 145 L149 145 L149 128" stroke={strokeColor} strokeWidth="1.2" fill="none" opacity="0.5" />
      {/* Key shaft */}
      <path d="M200 130 L340 130" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      {/* Key teeth */}
      <path d="M290 130 L290 155 L305 155 L305 130" stroke={strokeColor} strokeWidth="1.8" fill="none" opacity="0.7" />
      <path d="M315 130 L315 148 L328 148 L328 130" stroke={strokeColor} strokeWidth="1.8" fill="none" opacity="0.7" />
      <path d="M335 130 L335 140 L345 140" stroke={strokeColor} strokeWidth="1.5" fill="none" opacity="0.6" />
      {/* Decorative ring on shaft */}
      <path d="M220 124 L220 136 M230 124 L230 136" stroke={strokeColor} strokeWidth="1" opacity="0.3" />
      {/* Sparkle marks around key head */}
      <path d="M85 80 L78 73 M85 80 L92 73" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      <path d="M205 75 L212 68 M205 75 L198 68" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" opacity="0.25" />
      {/* "yours" annotation */}
      <text x="270" y="180" fontSize="11" fontFamily="serif" fill={strokeColor} opacity="0.3" fontStyle="italic">yours</text>
      {/* Dotted underline */}
      <path d="M270 185 L310 185" stroke={strokeColor} strokeWidth="0.8" opacity="0.2" strokeDasharray="2 3" />
    </svg>
  );
}

/* ── CN Tower: hand-drawn Toronto landmark for "Toronto-focused" ── */
export function SketchCNTower({ className = "", strokeColor = "#1a1a19" }: SketchProps) {
  return (
    <svg viewBox="0 0 400 300" fill="none" className={className} aria-hidden="true">
      {/* Antenna spire — very top */}
      <path d="M200 8 L200 55" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
      {/* Small antenna cross-bars */}
      <path d="M196 18 L204 18" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M197 28 L203 28" stroke={strokeColor} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M197 38 L203 38" stroke={strokeColor} strokeWidth="0.8" strokeLinecap="round" opacity="0.35" />

      {/* SkyPod — smaller upper observation */}
      <path
        d="M194 55 Q192 52 188 52 Q184 54 184 58 Q184 62 188 64 Q192 64 194 62"
        stroke={strokeColor} strokeWidth="1.5" fill="none" opacity="0.6"
      />
      <path
        d="M206 55 Q208 52 212 52 Q216 54 216 58 Q216 62 212 64 Q208 64 206 62"
        stroke={strokeColor} strokeWidth="1.5" fill="none" opacity="0.6"
      />
      {/* SkyPod connection */}
      <path d="M194 55 L206 55 M194 62 L206 62" stroke={strokeColor} strokeWidth="1.2" opacity="0.5" />

      {/* Main shaft — upper section (above main pod) */}
      <path d="M196 64 L196 105" stroke={strokeColor} strokeWidth="1.8" opacity="0.75" />
      <path d="M204 64 L204 105" stroke={strokeColor} strokeWidth="1.8" opacity="0.75" />

      {/* Main Pod / observation deck — the iconic donut shape */}
      <path
        d="M168 108 Q165 105 160 105 Q148 108 145 115 Q143 120 145 125
           Q148 132 160 135 Q165 135 168 132"
        stroke={strokeColor} strokeWidth="2" fill="none" opacity="0.8"
      />
      <path
        d="M232 108 Q235 105 240 105 Q252 108 255 115 Q257 120 255 125
           Q252 132 240 135 Q235 135 232 132"
        stroke={strokeColor} strokeWidth="2" fill="none" opacity="0.8"
      />
      {/* Pod top and bottom connections */}
      <path d="M168 108 L232 108" stroke={strokeColor} strokeWidth="1.8" opacity="0.7" />
      <path d="M168 132 L232 132" stroke={strokeColor} strokeWidth="1.8" opacity="0.7" />
      {/* Pod middle ring */}
      <path d="M160 120 L240 120" stroke={strokeColor} strokeWidth="1.2" opacity="0.4" />
      {/* Windows on pod — small dashes */}
      <path d="M170 115 L175 115 M180 115 L185 115 M190 115 L195 115 M205 115 L210 115 M215 115 L220 115 M225 115 L230 115"
        stroke={strokeColor} strokeWidth="0.8" opacity="0.3" />
      <path d="M170 125 L175 125 M180 125 L185 125 M190 125 L195 125 M205 125 L210 125 M215 125 L220 125 M225 125 L230 125"
        stroke={strokeColor} strokeWidth="0.8" opacity="0.3" />

      {/* Main shaft — lower section (below pod, tapering wider) */}
      <path d="M193 135 L188 280" stroke={strokeColor} strokeWidth="2" opacity="0.75" />
      <path d="M207 135 L212 280" stroke={strokeColor} strokeWidth="2" opacity="0.75" />

      {/* Support legs flaring out at base */}
      <path d="M188 260 Q175 272 155 285" stroke={strokeColor} strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M212 260 Q225 272 245 285" stroke={strokeColor} strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6" />
      {/* Center leg */}
      <path d="M200 270 L200 290" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

      {/* Ground line */}
      <path d="M130 288 L270 288" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

      {/* Small Toronto skyline buildings silhouette in background */}
      <path d="M80 288 L80 260 L95 260 L95 270 L110 270 L110 250 L120 250 L120 265 L135 265 L135 288"
        stroke={strokeColor} strokeWidth="1" fill="none" opacity="0.2" />
      <path d="M265 288 L265 268 L278 268 L278 258 L290 258 L290 272 L305 272 L305 262 L315 262 L315 288"
        stroke={strokeColor} strokeWidth="1" fill="none" opacity="0.2" />

      {/* Small clouds */}
      <path d="M60 60 Q65 55 75 55 Q85 55 88 60 Q92 55 100 58 Q105 62 100 66 Q95 70 85 68 Q75 70 68 66 Q60 65 60 60Z"
        stroke={strokeColor} strokeWidth="0.8" fill="none" opacity="0.2" />
      <path d="M300 40 Q305 36 312 36 Q320 36 322 40 Q326 37 332 40 Q335 44 330 46 Q324 48 318 46 Q310 48 305 45 Q300 44 300 40Z"
        stroke={strokeColor} strokeWidth="0.8" fill="none" opacity="0.15" />

      {/* Height annotation line */}
      <path d="M235 15 L235 285" stroke={strokeColor} strokeWidth="0.6" opacity="0.15" strokeDasharray="3 4" />
      <text x="240" y="155" fontSize="9" fontFamily="serif" fill={strokeColor} opacity="0.25" fontStyle="italic">553m</text>

      {/* Small maple leaf hint near base */}
      <path d="M140 272 L145 265 L148 270 L153 262 L155 268 L160 264 L157 272 L152 270 L150 276 L147 271 L143 275 Z"
        stroke={strokeColor} strokeWidth="0.8" fill="none" opacity="0.25" />
    </svg>
  );
}

/* ── Sketch Selector — maps sketchType to component ───────────── */
/* ── Canada Goose: hand-drawn with filled black head/neck ────────── */
export function SketchCanadaGoose({ className = "", strokeColor = "#1a1a19" }: SketchProps) {
  return (
    <svg viewBox="0 0 400 500" fill="none" className={className} aria-hidden="true">
      {/* Body — large rounded shape */}
      <path
        d="M120 240 Q110 200 130 170 Q150 145 190 135 Q230 128 270 135
           Q310 145 330 175 Q345 200 335 240 Q330 270 310 290
           Q285 310 250 318 Q210 322 175 312 Q140 300 125 270 Z"
        stroke={strokeColor}
        strokeWidth="2"
        fill="none"
      />
      {/* Wing feathers — layered scallops */}
      <path
        d="M270 160 Q290 170 310 185 Q325 200 330 220"
        stroke={strokeColor}
        strokeWidth="1.8"
        fill="none"
      />
      <path
        d="M255 155 Q280 162 300 175 Q320 190 328 215"
        stroke={strokeColor}
        strokeWidth="1.5"
        fill="none"
        opacity="0.8"
      />
      {/* Feather rows */}
      <path d="M185 195 Q210 188 235 192 Q260 198 280 210" stroke={strokeColor} strokeWidth="1.2" fill="none" opacity="0.5" />
      <path d="M175 215 Q205 208 235 212 Q265 218 290 232" stroke={strokeColor} strokeWidth="1.2" fill="none" opacity="0.5" />
      <path d="M165 238 Q200 228 235 232 Q270 238 300 255" stroke={strokeColor} strokeWidth="1.2" fill="none" opacity="0.5" />
      <path d="M160 260 Q195 250 235 252 Q270 258 305 275" stroke={strokeColor} strokeWidth="1.2" fill="none" opacity="0.4" />
      {/* Tail feathers */}
      <path
        d="M310 280 Q340 270 365 255 Q375 250 380 242"
        stroke={strokeColor}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M305 288 Q335 280 358 268 Q370 262 375 255"
        stroke={strokeColor}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
      {/* Neck — long curved, filled black */}
      <path
        d="M165 165 Q160 140 155 115 Q150 90 142 65
           Q138 50 130 38 Q122 28 115 25
           Q108 23 105 28 Q102 35 105 45
           Q110 55 115 48 Q120 42 118 35"
        stroke={strokeColor}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Neck fill — thick strokes to simulate filled black */}
      <path
        d="M165 165 Q160 140 155 115 Q150 90 142 65
           Q138 50 130 38 Q125 30 118 26"
        stroke={strokeColor}
        strokeWidth="16"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />
      {/* Head — filled black oval */}
      <ellipse cx="112" cy="30" rx="18" ry="14" fill={strokeColor} opacity="0.85" />
      {/* White cheek patch */}
      <path
        d="M105 25 Q112 22 118 25 Q120 28 118 32 Q112 35 105 32 Q103 28 105 25Z"
        fill="white"
        stroke={strokeColor}
        strokeWidth="0.8"
        opacity="0.9"
      />
      {/* Eye */}
      <circle cx="108" cy="27" r="1.5" fill="white" />
      {/* Beak */}
      <path d="M95 30 L102 28 L102 33 Z" fill={strokeColor} opacity="0.85" />
      {/* Legs */}
      <path
        d="M200 310 L195 385 Q193 392 188 395 L175 398
           M200 310 L205 385 Q207 392 212 395 L225 398"
        stroke={strokeColor}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Feet — webbed */}
      <path d="M175 398 L165 402 M175 398 L172 405 M175 398 L180 404" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M225 398 L215 402 M225 398 L222 405 M225 398 L230 404" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" />
      {/* Breast texture — subtle lines */}
      <path d="M150 250 Q160 265 175 275" stroke={strokeColor} strokeWidth="1" fill="none" opacity="0.3" />
      <path d="M145 230 Q155 248 170 260" stroke={strokeColor} strokeWidth="1" fill="none" opacity="0.25" />
      {/* Water ripple beneath */}
      <path d="M155 410 Q175 405 200 410 Q225 415 250 410" stroke={strokeColor} strokeWidth="1.2" fill="none" opacity="0.3" />
      <path d="M170 420 Q190 416 210 420 Q230 424 245 420" stroke={strokeColor} strokeWidth="1" fill="none" opacity="0.2" />
    </svg>
  );
}

export type SketchType = "burst" | "head" | "wave" | "spiral" | "geometric" | "flow" | "target" | "lightning" | "key" | "compass" | "cntower" | "goose";

const sketchMap: Record<SketchType, React.ComponentType<SketchProps>> = {
  burst: SketchBurst,
  head: SketchHead,
  wave: SketchWave,
  spiral: SketchSpiral,
  geometric: SketchGeometric,
  flow: SketchFlow,
  target: SketchTarget,
  lightning: SketchLightning,
  key: SketchKey,
  compass: SketchCNTower,
  cntower: SketchCNTower,
  goose: SketchCanadaGoose,
};

export function SketchIllustration({
  type,
  className = "",
  strokeColor,
}: {
  type: SketchType;
  className?: string;
  strokeColor?: string;
}) {
  const Component = sketchMap[type];
  return <Component className={className} strokeColor={strokeColor} />;
}
