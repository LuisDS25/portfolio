// 🔹 Obtener primeras N de cualquier lista
export function getFirstItems<T>(
    items: T[],
    limit = 5
): T[] {
    return items.slice(0, limit);
}