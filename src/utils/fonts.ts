export interface FontDefinition {
    name: string;
    importUrl: string;
    cssFamily: string;
    characters: Record<string, number>;
}

export type FontMap = Record<string, FontDefinition>;

function getSafeFilename(fontKey: string): string {
  return fontKey
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export async function loadFontDefinition(name: string): Promise<FontDefinition> {
  const safeName = getSafeFilename(name);
  return await import(`./google-fonts/${safeName}.json`);
}

export async function loadFontMap(): Promise<FontMap> {
    const modules = import.meta.glob('./google-fonts/*.json');

    const entries: [string, FontDefinition][] = [];

    for (const path in modules) {
    const mod = await modules[path]();
    const maybeDefault = await (typeof mod === 'function' ? mod() : mod);
    const font: FontDefinition = (maybeDefault as any).default;
    const key = getSafeFilename(font.name);
    entries.push([key, font]);
    }

  return Object.fromEntries(entries);
}