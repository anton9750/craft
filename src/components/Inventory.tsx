import { useState } from "react";
import ItemChip from "./ItemChip";
import { items, totalItems } from "../data/recipes";

export default function Inventory({ discovered, onPick }: { discovered: string[]; onPick: (id: string) => void }) {
  const [q, setQ] = useState("");
  const shown = discovered.filter((id) => items[id].name.toLowerCase().includes(q.toLowerCase()));
  return (
    <aside className="panel inventory">
      <h2>Discoveries <small>{discovered.length} / {totalItems}</small></h2>
      <input className="search" placeholder="Search…" value={q} onChange={(e) => setQ(e.target.value)} />
      <div className="chips">
        {shown.map((id) => <ItemChip key={id} id={id} draggable onClick={() => onPick(id)} />)}
      </div>
    </aside>
  );
}
