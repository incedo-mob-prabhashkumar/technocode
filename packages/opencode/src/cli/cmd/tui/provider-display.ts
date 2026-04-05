export const PROVIDER_DISPLAY_NAMES: Record<string, string> = {
  opencode: "TechnocodeX Zen",
  "opencode-go": "TechnocodeX Go",
}

export function getProviderDisplayName(id: string, fallback: string): string {
  return PROVIDER_DISPLAY_NAMES[id] ?? fallback
}
