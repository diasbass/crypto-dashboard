export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD') // separa letras e acentos
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/[^a-z0-9]+/g, '-') // substitui por hífens
    .replace(/(^-|-$)+/g, '') // remove hífens no início/fim
}
