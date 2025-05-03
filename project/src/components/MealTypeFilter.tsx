import React from 'react';
import { MealType } from '../types';

interface MealTypeFilterProps {
  selectedMealType: MealType | 'all';
  onSelectMealType: (mealType: MealType | 'all') => void;
}

const mealTypes: { value: MealType | 'all'; label: string }[] = [
  { value: 'all', label: 'All Recipes' },
  { value: 'breakfast', label: 'Breakfast' },
  { value: 'lunch', label: 'Lunch' },
  { value: 'dinner', label: 'Dinner' },
  { value: 'dessert', label: 'Dessert' },
  { value: 'snack', label: 'Snack' },
  { value: 'drink', label: 'Drinks' }
];

const MealTypeFilter: React.FC<MealTypeFilterProps> = ({ 
  selectedMealType, 
  onSelectMealType 
}) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {mealTypes.map(type => (
        <button
          key={type.value}
          onClick={() => onSelectMealType(type.value)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedMealType === type.value
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {type.label}
        </button>
      ))}
    </div>
  );
};

export default MealTypeFilter;