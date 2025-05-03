import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import Header from '../components/Header';
import RecipeForm from '../components/RecipeForm';

const EditRecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { recipes } = useRecipes();
  
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return <Navigate to="/recipes" />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header setSearchQuery={() => {}} />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-serif font-bold text-slate-800 mb-2 text-center">
          Edit Recipe
        </h1>
        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          Update your recipe details below.
        </p>
        
        <RecipeForm initialData={recipe} isEditing={true} />
      </div>
    </div>
  );
};

export default EditRecipePage;