import { v4 as uuid } from "uuid";

export const RecipeList = [
  {
    id: uuid(),
    recipeName: "Spaghetti Bolognese",
    ingredients: [
      "500g spaghetti",
      "400g ground beef",
      "1 onion, finely chopped",
      "2 cloves garlic, minced",
      "400g canned tomatoes",
      "2 tablespoons tomato paste",
      "1 teaspoon dried oregano",
      "1 teaspoon dried basil",
      "Salt and pepper to taste",
      "Grated Parmesan cheese, for serving"
    ],
    instructions: [
      "Cook the spaghetti according to package instructions.",
      "In a large pan, brown the ground beef over medium heat.",
      "Add the onion and garlic, and cook until softened.",
      "Stir in the canned tomatoes, tomato paste, oregano, basil, salt, and pepper.",
      "Simmer the sauce for 15-20 minutes, stirring occasionally.",
      "Serve the sauce over the cooked spaghetti, and sprinkle with grated Parmesan cheese."
    ],
    cuisineType: "Italian",
    dishImageLink: "https://picsum.photos/250/250"
  },
  {
    id: uuid(),
    recipeName: "Chicken Tikka Masala",
    ingredients: [
      "500g boneless chicken, cut into pieces",
      "1 cup plain yogurt",
      "2 tablespoons lemon juice",
      "2 teaspoons ground cumin",
      "2 teaspoons ground coriander",
      "1 teaspoon ground turmeric",
      "1 teaspoon chili powder",
      "2 cloves garlic, minced",
      "1 inch ginger, grated",
      "1 cup tomato puree",
      "1 cup heavy cream",
      "Salt and pepper to taste",
      "Fresh cilantro, for garnish"
    ],
    instructions: [
      "In a bowl, mix together the yogurt, lemon juice, cumin, coriander, turmeric, chili powder, garlic, and ginger.",
      "Add the chicken pieces to the marinade and coat well. Let it marinate for at least 1 hour, or overnight in the refrigerator.",
      "Preheat the oven to 400°F (200°C).",
      "Place the marinated chicken on a baking sheet and bake for 20-25 minutes, or until cooked through.",
      "In a saucepan, heat the tomato puree over medium heat. Add the baked chicken pieces and simmer for 10 minutes.",
      "Stir in the heavy cream and season with salt and pepper. Cook for an additional 5 minutes.",
      "Garnish with fresh cilantro and serve with rice or naan bread."
    ],
    cuisineType: "Indian",
    dishImageLink: "https://picsum.photos/250/250"
  },
  {
    id: uuid(),
    recipeName: "Caesar Salad",
    ingredients: [
      "1 head romaine lettuce, chopped",
      "1 cup croutons",
      "1/2 cup grated Parmesan cheese",
      "1/4 cup Caesar dressing",
      "1 lemon, juiced",
      "2 tablespoons olive oil",
      "1 clove garlic, minced",
      "Salt and pepper to taste"
    ],
    instructions: [
      "In a large bowl, combine the chopped lettuce, croutons, and Parmesan cheese.",
      "In a small bowl, whisk together the Caesar dressing, lemon juice, olive oil, garlic, salt, and pepper.",
      "Pour the dressing over the salad and toss to coat evenly.",
      "Serve immediately as a side dish or add grilled chicken or shrimp for a main course."
    ],
    cuisineType: "International",
    dishImageLink: "https://picsum.photos/250/250"
  }
];
