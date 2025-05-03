import React, { useState } from 'react';
import { useRecipes } from '../context/RecipeContext';
import Header from '../components/Header';
import RecipeGrid from '../components/RecipeGrid';
import { MealType } from '../types';

const FavoritesPage: React.FC = () => {
  const { recipes } = useRecipes();
  const [selectedMealType, setSelectedMealType] = useState<MealType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter to get only favorite recipes
  const favoriteRecipes = recipes.filter(recipe => recipe.favorite);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header setSearchQuery={setSearchQuery} />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-serif font-bold text-slate-800 mb-2 text-center">
          Your Favorite Recipes
        </h1>
        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          All your favorite recipes in one place.
        </p>
        
        <RecipeGrid 
          recipes={favoriteRecipes} 
          selectedMealType={selectedMealType}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
};

export default FavoritesPage;