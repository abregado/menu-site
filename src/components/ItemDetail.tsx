import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MenuItem } from '../types';
import { menuData } from '../data/menuData';

const ItemDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const item: MenuItem | undefined = menuData
        .flatMap(category => category.items)
        .find(item => item.id === id);

    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div className="item-detail">
            <Link to="/" className="back-button">← Back to Menu</Link>
            <h1>{item.name}</h1>
            
            <div className="item-info">
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Preparation Time: {item.prepTime} minutes</p>
                <p>Difficulty: {'⭐'.repeat(item.difficultyRating)}</p>
            </div>

            <div className="ingredients">
                <h2>Ingredients</h2>
                <ul>
                    {item.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>

            <div className="instructions">
                <h2>Instructions</h2>
                <ol>
                    {item.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default ItemDetail; 