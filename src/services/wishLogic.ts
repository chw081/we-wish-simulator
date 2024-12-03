// src/services/wishLogic.ts
const cards = [
    { image: '/assets/card1.jpg', title: 'Dragon Castle' },
    { image: '/assets/card2.png', title: 'Cyber City' },
    { image: '/assets/card3.jpg', title: 'Ancient Ruins' },
    // Add more cards here
];

export function getRandomCard() {
    const index = Math.floor(Math.random() * cards.length);
    return cards[index];
}
  