const searchForm = document.querySelector(".search-box");
const searchInput = document.getElementById("searchInput");
const recipeCard = document.querySelector(".recipeCard");

searchForm.addEventListener("submit", function(event) {

event.preventDefault();

const searchText = searchInput.value.toLowerCase();

const recipeTitle = document
.querySelector(".recipeTitle")
.textContent
.toLowerCase();

if (recipeTitle.includes(searchText)) {
recipeCard.style.display = "flex";
}
else {
recipeCard.style.display = "none";
}

});