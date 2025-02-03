# CSS-Assignment (BrawlHub)

# Brawl Hub

## Introduction

Brawl Hub is a website inspired by **Brawl Stars**, designed to provide users with comprehensive game-related information, including characters, maps, and upcoming events. In addition to the Brawl Stars-themed design and API-driven game details, we introduced a unique feature—a **mini-memory game**. This game utilizes **random number seeding** and **local storage** to track turns, flipped cards, and card order, even after a page refresh.

## Features

- **Brawl Stars Game Information**: Displays up-to-date details about the game, its characters, maps, and events.
- **Mini-Memory Game**: Engages users in a fun interactive challenge with persistent game state using local storage.
- **Bootstrap-Powered Design**: Ensures responsive and visually appealing layouts.

## Component Library Selection & Thought Process

### Why Bootstrap?

To efficiently develop the navbar, footer, landing page, and mini-memory game, we leveraged **Bootstrap**. This decision was made due to:

- **Ease of Use**: Pre-built components enabled us to focus on refining design and functionality.
- **Responsiveness**: Simplifies mobile-friendly design implementation.
- **Utility Classes**: Allowed quick adjustments (e.g., padding, margins) without additional CSS.
- **Comprehensive Documentation**: Provided easy references and example implementations.

## Installation & Setup

### Dependencies

Ensure the following dependency is installed for the mini-memory game:

```sh
npm install seedrandom
```

### Running the Project

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/brawlhub.git
   ```
2. Navigate to the project directory:
   ```sh
   cd brawlhub
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
