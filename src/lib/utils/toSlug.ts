export function toSlug(value: string): string {
    return value
        .toLowerCase()
        .normalize('NFD') // 🔥 separa acentos
        .replace(/[\u0300-\u036f]/g, '') // 🔥 elimina acentos
        .replace(/ñ/g, 'n') // 🔹 ñ → n
        .replace(/[&/]/g, '') // 🔹 elimina & y /
        .replace(/\s+/g, '-') // 🔹 espacios → -
        .replace(/[^a-z0-9-]/g, '') // 🔥 limpia caracteres raros
        .trim();
}