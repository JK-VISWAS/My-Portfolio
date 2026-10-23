'use client';

// NOTE: The parent div is position:fixed so the SVG covers only the viewport.
// ALL coordinates MUST use percentages (cx="50%", cy="30%") — never raw pixels for placement.
// Pixel-coordinate groups use transform="translate()" with small pixel offsets only.

export default function BackgroundDoodles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden select-none"
    >
      {/* ============================================================
          AMBIENT COLOR BLOOMS — scattered across viewport
      ============================================================ */}
      <div className="absolute top-[5%]   left-[-3%]  w-[420px] h-[420px] rounded-full bg-emerald-500/[0.07] blur-[130px]" />
      <div className="absolute top-[45%]  left-[-2%]  w-[440px] h-[440px] rounded-full bg-purple-500/[0.06] blur-[140px]" />
      <div className="absolute top-[78%]  left-[3%]   w-[380px] h-[380px] rounded-full bg-cyan-500/[0.05]   blur-[130px]" />

      <div className="absolute top-[12%] left-[36%] w-[500px] h-[320px] rounded-full bg-violet-600/[0.05] blur-[150px]" />
      <div className="absolute top-[52%] left-[33%] w-[480px] h-[340px] rounded-full bg-cyan-500/[0.04]   blur-[150px]" />
      <div className="absolute top-[80%] left-[38%] w-[440px] h-[280px] rounded-full bg-amber-500/[0.04]  blur-[140px]" />

      <div className="absolute top-[22%] right-[-2%] w-[460px] h-[460px] rounded-full bg-cyan-500/[0.06]  blur-[140px]" />
      <div className="absolute top-[60%] right-[-1%] w-[440px] h-[440px] rounded-full bg-amber-500/[0.05] blur-[140px]" />

      {/* ============================================================
          SVG CANVAS — percentage-based coordinates only
      ============================================================ */}
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none">

        {/* ===================================================
            LEFT COLUMN — spread from top to bottom
        =================================================== */}

        {/* LEFT TOP: Emerald curly bracket { */}
        <g className="doodle-float-slow doodle-delay-2" opacity="0.38">
          <path
            d="M 7% 28% C 5% 28% 5% 30% 5% 31% C 5% 32% 4% 33% 3.5% 33% C 4% 33% 5% 34% 5% 35% C 5% 36% 5% 38% 7% 38%"
            stroke="#10b981" strokeWidth="1.8" strokeLinecap="round"
          />
        </g>

        {/* LEFT 20%: Terminal prompt `$ _` */}
        <g className="doodle-float-medium doodle-delay-4" opacity="0.35">
          <path d="M 6% 20% L 7.5% 21.2% L 6% 22.5% M 8.5% 22.5% L 11% 22.5%"
            stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          />
        </g>

        {/* LEFT 35%: Code tag </> */}
        <g className="doodle-float-slow doodle-delay-1" opacity="0.36">
          <path
            d="M 5.5% 35% L 4% 36.5% L 5.5% 38%   M 7.5% 38.5% L 9% 34%   M 11% 35% L 12.5% 36.5% L 11% 38%"
            stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          />
        </g>

        {/* LEFT 50%: Double wave rhythm — amber/white */}
        <g className="doodle-drift doodle-delay-3" opacity="0.35">
          <path d="M 3% 50% Q 4.5% 48.5% 6% 50% T 9% 50% T 12% 50% T 15% 50%"
            stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round"
          />
          <path d="M 3% 51.5% Q 4.5% 50% 6% 51.5% T 9% 51.5% T 12% 51.5% T 15% 51.5%"
            stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round"
          />
        </g>

        {/* LEFT 62%: Microchip CPU — emerald — fixed pixel size but positioned via % */}
        <g className="doodle-float-slow doodle-delay-4" opacity="0.32" transform="translate(-4, 0)">
          <rect x="5%" y="62%" width="36" height="36" rx="6" stroke="#10b981" strokeWidth="1.5" fill="none" />
          <rect x="calc(5% + 8)" y="calc(62% + 8)" width="20" height="20" rx="3" fill="#10b981" opacity="0.30" />
          <line x1="calc(5% + 8)"  y1="calc(62% - 8)"  x2="calc(5% + 8)"  y2="62%"      stroke="#10b981" strokeWidth="1.4" />
          <line x1="calc(5% + 18)" y1="calc(62% - 8)"  x2="calc(5% + 18)" y2="62%"      stroke="#10b981" strokeWidth="1.4" />
          <line x1="calc(5% + 28)" y1="calc(62% - 8)"  x2="calc(5% + 28)" y2="62%"      stroke="#10b981" strokeWidth="1.4" />
          <line x1="calc(5% + 8)"  y1="calc(62% + 36)" x2="calc(5% + 8)"  y2="calc(62% + 44)" stroke="#10b981" strokeWidth="1.4" />
          <line x1="calc(5% + 18)" y1="calc(62% + 36)" x2="calc(5% + 18)" y2="calc(62% + 44)" stroke="#10b981" strokeWidth="1.4" />
          <line x1="calc(5% + 28)" y1="calc(62% + 36)" x2="calc(5% + 28)" y2="calc(62% + 44)" stroke="#10b981" strokeWidth="1.4" />
        </g>

        {/* LEFT 75%: Audio equalizer bars — multi-color */}
        <g className="doodle-float-medium doodle-delay-3" opacity="0.42">
          <line x1="5%"    y1="78%"   x2="5%"    y2="74%"   stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
          <line x1="6.5%"  y1="78%"   x2="6.5%"  y2="72%"   stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
          <line x1="8%"    y1="78%"   x2="8%"    y2="75%"   stroke="#ffffff" strokeWidth="3"  strokeLinecap="round" />
          <line x1="9.5%"  y1="78%"   x2="9.5%"  y2="71%"   stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
          <line x1="11%"   y1="78%"   x2="11%"   y2="73%"   stroke="#c084fc" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* LEFT 88%: 5-point hand-drawn star — white */}
        <g className="doodle-twinkle-slow doodle-delay-6" opacity="0.40">
          <polygon
            points="8%,88% 8.6%,90% 10.5%,90% 9%,91.2% 9.6%,93% 8%,91.8% 6.4%,93% 7%,91.2% 5.5%,90% 7.4%,90%"
            stroke="#ffffff" strokeWidth="1.4" fill="rgba(255,255,255,0.12)"
          />
        </g>

        {/* LEFT 95%: Heart code doodle — white */}
        <g className="doodle-float-medium doodle-delay-5" opacity="0.40">
          <path
            d="M 9% 95% C 9% 94.2% 7.5% 93.4% 6.5% 94% C 5.5% 94.6% 6.2% 96.2% 9% 97.5% C 11.8% 96.2% 12.5% 94.6% 11.5% 94% C 10.5% 93.4% 9% 94.2% 9% 95% Z"
            stroke="#ffffff" strokeWidth="1.5" fill="rgba(255,255,255,0.10)"
          />
        </g>


        {/* ===================================================
            CENTER COLUMN — spread from top to bottom
        =================================================== */}

        {/* CENTER 12%: Large 4-point diamond star — white */}
        <g className="doodle-twinkle-slow doodle-delay-3" opacity="0.38">
          <path
            d="M 49% 12% Q 50% 12% 50% 10% Q 50% 12% 51% 12% Q 50% 12% 50% 14% Q 50% 12% 49% 12% Z"
            fill="#ffffff"
          />
        </g>

        {/* CENTER 18%: Floating `< />` text — emerald */}
        <g className="doodle-float-medium doodle-delay-1" opacity="0.28">
          <text x="50%" y="18%" textAnchor="middle"
            fill="#10b981" fontSize="22" fontFamily="monospace" fontWeight="300"
          >&lt; /&gt;</text>
        </g>

        {/* CENTER 28%: Orbit ring — violet */}
        <g className="doodle-drift doodle-delay-4" opacity="0.28">
          <ellipse cx="50%" cy="28%" rx="44" ry="15"
            stroke="#c084fc" strokeWidth="1.3" strokeDasharray="3 4"
            transform="rotate(-12 50% 28%)"
          />
          <circle cx="50%" cy="25.5%" r="3" fill="#c084fc" />
        </g>

        {/* CENTER 38%: Compass crosshair ring — white/cyan */}
        <g className="doodle-drift doodle-delay-3" opacity="0.28">
          <circle cx="50%" cy="38%" r="28" stroke="#ffffff" strokeWidth="1.3" strokeDasharray="4 4" />
          <line x1="50%" y1="35%" x2="50%" y2="41%" stroke="#ffffff" strokeWidth="1.2" />
          <line x1="47%" y1="38%" x2="53%" y2="38%" stroke="#ffffff" strokeWidth="1.2" />
          <circle cx="50%" cy="38%" r="3" fill="#38bdf8" />
        </g>

        {/* CENTER 48%: Infinity symbol — white */}
        <g className="doodle-float-medium doodle-delay-5" opacity="0.28">
          <path
            d="M 46.5% 48% C 44.5% 46.5% 42.5% 46.5% 41.5% 48% C 40.5% 49.5% 42.5% 49.5% 44.5% 48% C 46.5% 46.5% 48.5% 46.5% 49.5% 48% C 50.5% 49.5% 48.5% 49.5% 46.5% 48% Z"
            stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round"
          />
        </g>

        {/* CENTER 57%: Pulse rings / target — cyan */}
        <g className="doodle-pulse-ring doodle-delay-2" opacity="0.30">
          <circle cx="50%" cy="57%" r="16" stroke="#38bdf8" strokeWidth="1.4" />
          <circle cx="50%" cy="57%" r="30" stroke="#38bdf8" strokeWidth="1.1" strokeDasharray="4 5" />
          <circle cx="50%" cy="57%" r="45" stroke="#ffffff" strokeWidth="0.9" strokeDasharray="3 6" />
          <circle cx="50%" cy="57%" r="4"  fill="#10b981" />
        </g>

        {/* CENTER 67%: Wave rhythm doodle — amber/white */}
        <g className="doodle-drift doodle-delay-3" opacity="0.32">
          <path d="M 38% 67% Q 40% 65.5% 42% 67% T 46% 67% T 50% 67% T 54% 67% T 58% 67% T 62% 67%"
            stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round"
          />
          <path d="M 38% 68.5% Q 40% 67% 42% 68.5% T 46% 68.5% T 50% 68.5% T 54% 68.5% T 58% 68.5% T 62% 68.5%"
            stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round"
          />
        </g>

        {/* CENTER 76%: Spinning dashed orbit ring — violet */}
        <g opacity="0.22" className="doodle-spin-slow" style={{ transformOrigin: '50% 76%' }}>
          <circle cx="50%" cy="76%" r="50" stroke="#c084fc" strokeWidth="1.2" strokeDasharray="5 5" />
        </g>

        {/* CENTER 76%: Star inside orbit — white */}
        <g className="doodle-twinkle doodle-delay-4" opacity="0.38">
          <path
            d="M 49.2% 76% Q 50% 76% 50% 74.5% Q 50% 76% 50.8% 76% Q 50% 76% 50% 77.5% Q 50% 76% 49.2% 76% Z"
            fill="#ffffff"
          />
        </g>

        {/* CENTER 85%: Equalizer bars — multi-color */}
        <g className="doodle-drift doodle-delay-5" opacity="0.30">
          <line x1="46%" y1="87%" x2="46%" y2="84%" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
          <line x1="48%" y1="87%" x2="48%" y2="83%" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
          <line x1="50%" y1="87%" x2="50%" y2="85%" stroke="#ffffff" strokeWidth="3"  strokeLinecap="round" />
          <line x1="52%" y1="87%" x2="52%" y2="82%" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
          <line x1="54%" y1="87%" x2="54%" y2="84%" stroke="#c084fc" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* CENTER 94%: Small sparkle star — white */}
        <g className="doodle-twinkle-slow doodle-delay-4" opacity="0.35">
          <path
            d="M 49.3% 94% Q 50% 94% 50% 92.8% Q 50% 94% 50.7% 94% Q 50% 94% 50% 95.2% Q 50% 94% 49.3% 94% Z"
            fill="#ffffff"
          />
        </g>

        {/* CENTER 94%: Left curly bracket — emerald */}
        <g className="doodle-float-slow doodle-delay-6" opacity="0.25">
          <path
            d="M 52% 91% C 50.5% 91% 50.5% 92.5% 50.5% 93.5% C 50.5% 94.5% 49.5% 95% 49% 95% C 49.5% 95% 50.5% 95.5% 50.5% 96.5% C 50.5% 97.5% 50.5% 99% 52% 99%"
            stroke="#10b981" strokeWidth="1.8" strokeLinecap="round"
          />
        </g>


        {/* ===================================================
            RIGHT COLUMN — spread from top to bottom
        =================================================== */}

        {/* RIGHT 10%: Large sparkle 4-point star — white */}
        <g className="doodle-twinkle doodle-delay-2" opacity="0.45">
          <path
            d="M 88.5% 10% Q 89.7% 10% 89.7% 8% Q 89.7% 10% 90.9% 10% Q 89.7% 10% 89.7% 12% Q 89.7% 10% 88.5% 10% Z"
            fill="#ffffff"
          />
        </g>

        {/* RIGHT 17%: Hexagon wireframe — violet */}
        <g className="doodle-float-slow doodle-delay-5" opacity="0.35">
          <polygon
            points="83%,17% 85.5%,15.2% 88%,17% 88%,20.8% 85.5%,22.5% 83%,20.8%"
            stroke="#c084fc" strokeWidth="1.4" strokeLinejoin="round"
          />
        </g>

        {/* RIGHT 25%: Constellation network — cyan/white */}
        <g className="doodle-drift doodle-delay-3" opacity="0.40">
          <circle cx="77%" cy="25%" r="2.5" fill="#38bdf8" />
          <circle cx="82%" cy="22%" r="3"   fill="#ffffff" />
          <circle cx="86%" cy="24%" r="2"   fill="#38bdf8" />
          <line x1="77%" y1="25%" x2="82%" y2="22%" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="82%" y1="22%" x2="86%" y2="24%" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
        </g>

        {/* RIGHT 32%: Paper airplane + dotted trail — white/cyan */}
        <g className="doodle-float-medium doodle-delay-1" opacity="0.42">
          <path
            d="M 88% 31% L 95% 29% L 92.5% 35% L 90% 33% L 88% 31% Z M 95% 29% L 90% 33%"
            stroke="#ffffff" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round"
          />
          <path
            d="M 81% 34% C 83% 36.5% 86% 36.5% 87% 34% C 88% 31.5% 89% 31.5% 90% 33%"
            stroke="#38bdf8" strokeWidth="1.3" strokeDasharray="3 3" strokeLinecap="round"
          />
        </g>

        {/* RIGHT 42%: Spiral galaxy trail — white */}
        <g className="doodle-float-slow doodle-delay-4" opacity="0.28">
          <path
            d="M 92% 42% A 18 18 0 0 1 94% 45.5% A 26 26 0 0 1 90% 49% A 36 36 0 0 1 82% 51%"
            stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round"
          />
        </g>

        {/* RIGHT 52%: Git branch tree — cyan/multi */}
        <g className="doodle-float-medium doodle-delay-2" opacity="0.40">
          <path
            d="M 92% 52% L 92% 60% M 92% 55% C 90% 56.5% 88% 58% 88% 60% L 88% 62%"
            stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round"
          />
          <circle cx="92%" cy="52%" r="3.5" fill="#10b981" />
          <circle cx="92%" cy="56%" r="3.5" fill="#ffffff" />
          <circle cx="92%" cy="60%" r="3.5" fill="#38bdf8" />
          <circle cx="88%" cy="60%" r="3.5" fill="#c084fc" />
          <circle cx="88%" cy="62%" r="3.5" fill="#fbbf24" />
        </g>

        {/* RIGHT 65%: Isometric 3D cube — violet */}
        <g className="doodle-float-slow doodle-delay-3" opacity="0.38">
          <path
            d="M 91% 63% L 93.5% 61% L 96% 63% L 96% 67.5% L 93.5% 69.5% L 91% 67.5% Z"
            stroke="#c084fc" strokeWidth="1.5" strokeLinejoin="round"
          />
          <line x1="93.5%" y1="61%" x2="93.5%" y2="69.5%" stroke="#c084fc" strokeWidth="1.2" />
          <line x1="91%"   y1="63%" x2="93.5%" y2="64.7%" stroke="#c084fc" strokeWidth="1.2" />
          <line x1="96%"   y1="63%" x2="93.5%" y2="64.7%" stroke="#c084fc" strokeWidth="1.2" />
        </g>

        {/* RIGHT 74%: Dynamic upward arrow — white/amber */}
        <g className="doodle-float-medium doodle-delay-5" opacity="0.40">
          <path
            d="M 85% 78% C 88% 74% 93% 75.5% 92% 81%"
            stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round"
          />
          <path
            d="M 90% 81.5% L 92% 81% L 94% 79.2%"
            stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          />
          <circle cx="83%" cy="74%" r="2.5" fill="#fbbf24" className="doodle-twinkle doodle-delay-1" />
        </g>

        {/* RIGHT 83%: Envelope doodle — cyan */}
        <g className="doodle-float-medium doodle-delay-2" opacity="0.38">
          <rect x="88%" y="83%" width="46" height="32" rx="4" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
          <path d="M 88% 83% L 90.2% 85.5% L 92.4% 83%" stroke="#38bdf8" strokeWidth="1.5" strokeLinejoin="round" />
          <line x1="86%" y1="84.5%" x2="87.3%" y2="84.5%" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="85.5%" y1="85.8%" x2="87%" y2="85.8%" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" />
        </g>

        {/* RIGHT 90%: Target crosshair — amber */}
        <g className="doodle-float-slow doodle-delay-3" opacity="0.38">
          <circle cx="91%" cy="91%" r="10" stroke="#fbbf24" strokeWidth="1.3" />
          <line x1="91%" y1="88.5%" x2="91%" y2="93.5%" stroke="#fbbf24" strokeWidth="1.3" />
          <line x1="88.5%" y1="91%" x2="93.5%" y2="91%" stroke="#fbbf24" strokeWidth="1.3" />
          <circle cx="91%" cy="91%" r="2.5" fill="#ffffff" />
        </g>

        {/* RIGHT 97%: Right curly bracket } — white */}
        <g className="doodle-float-slow doodle-delay-4" opacity="0.35">
          <path
            d="M 86% 94% C 87.5% 94% 87.5% 95.5% 87.5% 96.5% C 87.5% 97.5% 88.5% 98% 89% 98% C 88.5% 98% 87.5% 98.5% 87.5% 99.5% C 87.5% 100.5% 87.5% 102% 86% 102%"
            stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round"
          />
        </g>

        {/* ===================================================
            SCATTERED SPARKLES across full viewport
        =================================================== */}

        {/* Amber sparkle cluster — hero */}
        <g className="doodle-twinkle doodle-delay-5" opacity="0.40">
          <path
            d="M 25% 15% Q 26% 15% 26% 13.5% Q 26% 15% 27% 15% Q 26% 15% 26% 16.5% Q 26% 15% 25% 15% Z"
            fill="#fbbf24"
          />
          <circle cx="28%" cy="13%" r="2" fill="#fbbf24" />
          <circle cx="24%" cy="17%" r="1.5" fill="#ffffff" />
        </g>

        {/* Cyan orbital ring — mid-left */}
        <g className="doodle-drift doodle-delay-1" opacity="0.38">
          <ellipse cx="20%" cy="45%" rx="52" ry="18"
            stroke="#38bdf8" strokeWidth="1.4" strokeDasharray="4 4"
            transform="rotate(-18 20% 45%)"
          />
          <circle cx="24%" cy="42%" r="3.5" fill="#38bdf8" />
          <circle cx="16%" cy="48%" r="2"   fill="#ffffff" />
        </g>

        {/* White plus crosshair — upper left area */}
        <g className="doodle-twinkle-slow doodle-delay-6" opacity="0.30">
          <path d="M 18% 22% L 21% 22% M 19.5% 20.5% L 19.5% 23.5%"
            stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round"
          />
        </g>

        {/* Infinity — mid-right area */}
        <g className="doodle-float-slow doodle-delay-1" opacity="0.28">
          <path
            d="M 72% 48% C 70% 46.5% 68% 46.5% 67% 48% C 66% 49.5% 68% 49.5% 70% 48% C 72% 46.5% 74% 46.5% 75% 48% C 76% 49.5% 74% 49.5% 72% 48% Z"
            stroke="#c084fc" strokeWidth="1.6" strokeLinecap="round"
          />
        </g>

        {/* Small constellation — upper right area */}
        <g className="doodle-drift doodle-delay-4" opacity="0.35">
          <circle cx="72%" cy="12%" r="2.5" fill="#38bdf8" />
          <circle cx="68%" cy="9%"  r="3"   fill="#ffffff" />
          <circle cx="75%" cy="8%"  r="2"   fill="#38bdf8" />
          <line x1="72%" y1="12%" x2="68%" y2="9%"  stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="68%" y1="9%"  x2="75%" y2="8%"  stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="72%" y1="12%" x2="75%" y2="8%"  stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
        </g>

        {/* Coffee cup with steam — mid area */}
        <g className="doodle-float-slow doodle-delay-3" opacity="0.30">
          <path d="M 32% 60% L 32.5% 65.5% C 32.7% 67% 37.3% 67% 37.5% 65.5% L 38% 60% Z"
            stroke="#fbbf24" strokeWidth="1.5"
          />
          <path d="M 37.8% 61% C 39.5% 61% 39.5% 63.5% 37.6% 64%"
            stroke="#fbbf24" strokeWidth="1.4" strokeLinecap="round"
          />
          <path d="M 33.8% 58.5% Q 34.3% 57% 34.8% 55.5% M 36% 58.5% Q 36.5% 57% 37% 55.5%"
            stroke="#ffffff" strokeWidth="1.3" strokeLinecap="round"
          />
        </g>

        {/* Large concentric pulse rings — lower left */}
        <g className="doodle-pulse-ring doodle-delay-1" opacity="0.30">
          <circle cx="18%" cy="80%" r="14" stroke="#38bdf8" strokeWidth="1.4" />
          <circle cx="18%" cy="80%" r="28" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="4 4" />
          <circle cx="18%" cy="80%" r="42" stroke="#ffffff" strokeWidth="1"   strokeDasharray="3 5" />
          <circle cx="18%" cy="80%" r="4"  fill="#10b981" />
        </g>

        {/* Amber sparkle — lower right */}
        <g className="doodle-twinkle doodle-delay-2" opacity="0.38">
          <path
            d="M 75% 87% Q 76.2% 87% 76.2% 85.2% Q 76.2% 87% 77.4% 87% Q 76.2% 87% 76.2% 88.8% Q 76.2% 87% 75% 87% Z"
            fill="#ffffff"
          />
        </g>

      </svg>
    </div>
  );
}
