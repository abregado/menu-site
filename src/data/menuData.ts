import { MenuItem, MenuCategory } from '../types';

export const menuData: MenuCategory[] = [
    {
        id: 'appetizers',
        name: 'Appetizers',
        items: [
            {
                id: 'bruschetta',
                name: 'Bruschetta',
                category: 'appetizers',
                price: 8.99,
                prepTime: 15,
                difficultyRating: 2,
                ingredients: [
                    '6 slices Italian bread',
                    '2 tomatoes, diced',
                    '3 cloves garlic, minced',
                    'Fresh basil leaves',
                    'Olive oil',
                    'Salt and pepper to taste'
                ],
                instructions: [
                    'Toast bread slices until golden brown',
                    'In a bowl, combine diced tomatoes, minced garlic, and torn basil',
                    'Drizzle with olive oil and season with salt and pepper',
                    'Top each bread slice with the tomato mixture',
                    'Serve immediately'
                ]
            }
            // Add more items as needed
        ]
    }
    // Add more categories as needed
]; 