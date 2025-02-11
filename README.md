# Spellbook Website

## Overview
A spellbook website for searching and filtering D&D spells.

## Features
- Display a list of spells with detailed information.
- Filter spells by name, school, and classes. #WIP
- Sort spells by different criteria. #WIP
- Pagination with selectable entries per page.

## Project Structure
```
spellbook-website/
├── public/
├── src/
│   ├── components/
│   │   ├── SpellFilter.tsx
│   │   ├── SpellList.tsx
│   │   ├── SpellSorter.tsx
│   ├── data/
│   │   ├── spells.ts
│   ├── pages/
│   │   ├── HomePage.tsx
│   ├── services/
│   │   ├── spellService.ts
│   ├── types/
│   │   ├── Spell.ts
│   ├── App.tsx
│   ├── index.tsx
├── package.json
├── README.md
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/pwccaa/spellbook-website.git
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
Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License
This project is licensed under the MIT License.