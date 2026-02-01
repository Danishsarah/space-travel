# Space Travel

## Overview

Space Travel is an interactive web application that allows users to explore planets and design custom spacecraft. Built with modern web technologies, this project demonstrates real-time UI updates, component-based architecture, and API integration patterns.

## Features

- **Planet Explorer**: Browse and view detailed information about planets in our solar system
- **Spacecraft Construction**: Design and customize your own spacecraft with various components
- **Spacecraft Details**: View specifications and details of constructed spacecraft
- **Responsive UI**: Modern, intuitive interface built with React and Vite

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: v18.0.0 or higher ([Download](https://nodejs.org/))
- **npm**: v9.0.0 or higher (comes with Node.js)
- **Git**: v2.0.0 or higher ([Download](https://git-scm.com/))

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Danishsarah/space-travel.git
   cd space-travel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm test` - Run the test suite
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check formatting with Prettier

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Testing**: Jest
- **Linting/Formatting**: ESLint, Prettier
- **State Management**: React Hooks

## Tooling & Config

- **Lint config**: [.eslintrc.cjs](.eslintrc.cjs)
- **Format config**: [.prettierrc.json](.prettierrc.json)
- **Format ignore**: [.prettierignore](.prettierignore)
- **Jest config**: [jest.config.cjs](jest.config.cjs)
- **Jest setup**: [setupTests.js](setupTests.js)

## CI

GitHub Actions runs lint, test, and build on push/PR to `main`: [.github/workflows/ci.yml](.github/workflows/ci.yml)

## Project Structure

```
src/
├── App.jsx
├── App.module.css
├── App.test.jsx
├── Planets.jsx
├── Planets.test.jsx
├── Spacecraft.jsx
├── Spacecraft.test.jsx
├── SpacecraftConstruction.jsx
├── SpacecraftConstruction.css
├── SpacecraftConstruction.test.jsx
├── SpacecraftDetail.jsx
├── SpacecraftDetail.test.jsx
├── index.css
├── main.jsx
├── navbar.jsx
├── navbar.js
├── navbar.css
├── navbar.test.jsx
├── planets.css
├── spacecraft.css
├── services/
│   ├── SpaceTravelApi.js
│   └── SpaceTravelMockApi.js
```

## Data & APIs

The app currently uses an in-memory mock data source for planets and spacecraft. The API surface lives in [src/services/SpaceTravelApi.js](src/services/SpaceTravelApi.js) and delegates to [src/services/SpaceTravelMockApi.js](src/services/SpaceTravelMockApi.js).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
