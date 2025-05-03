import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Clock, Users, Heart, Edit, Trash2, ChevronLeft } from 'lucide-react';
import { useRecipes } from '../context/RecipeContext';
import Header from '../components/Header';

const RecipeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { recipes, deleteRecipe, toggleFavorite } = useRecipes();
  const [searchQuery, setSearchQuery] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const recipe = recipes.find(r => r.id === id);

  useEffect(() => {
    if (!recipe) {
      navigate('/recipes');
    }
  }, [recipe, navigate]);

  if (!recipe) {
    return null;
  }

  const handleDelete = () => {
    deleteRecipe(recipe.id);
    navigate('/recipes');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header setSearchQuery={setSearchQuery} />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <Link 
          to="/recipes" 
          className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-6"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to recipes
        </Link>
        
        {/* Recipe Header */}
        <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
          <img 
            src={recipe.imageUrl} 
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800">
                {recipe.mealType.charAt(0).toUpperCase() + recipe.mealType.slice(1)}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">{recipe.title}</h1>
            <p className="text-white/90 mb-4 max-w-3xl">
              {recipe.description}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>Prep: {recipe.prepTime} min</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>Cook: {recipe.cookTime} min</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>{recipe.servings} servings</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recipe Actions */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button 
            onClick={() => toggleFavorite(recipe.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md ${
              recipe.favorite 
                ? 'bg-red-100 text-red-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            } transition-colors`}
          >
            <Heart className={recipe.favorite ? 'fill-red-500' : ''} size={18} />
            {recipe.favorite ? 'Favorited' : 'Add to Favorites'}
          </button>
          <Link 
            to={`/edit-recipe/${recipe.id}`}
            className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-md hover:bg-amber-200 transition-colors"
          >
            <Edit size={18} />
            Edit Recipe
          </Link>
          <button 
            onClick={() => setShowDeleteModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
          >
            <Trash2 size={18} />
            Delete
          </button>
        </div>
        
        {/* Recipe Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-serif font-semibold mb-4">Ingredients</h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-5 w-5 bg-amber-100 rounded-full flex-shrink-0 mr-3 mt-0.5"></span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Instructions */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-serif font-semibold mb-6">Instructions</h2>
              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-medium mr-4 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="flex-grow">{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Delete Recipe</h3>
            <p className="mb-6">
              Are you sure you want to delete "{recipe.title}"? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetailPage;