import type { Lang } from "../config";
import en from "./en";
import mn from "./mn";
import ru from "./ru";
import zh from "./zh";
import ko from "./ko";
import ja from "./ja";

// English is the source of truth: every other language must provide the same keys.
export type Dictionary = typeof en;

export const DICTIONARIES: Record<Lang, Dictionary> = { mn, en, ru, zh, ko, ja };
