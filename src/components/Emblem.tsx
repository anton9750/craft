import { useEmblem } from "../hooks/useEmblem";

export default function Emblem({ emoji, name, size = 28 }: { emoji: string; name: string; size?: number }) {
  const { src, loading, error } = useEmblem(emoji);
  if (error) return <span className="emoji" style={{ fontSize: size * 0.85 }}>{emoji}</span>;
  if (loading || !src) return <span className="emblem skeleton" style={{ width: size, height: size }} />;
  return <img className="emblem" src={src} alt={name} width={size} height={size} draggable={false} />;
}
