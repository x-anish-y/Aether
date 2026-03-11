# 🍳 Bahana – *Khaana Hai Toh Banana Hai*
![BAHANA Architecture](Screenshot%202026-03-11%20125326.png)

**Bahana** is a budget-friendly, offline-first recipe discovery web application designed to solve one of the most common everyday problems:  

> *“What can I cook with the ingredients I already have?”*

Using on-device AI and camera-based ingredient scanning, Bahana instantly suggests recipes tailored to the ingredients available in your kitchen. The platform works even without an internet connection, making it accessible, privacy-friendly, and highly practical for everyday use.

This project was developed by **Team AlgoRHYTHMS** under the theme **UI/UX and Frontend Design** for **Problem Statement 8: Budget-Friendly Recipe Finder**.

---

# 📌 Problem

Many households struggle with:

- Deciding what to cook daily  
- Managing leftover ingredients  
- Avoiding unnecessary grocery purchases  
- Reducing food waste  

Existing recipe platforms typically require manual ingredient input and rely heavily on internet connectivity.

Bahana addresses these issues through **AI-powered ingredient recognition and an offline-first design philosophy.**

---

# 💡 Solution

![BAHANA Architecture](Screenshot%202026-03-11%20125424.png)
<br><br>
Bahana transforms a user’s fridge or kitchen ingredients into **instant recipe recommendations** through:

- Camera-based ingredient detection  
- Local AI processing for privacy and speed  
- Offline recipe access  
- Guided cooking instructions  

The platform eliminates friction in meal planning and encourages sustainable cooking habits.

---

# ✨ Core Features

## 📷 Ingredient Scanner
- Live camera scanning interface with animated guides  
- On-device ingredient recognition using **TensorFlow Lite / WebNN**  
- Real-time visual feedback during scanning  
- Privacy-first processing (no cloud uploads)

---

## 🍽️ Recipe Discovery
- Responsive two-column recipe grid  
- Vibrant recipe cards with quick previews  
- Sticky filter bar for instant refinement  
- Offline browsing via **IndexedDB caching**

---

## 👨‍🍳 Guided Cooking Mode
- Step-by-step cooking instructions with visuals  
- Voice guidance via **Web Speech API** for hands-free cooking  
- Integrated cooking timers  
- Progress tracking throughout the recipe

---

## 🌐 Offline-First Architecture
- Fully functional without internet access  
- Recipes, preferences, and lists stored locally  
- Service Workers for lightning-fast loading (<200ms)

---

## 💰 Budget-Friendly & Sustainable
- Recommends meals using existing ingredients  
- Reduces unnecessary grocery spending  
- Minimizes household food waste  
- Encourages sustainable kitchen habits

---

# 🛠 Technology Stack

| Layer | Technology |
|------|-------------|
| Frontend | React + Preact |
| AI/ML | TensorFlow Lite / WebNN |
| Offline Storage | IndexedDB |
| Performance | Service Workers |
| Voice Assistance | Web Speech API |
| UI/UX | Accessibility-first design with microinteractions |

---

# 🚀 Implementation Roadmap

### Phase 1 – Core UI Development
- Camera scanning interface  
- Recipe grid and UI flows  
- Responsive design system

### Phase 2 – AI Integration
- Ingredient recognition model training  
- Model compression for on-device inference

### Phase 3 – Cooking Engine
- Guided cooking interface  
- Voice instructions  
- Step progress tracking

### Phase 4 – Smart Utilities
- Grocery list generator  
- API integrations  
- Home screen widgets

### Phase 5 – Optimization
- Offline performance tuning  
- Privacy controls  
- Cross-browser compatibility

---

# 📊 Expected Impact

Bahana can help:

- Reduce **household food waste by up to 30%**
- Lower **monthly grocery expenses**
- Simplify everyday cooking decisions
- Promote sustainable and efficient kitchen habits

---

# 🎨 Live Prototype

👉 https://bahana.netlify.app/

---

# 👥 Team

**Team AlgoRHYTHMS**

- Jayaditya Saloi  
- Aneesh Sawant  
- Anish Sasmal  
- Saish Raut  

---

# 🙏 Acknowledgements

Special thanks to:

- **Aether HackConquest Hackathon**
- **Thakur College of Engineering & Technology (TCET), Mumbai**

for providing the platform to innovate, collaborate, and bring this idea to life.

---

# 🌱 Vision

Bahana aims to become an everyday kitchen assistant that transforms available ingredients into delicious meals — making cooking simpler, smarter, and more sustainable.
