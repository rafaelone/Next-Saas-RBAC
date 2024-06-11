export function createSlug(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u8300-\u36f]/g, '')
    .replace(/[^\w\s]/gi, '')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase()
}
