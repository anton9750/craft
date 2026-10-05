import { useEffect, useRef } from "react";

export default function Stars({ theme }: { theme: "dark" | "light" }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!, ctx = c.getContext("2d")!;
    let raf = 0, w = 0, h = 0;
    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random(), y: Math.random(), s: Math.random() * 1.8 + 0.4,
      p: Math.random() * Math.PI * 2, v: Math.random() * 0.002 + 0.0008,
    }));
    const resize = () => { w = c.width = innerWidth; h = c.height = innerHeight; };
    resize(); addEventListener("resize", resize);
    const draw = (t: number) => {
      ctx.fillStyle = theme === "dark" ? "#000" : "#f4f1ea";
      ctx.fillRect(0, 0, w, h);
      for (const s of stars) {
        const a = 0.5 + 0.5 * Math.sin(t * s.v * 6 + s.p);
        ctx.globalAlpha = 0.15 + a * 0.85;
        ctx.fillStyle = theme === "dark" ? "#fff" : "#6b5bd6";
        ctx.strokeStyle = ctx.fillStyle;
        const x = s.x * w, y = s.y * h, r = s.s * (0.6 + a * 0.6);
        ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
        if (s.s > 1.6) {
          ctx.lineWidth = 0.6; ctx.beginPath();
          ctx.moveTo(x - r * 3 * a, y); ctx.lineTo(x + r * 3 * a, y);
          ctx.moveTo(x, y - r * 3 * a); ctx.lineTo(x, y + r * 3 * a); ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); };
  }, [theme]);
  return <canvas ref={ref} className="stars" />;
}
