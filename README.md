# **Wish Simulator**

Welcome to the **Wish Simulator**, a fun and interactive web app created to simulate the excitement of making wishes and collecting unique cards. Originally designed for UC San Diego classmates and friends, this app brings joy and creativity to everyone!

---

## **Features**

- 🎲 **Single Wish**: Draw one card at a time.
- ✨ **Ten Wishes**: Draw ten cards at once for a thrilling experience.
- 📚 **Inventory Management**: View your collection in an organized inventory.
- 📱 **Responsive Design**: Optimized for both desktop and mobile devices.
- ❤️ **Personal Touch**: Made for the UC San Diego community to enjoy!

---

## **Demo**

You can check out the live demo of the app here: [Wish Simulator Demo](https://we-wish-simulator.vercel.app)

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
   npm start
   ```

4. Open your browser and go to:
   ```
   http://localhost:3000
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
src/
├── assets/               # Static assets (e.g., images)
├── components/           # Reusable components (Navbar, Footer, Card, etc.)
├── pages/                # Page-level components (Home, InventoryPage, About)
├── services/             # Business logic (e.g., wishLogic.ts)
├── App.tsx               # Main app entry point
├── index.tsx             # React entry point
├── styles/               # Global and custom CSS
```

---

## **Future Enhancements**

- 🌟 Add card rarity and special effects.
- 🏆 Leaderboard to compare collections with friends.
- 🔄 Implement persistent storage for inventory.
- 🎨 Design new card themes for holidays and events.

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

- Made with ❤️ for UC San Diego classmates and friends.
- Special thanks to [Vercel](https://vercel.com/) for easy deployment.

---

### **Show Your Support**

Follow me and give a ⭐ if you like this website!

- [Follow me on GitHub](https://github.com/chw081)
- [Star the Wish Simulator repository](https://github.com/chw081/we-wish-simulator)
