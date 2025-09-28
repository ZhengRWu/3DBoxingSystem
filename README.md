[中文](README_CN.md) | [EN](README.md)

<div align="center">
  <h2>
    <b>An Intelligent 3D Container Loading System Developed Based on React and Three.js</b>
  </h2>
</div>

<div align="center">

<a href="https://zhengrwu.github.io/"> <img src="https://img.shields.io/badge/🚀-Live_Demo-brightgreen" alt="Live Demo"> </a>
<a href="https://github.com/ZhengRWu/3DBoxingSystem/graphs/commit-activity"> 
<img src="https://img.shields.io/github/last-commit/ZhengRWu/3DBoxingSystem?color=blue" alt="Last Commit"> 
</a> 
<a href="https://github.com/ZhengRWu/3DBoxingSystem/stargazers"> 
<img src="https://img.shields.io/github/stars/ZhengRWu/3DBoxingSystem?color=lightblue" alt="GitHub Stars"> 
</a> 
<a href="https://github.com/ZhengRWu/3DBoxingSystem/network/members"> 
<img src="https://img.shields.io/github/forks/ZhengRWu/3DBoxingSystem?color=yellow" alt="GitHub Forks"> 
</a> 
<a href="./LICENSE"> 
<img src="https://img.shields.io/github/license/shiyu-coder/Kronos?color=green" alt="License"> 
</a>

</div>

<p align="center">

<img src="./logo.png" width="200">

</p>

## Features

- 📦 **Custom Container Dimensions**: Flexibly set container length, width, and height
- 📐 **Item Management**: Add multiple items with different sizes and quantities
- 🔄 **Smart Packing Algorithm**: Volume-first sorting strategy to optimize space utilization
- 📊 **Volume Ratio Calculation**: Automatically calculate and display space utilization after packing
- 🎨 **3D Visualization**: Real-time 3D preview of packing results with rotation, zoom, and other interactive operations
- 🌐 **Internationalization Support**: Built-in Chinese-English switching capability
- 🎯 **Intuitive Operation**: Clean and friendly user interface with smooth operation

## Technology Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **3D Rendering**: Three.js, React-Three-Fiber, React-Three-Drei
- **State Management**: React Context API
- **Internationalization**: i18next, react-i18next
- **Styling System**: Tailwind CSS
- **Unique ID Generation**: UUID
- **Code Quality**: ESLint

## Quick Start

### Environment Requirements

- Node.js 18+ (latest stable version recommended)
- npm 9+ or yarn/pnpm

### Installation

```bash
# Clone the project (example)
git clone <repository-url>
cd zx

# Install dependencies
npm install

# Start development server
npm run dev
```

Open browser and visit [http://localhost:5174](http://localhost:5174) to see the project running.

## Project Structure

```
zx/
├── src/
│   ├── components/         # React Components
│   │   ├── ContainerForm.jsx     # Container Size Form
│   │   ├── ItemForm.jsx          # Item Addition Form
│   │   └── BoxingVisualization.jsx  # 3D Packing Visualization Component
│   ├── context/           # State Management
│   │   └── BoxingContext.jsx      # Global State Context
│   ├── locales/           # Internationalization Files
│   │   ├── en.json               # English Translation
│   │   └── zh.json               # Chinese Translation
│   ├── App.jsx            # Main Application Component
│   ├── App.css            # Application Styles
│   ├── i18n.js            # Internationalization Configuration
│   └── main.jsx           # Application Entry
├── public/                # Static Resources
├── package.json           # Project Dependencies and Scripts
├── vite.config.js         # Vite Configuration
├── tailwind.config.js     # Tailwind CSS Configuration
├── postcss.config.js      # PostCSS Configuration
└── eslint.config.js       # ESLint Configuration
```

## User Guide

### Container Setup
1. Enter length, width, and height in the left container setup form
2. Click "Set Container" button to confirm

### Adding Items
1. Enter item length, width, height, and quantity in the right item form
2. Click "Add Item" button to add the item to the list

### Performing Packing
1. Ensure container dimensions are set and items are added
2. Click "Pack" button to execute the packing algorithm
3. View packing results in the 3D visualization

### 3D View Interaction
- Hold left mouse button and drag: Rotate view
- Hold right mouse button and drag: Pan view
- Scroll wheel: Zoom view

### Language Switching
- Click the language switch button at the top right corner to switch between Chinese and English

## Development Guide

### Starting Development Server

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

Built files will be located in the `dist` directory.

### Previewing Production Build

```bash
npm run preview
```

### Code Linting

```bash
npm run lint
```

## Internationalization Development

If you need to add new language support or modify translation content:

1. Create a new language file (e.g., `fr.json`) in the `src/locales/` directory
2. Copy the structure of existing language files and translate all text
3. Modify the `src/i18n.js` configuration file to add new language support

## Performance Optimization Suggestions

1. **Item Quantity Limitation**: For a large number of items, it is recommended to add them in batches to maintain interface response speed
2. **Container Size Ratio**: Avoid setting excessively large container sizes, as this may affect rendering performance
3. **Browser Compatibility**: It is recommended to use the latest versions of Chrome, Firefox, or Safari browsers for the best experience

## License

MIT License

## Acknowledgements

Thanks to the following open-source projects for their support:

- [React](https://react.dev/)
- [Three.js](https://threejs.org/)
- [React-Three-Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [i18next](https://www.i18next.com/)
