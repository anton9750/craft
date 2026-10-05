export default function ThemeToggle({ theme, onToggle }: { theme: "dark" | "light"; onToggle: () => void }) {
  return <button className="btn" onClick={onToggle}>{theme === "dark" ? "☀️ Light" : "🌙 Dark"}</button>;
}
