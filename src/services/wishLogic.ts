// src/services/wishLogic.ts
// Cards
// public/assets/
const cards = [
    { image: '/assets/card1.jpg', title: 'Dragon Castle', rarity: 'Common' },
    { image: '/assets/card2.png', title: 'Cyber City', rarity: 'Uncommon' },
    { image: '/assets/card3.jpg', title: 'Ancient Ruins', rarity: 'Rare' },
    { image: '/assets/card4.jpg', title: 'Stars Gateway', rarity: 'Epic' },
    { image: '/assets/card5.jpeg', title: 'Hogwarts Express', rarity: 'Legend' },
    // Add more cards here
];

//Rarity levels
type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legend';

const rarityProbabilities: Record<Rarity, number> = {
    Common: 0.50,
    Uncommon: 0.25,
    Rare: 0.15,
    Epic: 0.07,
    Legend: 0.03,
};

//|---0.50---|---0.25---|---0.15---|---0.07---|---0.03---|
// Common    Uncommon   Rare      Epic       Legend
function selectRarity(): Rarity {
    const randomValue = Math.random();
    let cumulativeProbability = 0;

    for (const rarity in rarityProbabilities) {
        cumulativeProbability += rarityProbabilities[rarity as Rarity];
        if (randomValue < cumulativeProbability) {
            return rarity as Rarity;
        }
    }
    return 'Common'; // Fallback
}

export function getRandomCard() {
    // Step 1: Select a rarity based on probability
    const selectedRarity = selectRarity();

    // Step 2: Filter cards that match the selected rarity
    const filteredCards = cards.filter(card => card.rarity === selectedRarity);

    // Step 3: Pick a random card from the filtered list
    const index = Math.floor(Math.random() * filteredCards.length);
    return filteredCards[index];
}