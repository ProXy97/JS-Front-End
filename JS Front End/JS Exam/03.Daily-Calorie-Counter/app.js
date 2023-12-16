const baseURL = 'http://localhost:3030/jsonstore/tasks';

const loadMealsBtn = document.getElementById('load-meals');
const mealsList = document.getElementById('list');
const formAddMealBtn = document.getElementById('add-meal');
const editMealBtn = document.getElementById('edit-meal');
const formElement = document.querySelector('#form form');

const foodInputElement = document.getElementById('food');
const timeInputElement = document.getElementById('time');
const caloriesInputElement = document.getElementById('calories');

loadMealsBtn.addEventListener('click', loadMeals);

formAddMealBtn.addEventListener('click', (e) => {
    e.preventDefault;

    const newMeal = {
        food: foodInputElement.value,
        time: timeInputElement.value,
        calories: caloriesInputElement.value
    }

    fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMeal)
    })
        .then(loadMeals)
        .then(clearForm)


})

editMealBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const mealId = formElement.dataset.meal;
    const mealData = {
        _id: mealId,
        food: foodInputElement.value,
        time: timeInputElement.value,
        calories: caloriesInputElement.value
    }

    fetch(`${baseURL}/${mealId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mealData)
    })
        .then(loadMeals)
        .then(() => {
            formAddMealBtn.removeAttribute('disabled');
            editMealBtn.disabled = "true";

            clearForm();

            delete formElement.dataset.meal;
        })

})

function clearForm()
{
    foodInputElement.value = '';
    timeInputElement.value = '';
    caloriesInputElement.value = '';
}

function loadMeals(){
    fetch(baseURL)
        .then(res => res.json())
        .then(result =>  {
            renderMeals((Object.values(result)));
        });
}

function renderMeals(renderMeals)
{
    mealsList.innerHTML = '';

    renderMeals
        .map(renderMeal)
        .forEach(mealElement => mealsList.appendChild(mealElement));

    
}

function renderMeal(meal)
{
    const mealContainer = document.createElement('div');
    mealContainer.className = 'meal';

    const h2 = document.createElement('h2');
    h2.textContent = meal.food;

    const h3time = document.createElement('h3');
    h3time.textContent = meal.time;

    const h3Calories = document.createElement('h3');
    h3Calories.textContent = meal.calories;

    const mealButtons = document.createElement('div');
    mealButtons.id = 'meal-buttons';

    const changeMealBtn = document.createElement('button');
    changeMealBtn.className = 'change-meal';
    changeMealBtn.textContent = 'Change';


    changeMealBtn.addEventListener('click', () => {

        foodInputElement.value = meal.food;
        timeInputElement.value = meal.time;
        caloriesInputElement.value = meal.calories;

        mealContainer.remove();

        formAddMealBtn.disabled = 'true';
        editMealBtn.removeAttribute('disabled');

        formElement.dataset.meal = meal._id;
        
    })

    const deleteMealBtn = document.createElement('button');
    deleteMealBtn.className = 'delete-meal';
    deleteMealBtn.textContent = 'Delete';

    deleteMealBtn.addEventListener('click', () => {
        console.log(meal._id);
        fetch(`${baseURL}/${meal._id}`, {
            method: 'DELETE'
        })
        .then(loadMeals);
    })

    mealButtons.appendChild(changeMealBtn);
    mealButtons.appendChild(deleteMealBtn);

    mealContainer.appendChild(h2);
    mealContainer.appendChild(h3time);
    mealContainer.appendChild(h3Calories);
    mealContainer.appendChild(mealButtons);

    return mealContainer;

}