export const categories = [
    { fishID: "5b21ca3eeb7f6fbccd471820", name: "Sea" },
    { fishID: "5b21ca3eeb7f6fbccd471821", name: "Deshi" },
    { fishID: "5b21ca3eeb7f6fbccd471822", name: "Shutki" },
    { fishID: "5b21ca3eeb7f6fbccd471823", name: "Fishlet" }
];

export function getCategories() {
    return categories.filter(c => c);
}