import { useState } from "react";
import { items, type Recipe } from "../data/recipes";
import ItemChip from "./ItemChip";

export type Reaction = { recipe: Recipe | null; result?: string; isNew: boolean } | null;

type Props = {
  slots: (string | null)[];
  onDropSlot: (i: number, id: string) => void;
  onClear: () => void;
  reaction: Reaction;
  busy: boolean;
};

export default function Station({ slots, onDropSlot, onClear, reaction, busy }: Props) {
  const [over, setOver] = useState<number | null>(null);
  const anim = busy ? (reaction?.recipe?.animation ?? "fizzle") : "";
  return (
    <section className={`panel station ${anim}`}>
      <h2>⚗️ Chemical Station</h2>
      <div className="slots">
        {[0, 1].map((i) => (
          <div key={i}
            className={`slot ${over === i ? "over" : ""}`}
            onDragOver={(e) => { e.preventDefault(); setOver(i); }}
            onDragLeave={() => setOver(null)}
            onDrop={(e) => {
              e.preventDefault(); setOver(null);
              const id = e.dataTransfer.getData("text/plain");
              if (id in items) onDropSlot(i, id);
            }}>
            {slots[i] ? <ItemChip id={slots[i]!} big /> : <span className="hint">drop here</span>}
          </div>
        ))}
      </div>
      <div className="reaction">
        {busy && <div className="fx">{reaction?.recipe ? "✨" : "💨"}</div>}
        {!busy && reaction?.result && (
          <div className="result">
            {reaction.isNew && <div className="new">New discovery!</div>}
            <ItemChip id={reaction.result} big />
          </div>
        )}
        {!busy && reaction && !reaction.result && <div className="fail">Nothing happens… 🫧</div>}
      </div>
      <button className="btn" onClick={onClear} disabled={busy}>Clear</button>
    </section>
  );
}
