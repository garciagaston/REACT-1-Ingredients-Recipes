import Ingredient from './Ingredient'
import Step from './Step'

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

export default Recipe