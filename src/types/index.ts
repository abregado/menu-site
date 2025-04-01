export interface MenuItem {
    id: string;
    name: string;
    category: string;
    price: number;
    prepTime: number; // in minutes
    difficultyRating: 1 | 2 | 3 | 4 | 5; // 1 being easiest, 5 being hardest
    ingredients: string[];
    instructions: string[];
    image?: string;
}

export type MenuCategory = {
    id: string;
    name: string;
    items: MenuItem[];
}; 