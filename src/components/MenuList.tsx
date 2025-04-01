import React from 'react';
import { Link } from 'react-router-dom';
import { MenuCategory } from '../types';

interface MenuListProps {
    categories: MenuCategory[];
}

const MenuList: React.FC<MenuListProps> = ({ categories }) => {
    return (
        <div className="menu-list">
            {categories.map(category => (
                <div key={category.id} className="category-section">
                    <h2>{category.name}</h2>
                    <div className="items-grid">
                        {category.items.map(item => (
                            <Link 
                                to={`/item/${item.id}`} 
                                key={item.id} 
                                className="menu-item-card"
                            >
                                <h3>{item.name}</h3>
                                <div className="item-details">
                                    <p>Price: ${item.price.toFixed(2)}</p>
                                    <p>Prep Time: {item.prepTime} mins</p>
                                    <p>Difficulty: {'⭐'.repeat(item.difficultyRating)}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuList; 