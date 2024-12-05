// src/pages/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Wish Simulator</h1>
      <p className="about-description">
        Welcome to the <strong>Wish Simulator</strong>, where dreams come true in the form of collectible cards! 
        Make a wish, collect unique and rare cards, and build your ultimate inventory. Whether you’re here for fun, 
        competition, or simply to relax, we’re glad to have you!
      </p>

      <section className="about-features">
        <h2>Why You'll Love Wish Simulator</h2>
        <ul>
          <li>🎲 A fun way to take a break between classes or during finals week</li>
          <li>💎 Collect cards inspired by our favorite memories and shared experiences</li>
          <li>📱 Designed to work seamlessly on your phone, laptop, or tablet</li>
          <li>✨ A creative and personalized card-collecting experience made for our UCSD community</li>
        </ul>
      </section>

      <section className="about-goal">
        <h2>Our Goal</h2>
        <p>
          Our mission is to provide a fun and rewarding experience for players of all ages. 
          We aim to create a platform that sparks joy, creativity, and a sense of achievement.
        </p>
      </section>

      <footer className="about-footer">
        <p>&copy; 2024 We Wish Simulator. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
