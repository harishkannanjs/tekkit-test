# Tekkit

TypeScript + React codebase generated from tekkit.netlify.app

> From curious learner to confident tech creator—Tekkit’s bootcamps guide you from concept to deployment with real projects.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── common/      # Button, Input, Card, Modal, Loader
│   ├── layout/      # Header, Footer, Sidebar, Layout
│   └── user/        # User-related components
├── pages/           # Page components
├── routes/          # Routing configuration
├── services/        # API and business logic services
├── controllers/     # Request/response handlers
├── models/          # Data models and entities
├── hooks/           # Custom React hooks
├── context/         # React context providers
├── middlewares/     # Route and API middlewares
├── utils/           # Utility functions
├── types/           # TypeScript type definitions
├── constants/       # Application constants
└── styles/          # Global styles and CSS variables
```

## Features

- TypeScript for type safety
- React 18 with hooks
- React Router for navigation
- Tailwind CSS for styling
- Axios for API calls
- Vitest for testing
- ESLint + Prettier for code quality

## License

MIT
