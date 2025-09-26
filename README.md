# Bahana – *Khaana Hai Toh Banana Hai*  

## 📌 Overview  
**Bahana** is a budget-friendly, offline-first recipe finder web app designed to solve one of the most common daily dilemmas: *“What’s for dinner?”*  
By scanning the ingredients in your fridge, Bahana instantly suggests tailored recipes without the need for manual input, internet dependency, or paid subscriptions.  

This project was developed by **Team AlgoRHYTHMS** under the theme **UI/UX and Frontend Design** for **Problem Statement 8: Budget-Friendly Recipe Finder**.  

---

## ✨ Features  
- **Ingredient Scanner**  
  - Live camera scanning with animated guides.  
  - On-device AI (TensorFlow Lite/WebNN) for privacy-first ingredient detection.  
  - Real-time progress feedback with smooth microinteractions.  

- **Recipe Discovery**  
  - Beautiful two-column recipe grid with vibrant cards.  
  - Sticky filter bar for instant refinements.  
  - Offline browsing powered by IndexedDB caching.  

- **Guided Cooking Mode**  
  - Step-by-step cooking instructions with images.  
  - Voice assistance (Web Speech API) for hands-free cooking.  
  - Built-in timers and progress tracking.  

- **Offline-First Architecture**  
  - Works seamlessly without internet.  
  - Local storage of recipes, preferences, and grocery lists.  
  - Service workers for fast loading (under 200ms).  

- **Budget-Friendly & Sustainable**  
  - Suggests meals using what you already own.  
  - Reduces unnecessary grocery trips and food waste.  
  - Supports household savings and eco-friendly living.  

---

## 🛠 Tech Stack  
- **Frontend:** React + Preact  
- **AI/ML:** TensorFlow Lite / WebNN (on-device inference)  
- **Offline Support:** IndexedDB + Service Workers  
- **Voice & Audio:** Web Speech API, Web Audio  
- **UI/UX:** Clean, vibrant design with 60fps animations, microinteractions, and accessibility-first approach  

---

## 🚀 Implementation Roadmap  
1. **Core UI Build** – React + Preact integration with camera & scanning flow.  
2. **AI Model Integration** – Train and compress ingredient recognition models.  
3. **Recipe Engine** – Recipe grid, guided cooking mode, voice prompts.  
4. **Smart Features** – Grocery list overlay, API integration, widget support.  
5. **Optimizations** – Privacy toggles, offline-first refinement, cross-browser/device consistency.  

---

## 📊 Impact  
- Reduces *household food waste by up to 30%*.  
- Saves *monthly expenses* by preventing extra grocery runs.  
- Turns *dinner paralysis* into quick, inspired decisions.  
- Creates a *habit-forming daily engagement* loop.  

---

## 🎨 Prototype  
👉 [Figma Prototype Link](https://www.figma.com/proto/MpAqx02Z9RsI25831auIUp/Untitled?node-id=10-288&m=draw&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=10%3A289)  

---

## 🙏 Acknowledgements  
Special thanks to **Aether HackConquest Hackathon** and **Thakur College of Engineering & Technology (TCET), Mumbai** for providing the platform to innovate, learn, and showcase Bahana.  
