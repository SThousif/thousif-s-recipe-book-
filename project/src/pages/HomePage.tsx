import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useRecipes } from '../context/RecipeContext';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import MealTypeFilter from '../components/MealTypeFilter';
import { MealType } from '../types';

const HomePage: React.FC = () => {
  const { recipes } = useRecipes();
  const [selectedMealType, setSelectedMealType] = useState<MealType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Get recent recipes (last 3)
  const recentRecipes = [...recipes]
    .sort((a, b) => b.id.localeCompare(a.id))
    .slice(0, 3);

  // Get favorite recipes
  const favoriteRecipes = recipes.filter(recipe => recipe.favorite).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header setSearchQuery={setSearchQuery} />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-4 md:p-8 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
              Discover Delicious Recipes for Every Occasion
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Explore our collection of mouthwatering recipes, from quick weeknight meals to impressive dishes for special occasions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/recipes" 
                className="px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors shadow-md text-lg font-medium"
              >
                Browse Recipes
              </Link>
              <Link 
                to="/add-recipe" 
                className="px-6 py-3 bg-white text-amber-800 rounded-md hover:bg-gray-100 transition-colors shadow-md text-lg font-medium"
              >
                Add Your Recipe
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <button 
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
              });
            }}
            className="animate-bounce bg-white/30 backdrop-blur-sm p-2 rounded-full"
          >
            <ChevronRight className="rotate-90 h-6 w-6 text-white" />
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-10">
            Browse by Category
          </h2>
          <MealTypeFilter 
            selectedMealType={selectedMealType}
            onSelectMealType={setSelectedMealType}
          />
        </div>
      </section>

      {/* Recent Recipes Section */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif font-bold">Recent Recipes</h2>
            <Link 
              to="/recipes" 
              className="flex items-center text-amber-700 hover:text-amber-900 transition-colors"
            >
              View all
              <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>

      {/* Favorite Recipes Section */}
      {favoriteRecipes.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-serif font-bold">Your Favorites</h2>
              <Link 
                to="/favorites" 
                className="flex items-center text-amber-700 hover:text-amber-900 transition-colors"
              >
                View all
                <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {favoriteRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;