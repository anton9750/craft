import { useCallback, useEffect, useState } from "react";
import { items, keyOf, recipes, starters, type Recipe } from "../data/recipes";

const KEY = "infinite-craft:discovered";
const load = (): string[] => {
  try { const v = JSON.parse(localStorage.getItem(KEY) ?? "null"); if (Array.isArray(v)) return v.filter((id: string) => id in items); } catch { /* ignore */ }
  return starters;
};

export function useGame() {
  const [discovered, setDiscovered] = useState<string[]>(load);
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(discovered)); } catch { /* ignore */ } }, [discovered]);

  const combine = useCallback((a: string, b: string): { recipe: Recipe | null; isNew: boolean } => {
    const recipe = recipes[keyOf(a, b)] ?? null;
    const isNew = !!recipe && !discovered.includes(recipe.result);
    if (isNew) setDiscovered((d) => [...d, recipe!.result]);
    return { recipe, isNew };
  }, [discovered]);

  const reset = () => setDiscovered(starters);
  return { discovered, combine, reset };
}
