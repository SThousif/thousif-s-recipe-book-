import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Recipe, RecipeContextType } from '../types';
import { sampleRecipes } from '../data/sampleRecipes';

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipes must be used within a RecipeProvider');
  }
  return context;
};

export const RecipeProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // Load recipes from localStorage or use sample recipes
    const savedRecipes = localStorage.getItem('recipes');
    if (savedRecipes) {
      setRecipes(JSON.parse(savedRecipes));
    } else {
      setRecipes(sampleRecipes);
    }
  }, []);

  useEffect(() => {
    // Save recipes to localStorage whenever they change
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe: Omit<Recipe, 'id'>) => {
    const newRecipe = {
      ...recipe,
      id: uuidv4()
    };
    setRecipes([...recipes, newRecipe]);
  };

  const updateRecipe = (id: string, recipe: Partial<Recipe>) => {
    setRecipes(recipes.map(r => r.id === id ? { ...r, ...recipe } : r));
  };

  const deleteRecipe = (id: string) => {
    setRecipes(recipes.filter(r => r.id !== id));
  };

  const toggleFavorite = (id: string) => {
    setRecipes(recipes.map(r => 
      r.id === id ? { ...r, favorite: !r.favorite } : r
    ));
  };

  return (
    <RecipeContext.Provider 
      value={{ 
        recipes, 
        addRecipe, 
        updateRecipe, 
        deleteRecipe,
        toggleFavorite 
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};