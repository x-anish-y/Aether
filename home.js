const dishes = document.querySelectorAll('.dish');
        const dishInfo = document.getElementById('dishInfo');
        const dishName = document.getElementById('dishName');
        const dishIngredients = document.getElementById('dishIngredients');
        const dishTime = document.getElementById('dishTime');

        dishes.forEach(dish => {
            dish.addEventListener('mouseenter', () => {
                const name = dish.getAttribute('data-name');
                const ingredients = dish.getAttribute('data-ingredients');
                const time = dish.getAttribute('data-time');

                dishName.textContent = name;
                dishIngredients.textContent = ingredients;
                dishTime.textContent = time;

                dishInfo.classList.add('show');
            });

            dish.addEventListener('mouseleave', () => {
                dishInfo.classList.remove('show');
            });
        });