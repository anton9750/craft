import { useEffect, useState } from "react";
import Stars from "./components/Stars";
import Station from "./components/Station";
import Inventory from "./components/Inventory";
import ThemeToggle from "./components/ThemeToggle";
import { useGame } from "./hooks/useGame";
import type { Reaction } from "./components/Station";


export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">(
    () => (localStorage.getItem("theme") as "dark" | "light") ?? "dark");
  const { discovered, combine, reset } = useGame();
  const [slots, setSlots] = useState<(string | null)[]>([null, null]);
  const [reaction, setReaction] = useState<Reaction>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("theme", theme); }, [theme]);

  const run = (a: string, b: string) => {
    const { recipe, isNew } = combine(a, b);
    setReaction({ recipe, result: recipe?.result, isNew });
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      setSlots([null, null]);
    }, 1300);
  };

  const place = (i: number, id: string) => {
    if (busy) return;
    const next = [...slots]; next[i] = id;
    setReaction(null); setSlots(next);
    if (next[0] && next[1]) run(next[0], next[1]);
  };

  // click an inventory item: fills first empty slot
  const pick = (id: string) => { const i = slots.indexOf(null); if (i !== -1) place(i, id); };

  return (
    <>
      <Stars theme={theme} />
      <main className="app">
        <header>
          <h1>Infinite Craft</h1>
          <div className="actions">
            <button className="btn" onClick={() => { if (confirm("Reset all discoveries?")) reset(); }}>Reset</button>
            <ThemeToggle theme={theme} onToggle={() => setTheme(theme === "dark" ? "light" : "dark")} />
          </div>
        </header>
        <div className="layout">
          <Station slots={slots} onDropSlot={place} onClear={() => { setSlots([null, null]); setReaction(null); }} reaction={reaction} busy={busy} />
          <Inventory discovered={discovered} onPick={pick} />
        </div>
      </main>
    </>
  );
}
