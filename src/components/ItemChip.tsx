import { items } from "../data/recipes";
import Emblem from "./Emblem";

type Props = { id: string; draggable?: boolean; onClick?: () => void; big?: boolean };

export default function ItemChip({ id, draggable, onClick, big }: Props) {
  const it = items[id];
  return (
    <div
      className={`chip ${big ? "big" : ""}`}
      draggable={draggable}
      onDragStart={(e) => e.dataTransfer.setData("text/plain", id)}
      onClick={onClick}
    >
      <Emblem emoji={it.emoji} name={it.name} size={big ? 40 : 28} /> {it.name}
    </div>
  );
}
