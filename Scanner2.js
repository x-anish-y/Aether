const recipes = {
      'paneer-tikka': {
        title: 'Paneer Tikka',
        image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop',
        time: '25 mins',
        difficulty: 'Easy',
        spice: 'Medium',
        steps: [
          { text: 'Cut paneer into cubes and marinate with yogurt, ginger-garlic paste, and spices for 30 minutes.', image: '🧊' },
          { text: 'Prepare vegetables by cutting bell peppers and onions into chunks.', image: '🫑' },
          { text: 'Thread marinated paneer and vegetables onto skewers alternately.', image: '🍢' },
          { text: 'Grill on medium heat for 12-15 minutes, turning occasionally until golden brown.', image: '🔥' },
          { text: 'Serve hot with mint chutney and sliced onions.', image: '🍽️' }
        ]
      },
      'veggie-pasta': {
        title: 'Veggie Pasta',
        image: 'https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/quick_vegetable_pasta_93041_16x9.jpg',
        time: '20 mins',
        difficulty: 'Easy',
        spice: 'Mild',
        steps: [
          { text: 'Boil pasta in salted water according to package instructions until al dente.', image: '🍝' },
          { text: 'Heat olive oil in a large pan and sauté chopped vegetables until tender.', image: '🥕' },
          { text: 'Add tomato sauce, herbs, salt, and pepper. Let it simmer for 5 minutes.', image: '🍅' },
          { text: 'Drain pasta and toss with the vegetable sauce until well combined.', image: '🥄' },
          { text: 'Garnish with fresh basil and parmesan cheese before serving.', image: '🌿' }
        ]
      },
      'stir-fry': {
        title: 'Vegetable Stir Fry',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop',
        time: '15 mins',
        difficulty: 'Easy',
        spice: 'Spicy',
        steps: [
          { text: 'Prepare all vegetables by washing and cutting into uniform pieces.', image: '🥒' },
          { text: 'Heat oil in a wok or large skillet over high heat until smoking.', image: '🔥' },
          { text: 'Add garlic and ginger, stir-fry for 30 seconds until fragrant.', image: '🧄' },
          { text: 'Add vegetables and stir-fry quickly for 3-4 minutes until crisp-tender.', image: '🥘' },
          { text: 'Season with soy sauce, salt, and serve immediately with rice.', image: '🍚' }
        ]
      },
      'butter-chicken': {
        title: 'Butter Chicken',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop',
        time: '45 mins',
        difficulty: 'Medium',
        spice: 'Medium',
        steps: [
          { text: 'Marinate chicken pieces with yogurt, lemon juice, and spices for 2 hours.', image: '🍗' },
          { text: 'Cook marinated chicken in a hot pan until golden brown and cooked through.', image: '🔥' },
          { text: 'In the same pan, add butter, onions, garlic, and ginger. Sauté until soft.', image: '🧅' },
          { text: 'Add tomato puree, cream, and spices. Simmer for 15 minutes.', image: '🍅' },
          { text: 'Add cooked chicken back to the sauce and simmer for 5 more minutes.', image: '🥄' },
          { text: 'Garnish with cream and coriander. Serve with naan or rice.', image: '🍛' }
        ]
      },
      'biryani': {
        title: 'Chicken Biryani',
        image: 'https://recipe30.com/wp-content/uploads/2023/03/chicken-Biryani.jpg',
        time: '60 mins',
        difficulty: 'Hard',
        spice: 'Spicy',
        steps: [
          { text: 'Soak basmati rice for 30 minutes, then boil with whole spices until 70% cooked.', image: '🍚' },
          { text: 'Marinate chicken with yogurt, spices, and fried onions for 1 hour.', image: '🍗' },
          { text: 'Cook marinated chicken until tender and fully cooked.', image: '🔥' },
          { text: 'Layer the rice and chicken alternately in a heavy-bottomed pot.', image: '🥘' },
          { text: 'Sprinkle saffron soaked in milk, fried onions, and mint leaves on top.', image: '🌿' },
          { text: 'Cover tightly and cook on dum (low heat) for 45 minutes.', image: '⏲️' },
          { text: 'Let it rest for 10 minutes before opening and serving with raita.', image: '🍽️' }
        ]
      },
      'gulab-jamun': {
        title: 'Gulab Jamun',
        image: 'https://www.cadburydessertscorner.com/hs-fs/hubfs/dc-website-2022/articles/soft-gulab-jamun-recipe-for-raksha-bandhan-from-dough-to-syrup-all-you-need-to-know/soft-gulab-jamun-recipe-for-raksha-bandhan-from-dough-to-syrup-all-you-need-to-know.webp?width=1920&height=464&name=soft-gulab-jamun-recipe-for-raksha-bandhan-from-dough-to-syrup-all-you-need-to-know.webp',
        time: '40 mins',
        difficulty: 'Medium',
        spice: 'Sweet',
        steps: [
          { text: 'Mix milk powder, flour, and a pinch of baking soda in a bowl.', image: '🥛' },
          { text: 'Add ghee and milk gradually to form a soft, smooth dough.', image: '🧈' },
          { text: 'Make small balls from the dough, ensuring no cracks on the surface.', image: '⚪' },
          { text: 'Heat ghee and deep fry the balls on low heat until golden brown.', image: '🔥' },
          { text: 'Prepare sugar syrup with cardamom and rose water.', image: '🍯' },
          { text: 'Soak the hot gulab jamuns in warm syrup for at least 2 hours.', image: '⏰' }
        ]
      }
    };

    let currentSteps = [];
    let completedSteps = 0;


    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const imagePreview = document.getElementById('imagePreview');
    const previewImg = document.getElementById('previewImg');
    const removeImage = document.getElementById('removeImage');
    const scanBtn = document.getElementById('scanBtn');

    uploadArea.addEventListener('click', () => fileInput.click());
    uploadArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      uploadArea.classList.add('border-orange-500');
    });
    uploadArea.addEventListener('dragleave', () => {
      uploadArea.classList.remove('border-orange-500');
    });
    uploadArea.addEventListener('drop', handleDrop);
    fileInput.addEventListener('change', handleFileSelect);
    removeImage.addEventListener('click', clearImage);
    scanBtn.addEventListener('click', scanIngredients);

    function handleDrop(e) {
      e.preventDefault();
      uploadArea.classList.remove('border-orange-500');
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        displayImage(files[0]);
      }
    }

    function handleFileSelect(e) {
      const file = e.target.files[0];
      if (file) {
        displayImage(file);
      }
    }

    function displayImage(file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        previewImg.src = e.target.result;
        imagePreview.classList.remove('hidden');
        scanBtn.disabled = false;
        scanBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      };
      reader.readAsDataURL(file);
    }

    function clearImage() {
      imagePreview.classList.add('hidden');
      fileInput.value = '';
      scanBtn.disabled = true;
      scanBtn.classList.add('opacity-50', 'cursor-not-allowed');
    }

    function scanIngredients() {
      const scanText = document.getElementById('scanText');
      const scanLoader = document.getElementById('scanLoader');
      const loadingOverlay = document.getElementById('loadingOverlay');

      // Show loading
      loadingOverlay.classList.remove('opacity-0', 'pointer-events-none');
      loadingOverlay.classList.add('opacity-100');

      scanText.classList.add('hidden');
      scanLoader.classList.remove('hidden');
      uploadArea.classList.add('scanning-active');

      // Simulate scanning process
      setTimeout(() => {
        // Hide loading
        loadingOverlay.classList.add('opacity-0', 'pointer-events-none');
        loadingOverlay.classList.remove('opacity-100');

        scanText.classList.remove('hidden');
        scanLoader.classList.add('hidden');
        uploadArea.classList.remove('scanning-active');

        // Add detected ingredients
        const sampleIngredients = ['🍅 Tomato', '🧅 Onion', '🫑 Bell Pepper', '🧄 Garlic', '🌿 Basil'];
        displayIngredients(sampleIngredients);
      }, 3000);
    }

    function displayIngredients(ingredients) {
      const ingredientsList = document.getElementById('ingredientsList');
      ingredientsList.innerHTML = '';

      ingredients.forEach(ingredient => {
        const chip = document.createElement('div');
        chip.className = 'ingredient-chip inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-medium mr-2 mb-2 cursor-pointer hover:scale-105 transition-transform';
        chip.innerHTML = `
                    ${ingredient}
                    <button onclick="removeIngredient(this)" class="ml-2 text-white hover:text-red-200">×</button>
                `;
        ingredientsList.appendChild(chip);
      });
    }

    function removeIngredient(button) {
      button.parentElement.remove();
    }

    // Manual ingredient addition
    document.getElementById('addIngredient').addEventListener('click', function () {
      const input = document.getElementById('manualIngredient');
      const ingredient = input.value.trim();

      if (ingredient) {
        const ingredientsList = document.getElementById('ingredientsList');
        const chip = document.createElement('div');
        chip.className = 'ingredient-chip inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-medium mr-2 mb-2 cursor-pointer hover:scale-105 transition-transform';
        chip.innerHTML = `
                    🥄 ${ingredient}
                    <button onclick="removeIngredient(this)" class="ml-2 text-white hover:text-red-200">×</button>
                `;
        ingredientsList.appendChild(chip);
        input.value = '';
      }
    });

    // Recipe modal functionality
    function openRecipe(recipeId) {
      const recipe = recipes[recipeId];
      const modal = document.getElementById('recipeModal');
      const modalContent = document.getElementById('modalContent');

      // Populate modal content
      document.getElementById('modalTitle').textContent = recipe.title;
      document.getElementById('modalImage').src = recipe.image;
      document.getElementById('modalTime').textContent = `⏱️ ${recipe.time}`;
      document.getElementById('modalDifficulty').textContent = `👨‍🍳 ${recipe.difficulty}`;
      document.getElementById('modalSpice').textContent = `🌶️ ${recipe.spice}`;

      // Populate steps
      const stepsContainer = document.getElementById('recipeSteps');
      stepsContainer.innerHTML = '';
      currentSteps = recipe.steps;
      completedSteps = 0;

      recipe.steps.forEach((step, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'recipe-step flex items-start p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all cursor-pointer';
        stepDiv.onclick = () => toggleStep(index);

        stepDiv.innerHTML = `
                    <div class="flex-shrink-0 mr-4">
                        <div class="step-icon w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-2xl">
                            ${step.image}
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center justify-between">
                            <h4 class="font-semibold text-gray-900 dark:text-white">Step ${index + 1}</h4>
                            <button class="step-check w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center">
                                <svg class="w-4 h-4 text-white opacity-0 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 mt-1">${step.text}</p>
                    </div>
                `;

        stepsContainer.appendChild(stepDiv);
      });

      updateProgress();

      // Show modal with animation
      modal.classList.remove('opacity-0', 'pointer-events-none');
      modal.classList.add('opacity-100');
      setTimeout(() => {
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
      }, 50);
    }

    function closeRecipe() {
      const modal = document.getElementById('recipeModal');
      const modalContent = document.getElementById('modalContent');

      modalContent.classList.remove('scale-100');
      modalContent.classList.add('scale-95');
      setTimeout(() => {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modal.classList.remove('opacity-100');
      }, 200);
    }

    function toggleStep(stepIndex) {
      const step = document.querySelectorAll('.recipe-step')[stepIndex];
      const checkButton = step.querySelector('.step-check');
      const checkIcon = checkButton.querySelector('svg');
      const stepIcon = step.querySelector('.step-icon');

      const isCompleted = checkButton.classList.contains('completed');

      if (!isCompleted) {
        // Mark as completed
        checkButton.classList.add('completed', 'bg-green-500', 'border-green-500');
        checkIcon.classList.remove('opacity-0');
        checkIcon.classList.add('opacity-100');
        stepIcon.classList.add('bg-green-500', 'text-white');
        step.classList.add('bg-green-50', 'dark:bg-green-900/20');
        completedSteps++;
      } else {
        // Mark as uncompleted
        checkButton.classList.remove('completed', 'bg-green-500', 'border-green-500');
        checkIcon.classList.add('opacity-0');
        checkIcon.classList.remove('opacity-100');
        stepIcon.classList.remove('bg-green-500', 'text-white');
        step.classList.remove('bg-green-50', 'dark:bg-green-900/20');
        completedSteps--;
      }

      updateProgress();
    }

    function updateProgress() {
      const totalSteps = currentSteps.length;
      const percentage = totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0;

      // Update progress bar
      document.getElementById('progressBar').style.width = percentage + '%';

      // Update progress circle
      const circle = document.getElementById('progressCircle');
      const circumference = 2 * Math.PI * 10; // r = 10
      const offset = circumference - (percentage / 100) * circumference;
      circle.style.strokeDashoffset = offset;

      // Update text
      document.getElementById('progressPercent').textContent = Math.round(percentage) + '%';
      document.getElementById('stepsCompleted').textContent = `${completedSteps} / ${totalSteps}`;

      // Update start cooking button
      const startBtn = document.getElementById('startCooking');
      if (completedSteps === totalSteps && totalSteps > 0) {
        startBtn.textContent = '🎉 Recipe Complete!';
        startBtn.classList.remove('from-green-500', 'to-green-600', 'hover:from-green-600', 'hover:to-green-700');
        startBtn.classList.add('from-purple-500', 'to-purple-600', 'hover:from-purple-600', 'hover:to-purple-700');
      } else {
        startBtn.textContent = '🚀 Start Cooking!';
        startBtn.classList.add('from-green-500', 'to-green-600', 'hover:from-green-600', 'hover:to-green-700');
        startBtn.classList.remove('from-purple-500', 'to-purple-600', 'hover:from-purple-600', 'hover:to-purple-700');
      }
    }

    // Heart/Favorite functionality
    function toggleHeart(button) {
      const icon = button.querySelector('svg');
      const isLiked = button.classList.contains('liked');

      if (!isLiked) {
        button.classList.add('liked');
        icon.classList.remove('text-gray-400');
        icon.classList.add('text-red-500');
        icon.setAttribute('fill', 'currentColor');

        // Animation
        button.style.transform = 'scale(1.2)';
        setTimeout(() => {
          button.style.transform = 'scale(1)';
        }, 150);
      } else {
        button.classList.remove('liked');
        icon.classList.add('text-gray-400');
        icon.classList.remove('text-red-500');
        icon.setAttribute('fill', 'none');
      }
    }

    // Close modal when clicking outside
    document.getElementById('recipeModal').addEventListener('click', function (e) {
      if (e.target === this) {
        closeRecipe();
      }
    });

    // Add fade-in animation to elements when they come into view
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all animatable elements
    document.querySelectorAll('.recipe-card, .bg-white, .bg-gray-50').forEach(el => {
      observer.observe(el);
    });