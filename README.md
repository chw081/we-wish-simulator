# **Wish Simulator**

Welcome to the **Wish Simulator**, a fun and interactive web app created to simulate the excitement of making wishes and collecting unique cards. Originally designed for UC San Diego classmates and friends, this app brings joy and creativity to everyone!

![Vercel Deploy](https://img.shields.io/badge/deployed%20on-Vercel-blue)
![License](https://img.shields.io/github/license/chw081/we-wish-simulator)
[![Star](https://img.shields.io/github/stars/chw081/we-wish-simulator?style=social)](https://github.com/chw081/we-wish-simulator/stargazers)
[![Follow](https://img.shields.io/github/followers/chw081?label=Follow&style=social)](https://github.com/chw081)

---

## **Demo**

You can check out the live demo of the app here: [Wish Simulator Demo](https://we-wish-simulator.vercel.app)

---

## **Features**

- 🎴 **Card Collection**: Acquire beautifully designed cards with various rarities.
- 🪄 **Wish Mechanics**: Simulate single or multi-pulls with rarity-based outcomes. 
- 📚 **Inventory Management**:
  - **Filter by Rarity**: Quickly find cards of a specific rarity.
  - **Sort Options**: Organize your collection by rarity or the time of acquisition.
- 🌈 **Dynamic UI**: User-friendly interface with interactive dropdowns and polished animations.
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile.

---

## **Technologies Used**

- **Frontend**: React (TypeScript)
  - **React Hooks**: Utilized to manage state and lifecycle methods effectively.
  - **React Router**: For navigating between different pages (Home, Inventory, About).
- **Styling**: TailwindCSS, custom CSS
  - **TailwindCSS**: Utility-first CSS framework to create responsive layouts quickly.
  - **Custom CSS**: Additional styling for unique design elements.
- **Deployment**: Vercel
  - **Vercel**: Hosting and deployment platform for fast and easy deployments.
- **State Management**: React useState and useEffect Hooks
- **Version Control**: Git and GitHub for source code management
- **Build Tools**: Vite for fast development and optimized production builds

---

## **Getting Started**

Follow these instructions to run the app locally.

### **Prerequisites**
- **Node.js** and **npm** installed on your machine.
- A **Git** client for version control.

### **Installation**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/chw081/we-wish-simulator.git
   cd we-wish-simulator
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the App Locally**:
   ```bash
   npm run dev
   ```

4. Open your browser and go to:
   ```
   http://localhost:5173
   ```

---

## **Usage**

- **Home Page**: Make a single wish or ten wishes to collect cards.
- **Inventory**: View all the cards you’ve collected.
- **About Page**: Learn more about the app and its creator.

---

## **Deployment**

The app is deployed on [Vercel](https://vercel.com/). Follow these steps to deploy:

1. **Build the Project**:
   ```bash
   npm run build
   ```

2. **Deploy with Vercel**:
   - Install the Vercel CLI if you haven’t already:
     ```bash
     npm install -g vercel
     ```
   - Deploy the app:
     ```bash
     vercel
     ```

3. **Visit Your Live App**:
   Vercel provides a live URL after deployment.

---

## **Folder Structure**

```plaintext
public/
├── assets/               # Static assets (e.g., images)
src/
├── components/           # Reusable components (Navbar, Footer, Card, etc.)
├── pages/                # Page-level components (Home, InventoryPage, About)
├── services/             # Business logic (e.g., wishLogic.ts)
├── App.tsx               # Main app entry point
├── index.tsx             # React entry point
├── styles/               # Global and custom CSS
```

---

## **Future Enhancements**

- 🏆 Leaderboard to compare collections with friends.
- 🔄 Implement persistent storage for inventory.
- 🎨 Design new card themes for holidays and events.
- 🧙‍♀️ Additional wish probabilities, card designs, and special effects.
- 🎨 Custom themes and user preferences.
- 📊 Statistics to track wish results and rare card pull rates.

---

## **Contributing**

Contributions are welcome! Feel free to fork the repository and submit a pull request.

1. Fork the project.
2. Create your feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**

- Built with ❤️ to share fun moments with friends and anyone who loves games.
- Special thanks to [Vercel](https://vercel.com/) for easy deployment.

---

### **Show Your Support**

Follow me and give a ⭐ if you like this website!

- [Follow me on GitHub](https://github.com/chw081)
- [Star the Wish Simulator repository](https://github.com/chw081/we-wish-simulator)
