import React, { useState } from 'react';
import { useRecipes } from '../context/RecipeContext';
import Header from '../components/Header';
import MealTypeFilter from '../components/MealTypeFilter';
import RecipeGrid from '../components/RecipeGrid';
import { MealType } from '../types';

const RecipesPage: React.FC = () => {
  const { recipes } = useRecipes();
  const [selectedMealType, setSelectedMealType] = useState<MealType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header setSearchQuery={setSearchQuery} />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-serif font-bold text-slate-800 mb-2 text-center">
          Recipe Collection
        </h1>
        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          Browse our complete collection of recipes or use the filters to find exactly what you're looking for.
        </p>
        
        <div className="mb-10">
          <MealTypeFilter 
            selectedMealType={selectedMealType} 
            onSelectMealType={setSelectedMealType} 
          />
        </div>
        
        <RecipeGrid 
          recipes={recipes} 
          selectedMealType={selectedMealType}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  );
};

export default RecipesPage;