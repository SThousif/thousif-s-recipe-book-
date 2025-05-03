import React from 'react';
import RecipeCard from './RecipeCard';
import { Recipe, MealType } from '../types';

interface RecipeGridProps {
  recipes: Recipe[];
  selectedMealType: MealType | 'all';
  searchQuery: string;
}

const RecipeGrid: React.FC<RecipeGridProps> = ({ 
  recipes, 
  selectedMealType,
  searchQuery 
}) => {
  // Filter recipes by meal type and search query
  const filteredRecipes = recipes.filter(recipe => {
    const matchesMealType = selectedMealType === 'all' || recipe.mealType === selectedMealType;
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          recipe.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesMealType && matchesSearch;
  });

  if (filteredRecipes.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-gray-600">No recipes found</h3>
        <p className="text-gray-500 mt-2">Try adjusting your filters or search query</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredRecipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeGrid;