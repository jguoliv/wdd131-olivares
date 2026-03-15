const recipes = [
{
name:"Sweet Potato Waffles",
description:"Savory waffles made with Sweet potato with a hint of Ginger",
image:"images/sweet-potato-waffle-md.jpg",
tags:["Waffles","Sweet Potato","Side"],
rating:4
},
{
name:"Escalope de Poulet a la Creme",
description:"Delicious quick and easy creamy rice dish.",
image:"images/escalopes-de-poulet-a-la-creme.webp",
tags:["Chicken","Entree"],
rating:4.5
},
{
name:"Oven Roasted Potato Slices",
description:"Easy and delicious oven roasted potatoes.",
image:"images/roasted-potatoes.webp",
tags:["Potatoes","Side"],
rating:4
},
{
name:"Black Beans and Rice",
description:"Black beans and tomatoes served over rice.",
image:"images/black-beans-and-rice.jpg",
tags:["Southwest","Entree"],
rating:3
},
{
name:"Chicken Curry",
description:"Quick and easy Chicken curry recipe.",
image:"images/chicken-curry.webp",
tags:["Chicken","Entree","Indian"],
rating:5
},
{
name:"Chocolate Chip Cookies",
description:"Soft chocolate chip cookies with coconut.",
image:"images/chocolate-chip-cookies.jpg",
tags:["Dessert"],
rating:5
},
{
name:"Apple Crisp",
description:"This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
image:"images/apple-crisp.jpg",
tags:["Dessert"],
rating:4
}
]

const searchForm = document.querySelector(".search-box")
const searchInput = document.getElementById("searchInput")
const recipeList = document.getElementById("recipeList")

searchForm.addEventListener("submit",function(e){
e.preventDefault()
searchRecipes()
})

function ratingTemplate(rating){

let html=`<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`

for(let i=1;i<=5;i++){
if(i<=Math.round(rating)){
html+=`<span aria-hidden="true" class="icon-star">⭐</span>`
}
else{
html+=`<span aria-hidden="true" class="icon-star-empty">☆</span>`
}
}

html+=`</span>`
return html
}

function tagTemplate(tags){
return tags.map(tag=>`<button class="recipeCategory">${tag}</button>`).join("")
}

function recipeTemplate(recipe){

return `
<div class="recipeCard">

<img src="${recipe.image}" alt="${recipe.name}" class="recipeImage">

<div class="recipeInfo">

${tagTemplate(recipe.tags)}

<h2 class="recipeTitle">${recipe.name}</h2>

${ratingTemplate(recipe.rating)}

<p class="recipeDescription">
${recipe.description}
</p>

</div>

</div>
`
}

function renderRecipes(list){

recipeList.innerHTML=""

list.forEach(recipe=>{
recipeList.innerHTML+=recipeTemplate(recipe)
})

}

function searchRecipes(){

const query=searchInput.value.toLowerCase()

let filtered=recipes.filter(recipe=>{
return(
recipe.name.toLowerCase().includes(query) ||
recipe.description.toLowerCase().includes(query) ||
recipe.tags.find(tag=>tag.toLowerCase().includes(query))
)
})

filtered.sort((a,b)=>a.name.localeCompare(b.name))

renderRecipes(filtered)

}

function init(){

const random=Math.floor(Math.random()*recipes.length)

renderRecipes([recipes[random]])

}

init()