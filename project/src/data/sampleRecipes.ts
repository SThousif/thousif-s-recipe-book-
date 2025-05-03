import { Recipe } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const sampleRecipes: Recipe[] = [
  {
    id: uuidv4(),
    title: 'Classic Pancakes',
    description: 'Fluffy, golden pancakes perfect for a weekend breakfast.',
    ingredients: [
      '1 1/2 cups all-purpose flour',
      '3 1/2 teaspoons baking powder',
      '1 teaspoon salt',
      '1 tablespoon white sugar',
      '1 1/4 cups milk',
      '1 egg',
      '3 tablespoons butter, melted'
    ],
    instructions: [
      'In a large bowl, sift together flour, baking powder, salt, and sugar.',
      'Make a well in the center and pour in milk, egg, and melted butter; mix until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium-high heat.',
      'Pour the batter onto the griddle, using approximately 1/4 cup for each pancake.',
      'Cook until bubbles form and the edges are dry, then flip and cook until browned on the other side.'
    ],
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    mealType: 'breakfast',
    imageUrl: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
    favorite: false
  },
  {
    id: uuidv4(),
    title: 'Mediterranean Salad',
    description: 'A refreshing salad with the flavors of the Mediterranean.',
    ingredients: [
      '3 cups romaine lettuce, chopped',
      '1 cucumber, diced',
      '1 cup cherry tomatoes, halved',
      '1/2 red onion, thinly sliced',
      '1/2 cup kalamata olives, pitted',
      '1/2 cup feta cheese, crumbled',
      '1/4 cup olive oil',
      '2 tablespoons lemon juice',
      '1 teaspoon dried oregano',
      'Salt and pepper to taste'
    ],
    instructions: [
      'In a large bowl, combine lettuce, cucumber, tomatoes, red onion, olives, and feta cheese.',
      'In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.',
      'Pour dressing over the salad and toss gently to combine.',
      'Serve immediately or refrigerate for up to 1 hour before serving.'
    ],
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    mealType: 'lunch',
    imageUrl: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg',
    favorite: false
  },
  {
    id: uuidv4(),
    title: 'Beef Stir Fry',
    description: 'A quick and flavorful beef stir fry with vegetables.',
    ingredients: [
      '1 lb flank steak, thinly sliced',
      '3 tablespoons soy sauce',
      '1 tablespoon cornstarch',
      '2 tablespoons vegetable oil',
      '1 red bell pepper, sliced',
      '1 yellow bell pepper, sliced',
      '1 cup broccoli florets',
      '2 carrots, julienned',
      '3 cloves garlic, minced',
      '1 tablespoon ginger, grated',
      '1/4 cup beef broth',
      '2 tablespoons oyster sauce',
      '1 tablespoon honey',
      'Green onions for garnish'
    ],
    instructions: [
      'In a bowl, toss sliced beef with 1 tablespoon soy sauce and cornstarch. Let marinate for 15 minutes.',
      'Heat 1 tablespoon oil in a large wok or skillet over high heat. Add beef and cook until browned, about 2-3 minutes. Remove and set aside.',
      'Add remaining oil to the wok. Add bell peppers, broccoli, and carrots. Stir-fry for 3-4 minutes until vegetables begin to soften.',
      'Add garlic and ginger, stir-fry for 30 seconds until fragrant.',
      'Return beef to the wok. Add beef broth, remaining soy sauce, oyster sauce, and honey.',
      'Cook for 1-2 minutes until sauce thickens. Garnish with green onions and serve with rice.'
    ],
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    mealType: 'dinner',
    imageUrl: 'https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg',
    favorite: false
  },
  {
    id: uuidv4(),
    title: 'Chocolate Chip Cookies',
    description: 'Classic chewy chocolate chip cookies that everyone loves.',
    ingredients: [
      '1 cup butter, softened',
      '1 cup white sugar',
      '1 cup packed brown sugar',
      '2 eggs',
      '2 teaspoons vanilla extract',
      '3 cups all-purpose flour',
      '1 teaspoon baking soda',
      '2 teaspoons hot water',
      '1/2 teaspoon salt',
      '2 cups semi-sweet chocolate chips'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C).',
      'Cream together butter, white sugar, and brown sugar until smooth.',
      'Beat in eggs one at a time, then stir in vanilla.',
      'Dissolve baking soda in hot water. Add to batter along with salt.',
      'Stir in flour and chocolate chips.',
      'Drop by large spoonfuls onto ungreased pans.',
      'Bake for about 10 minutes or until edges are nicely browned.'
    ],
    prepTime: 15,
    cookTime: 10,
    servings: 24,
    mealType: 'dessert',
    imageUrl: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg',
    favorite: false
  },
  {
    id: uuidv4(),
    title: 'Avocado Toast',
    description: 'Simple yet delicious avocado toast with various toppings.',
    ingredients: [
      '2 slices whole grain bread',
      '1 ripe avocado',
      '1/2 lemon, juiced',
      'Salt and pepper to taste',
      'Red pepper flakes (optional)',
      '2 eggs (optional)',
      'Microgreens or arugula for garnish'
    ],
    instructions: [
      'Toast the bread until golden and crisp.',
      'Cut the avocado in half, remove the pit, and scoop the flesh into a bowl.',
      'Add lemon juice, salt, and pepper. Mash with a fork to desired consistency.',
      'Spread the avocado mixture onto the toast.',
      'If desired, top with a fried or poached egg.',
      'Sprinkle with red pepper flakes and garnish with microgreens.'
    ],
    prepTime: 5,
    cookTime: 5,
    servings: 2,
    mealType: 'breakfast',
    imageUrl: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg',
    favorite: false
  },
  {
    id: uuidv4(),
    title: 'Fruit Smoothie',
    description: 'Refreshing fruit smoothie perfect for a quick breakfast or snack.',
    ingredients: [
      '1 banana, frozen',
      '1 cup mixed berries, frozen',
      '1 cup spinach (optional)',
      '1 tablespoon chia seeds',
      '1 tablespoon honey or maple syrup',
      '1 cup almond milk or yogurt',
      'Ice cubes (optional)'
    ],
    instructions: [
      'Place all ingredients in a blender.',
      'Blend until smooth and creamy, adding more liquid if needed.',
      'Pour into glasses and serve immediately.'
    ],
    prepTime: 5,
    cookTime: 0,
    servings: 2,
    mealType: 'drink',
    imageUrl: 'https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg',
    favorite: false
  }
];