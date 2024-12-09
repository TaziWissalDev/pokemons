# Pokédex Application

A modern Pokédex application built with React, TypeScript, and Redux Saga, featuring infinite scroll and detailed Pokémon information.

## Screenshots

### Landing Page
![landing](https://github.com/user-attachments/assets/6638ed2e-7516-49ea-89bc-3ade63a48a77)

The welcoming landing page with a "Start Exploring" button.

### Pokémon List
![list](https://github.com/user-attachments/assets/516426c8-aa09-42a3-b673-5f1cc7586960)
Grid layout of Pokémon cards with infinite scroll functionality.

### Pokémon Details
![modal](https://github.com/user-attachments/assets/c6e5bb9d-36ab-4941-8a3a-5c61cfb1fc99)
Modal view showing detailed information about a selected Pokémon.

## Features

- ✨ Modern UI with Tailwind CSS
- 🔄 Infinite scroll for efficient data loading
- 📱 Fully responsive design
- 🎯 TypeScript for type safety
- 🔍 Detailed Pokémon information
- ⚡ Fast and optimized performance
- 🧪 Comprehensive test coverage

## Technical Stack

- React 18
- TypeScript
- Redux Toolkit & Redux Saga
- Tailwind CSS
- Vite
- Vitest & React Testing Library
- Cypress

## Project Structure

```
src/
├── api/           # API request handling
├── components/    # UI components
├── hooks/         # Custom hooks
├── redux/         # Redux and Sagas
├── styles/        # Global styles
├── tests/         # Unit and e2e tests
├── types/         # TypeScript types
└── utils/         # Utility functions
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Run tests: `npm test`
5. Run e2e tests: `npm run test:e2e`

## Testing

The application includes both unit tests and end-to-end tests:

- Unit tests using Vitest and React Testing Library
- E2E tests using Cypress

## Performance Optimizations

- Lazy loading of images
- Infinite scroll with intersection observer
- Caching of Pokemon details
- Optimized Redux state management
- Minimal API calls
