# Spellbook Website

## Overview
The Spellbook Website is a React application that allows users to search and filter Dungeons & Dragons spells based on various attributes. Users can easily find spells by their Source, Name, Level, Classes, School, Ritual, Concentration, Casting Time, Range, Spell Attack, and Damage Type. Additionally, users can change the order of the spells displayed.

## Features
- Search and filter spells by multiple attributes.
- Sort spells based on different criteria.
- User-friendly interface for easy navigation.
- Responsive design for various devices.

## Project Structure
```
spellbook-website
├── public
│   ├── index.html          # Main HTML file
│   └── manifest.json       # PWA metadata
├── src
│   ├── components          # React components
│   │   ├── SpellList.tsx   # Displays list of spells
│   │   ├── SpellFilter.tsx  # Provides filtering options
│   │   └── SpellSorter.tsx  # Allows sorting of spells
│   ├── pages               # Application pages
│   │   └── HomePage.tsx    # Main page of the application
│   ├── services            # Services for managing spells
│   │   └── spellService.ts  # Fetching and managing spells
│   ├── types               # TypeScript types
│   │   └── index.ts        # Defines spell structure
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for the React app
│   └── styles              # CSS styles
│       └── App.css         # Styles for the application
├── package.json            # npm configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd spellbook-website
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

### Building for Production
To create a production build, run:
```
npm run build
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.