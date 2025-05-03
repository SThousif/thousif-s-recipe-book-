import React from 'react';
import Header from '../components/Header';
import RecipeForm from '../components/RecipeForm';

const AddRecipePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header setSearchQuery={() => {}} />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-serif font-bold text-slate-800 mb-2 text-center">
          Add New Recipe
        </h1>
        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          Share your favorite recipe with the world.
        </p>
        
        <RecipeForm />
      </div>
    </div>
  );
};

export default AddRecipePage;