// Imports
import React from 'react';
import ReactDOM from 'react-dom';

const data = [
    {
        "name": "Baked Salmon",
        "ingredients": [
            { "name": "Salmon", "amount": 1, "measurement": "lb" },
            { "name": "Pine Nuts", "amount": 1, "measurement": "cup" },
            { "name": "Butter Lettuce", "amount": 2, "measurement": "cups" },
            { "name": "Yellow Squash", "amount": 1, "measurement": "med" },
            { "name": "Olive Oil", "amount": 0.5, "measurement": "cup" },
            { "name": "Garlic", "amount": 3, "measurement": "cloves" }
        ],
        "steps": [
            "Preheat the oven to 350 degrees.",
            "Spread the olive oil around a glass baking dish.",
            "Add the salmon, garlic, and pine nuts to the dish.",
            "Bake for 15 minutes.",
            "Add the yellow squash and put back in the oven for 30 mins.",
            "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
        ]
    },
    {
        "name": "Fish Tacos",
        "ingredients": [
            { "name": "Whitefish", "amount": 1, "measurement": "lb" },
            { "name": "Cheese", "amount": 1, "measurement": "cup" },
            { "name": "Iceberg Lettuce", "amount": 2, "measurement": "cups" },
            { "name": "Tomatoes", "amount": 2, "measurement": "large"},
            { "name": "Tortillas", "amount": 3, "measurement": "med" }
        ],
        "steps": [
            "Cook the fish on the grill until hot.",
            "Place the fish on the 3 tortillas.",
            "Top them with lettuce, tomatoes, and cheese."
        ]
    }
];
const Step = ({step}) => <li>{step}</li>

const Ingredient = ({name, amount, measurement}) =>
	<li>
  	<span className="amount">{amount} </span>
  	<span className="measurement">{measurement} </span>
  	<span className="name">{name}</span>
  </li>

const Recipe = ({ name, ingredients, steps }) =>
	<div id={name.toLowerCase().replace(/ /g, '-')}>
    <h1>{name}</h1>
    <h3>Ingredients</h3>
    <ul>
        { ingredients.map( (ingredient, i) => <Ingredient key={i} {...ingredient} /> )}
    </ul>
    <h3>Steps</h3>
    <ul>
    	{ steps.map( (step, i) => <Step key={i} step={step} /> )}
    </ul>
  </div>
  
const Menu = ({ recipes }) => 
	<article>
        <header>
            <h1>Delicious Recipes</h1>
        </header>
        <div className="recipes">
            { recipes.map( (recipe, i) => <Recipe key={i} {...recipe} /> )}
        </div>
   </article>

ReactDOM.render(
  <Menu recipes={data} />,
  document.getElementById('container')
);
