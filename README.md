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

- **Node.js**: v14.0.0 or higher ([Download](https://nodejs.org/))
- **npm**: v6.0.0 or higher (comes with Node.js)
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

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Testing**: Jest
- **State Management**: React Hooks

## Project Structure

```
src/
├── components/
│   ├── Planets.jsx
│   ├── Spacecraft.jsx
│   ├── SpacecraftConstruction.jsx
│   └── SpacecraftDetail.jsx
├── services/
│   ├── SpaceTravelApi.js
│   └── SpaceTravelMockApi.js
├── App.jsx
└── main.jsx
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
