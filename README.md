<div align="center">
  <h2>
    <b>一个基于React和Three.js开发的智能3D装箱系统</b><br><br>
    <b>An Intelligent 3D Container Loading System Developed Based on React and Three.js</b>
  </h2>
</div>


<div align="center">

<a href="https://"> <img src="https://img.shields.io/badge/🚀-Live_Demo-brightgreen" alt="Live Demo"> </a>
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


## 功能特性 / Features

- 📦 **容器尺寸自定义**：灵活设置容器的长、宽、高尺寸
- **Custom Container Dimensions**: Flexibly set container length, width, and height
-
- 📐 **物品管理**：添加多个不同尺寸和数量的物品
- **Item Management**: Add multiple items with different sizes and quantities
-
- 🔄 **智能装箱算法**：基于体积优先的排序策略，优化空间利用率
- **Smart Packing Algorithm**: Volume-first sorting strategy to optimize space utilization
-
- 📊 **容积率计算**：自动计算并显示装箱后的空间利用率
- **Volume Ratio Calculation**: Automatically calculate and display space utilization after packing
-
- 🎨 **3D可视化**：实时3D预览装箱效果，支持旋转、缩放等交互操作
- **3D Visualization**: Real-time 3D preview of packing results with rotation, zoom, and other interactive operations
-
- 🌐 **国际化支持**：内置中英文切换功能
- **Internationalization Support**: Built-in Chinese-English switching capability
-
- 🎯 **直观操作**：简洁友好的用户界面，操作流畅
- **Intuitive Operation**: Clean and friendly user interface with smooth operation

## 技术栈 / Technology Stack

- **前端框架**：React 19
- **Frontend Framework**: React 19
-
- **构建工具**：Vite 7
- **Build Tool**: Vite 7
-
- **3D渲染**：Three.js、React-Three-Fiber、React-Three-Drei
- **3D Rendering**: Three.js, React-Three-Fiber, React-Three-Drei
-
- **状态管理**：React Context API
- **State Management**: React Context API
-
- **国际化**：i18next、react-i18next
- **Internationalization**: i18next, react-i18next
-
- **样式系统**：Tailwind CSS
- **Styling System**: Tailwind CSS
-
- **唯一ID生成**：UUID
- **Unique ID Generation**: UUID
-
- **代码质量**：ESLint
- **Code Quality**: ESLint

## 快速开始 / Quick Start

### 环境要求 / Environment Requirements

- Node.js 18+（推荐最新稳定版本）
- Node.js 18+ (latest stable version recommended)
-
- npm 9+ 或 yarn/pnpm
- npm 9+ or yarn/pnpm

### 安装依赖 / Installation

```bash
# 克隆项目（示例）
# Clone the project (example)
git clone <repository-url>
cd zx

# 安装依赖
# Install dependencies
npm install

# 启动开发服务器
# Start development server
npm run dev
```

打开浏览器访问 [http://localhost:5174](http://localhost:5174) 查看项目运行效果。

Open browser and visit [http://localhost:5174](http://localhost:5174) to see the project running.

## 项目结构 / Project Structure

```
zx/
├── src/
│   ├── components/         # React组件 / React Components
│   │   ├── ContainerForm.jsx     # 容器尺寸设置表单 / Container Size Form
│   │   ├── ItemForm.jsx          # 物品添加表单 / Item Addition Form
│   │   └── BoxingVisualization.jsx  # 3D装箱可视化组件 / 3D Packing Visualization Component
│   ├── context/           # 状态管理 / State Management
│   │   └── BoxingContext.jsx      # 全局状态上下文 / Global State Context
│   ├── locales/           # 国际化资源文件 / Internationalization Files
│   │   ├── en.json               # 英文翻译 / English Translation
│   │   └── zh.json               # 中文翻译 / Chinese Translation
│   ├── App.jsx            # 应用主组件 / Main Application Component
│   ├── App.css            # 应用样式 / Application Styles
│   ├── i18n.js            # 国际化配置 / Internationalization Configuration
│   └── main.jsx           # 应用入口 / Application Entry
├── public/                # 静态资源 / Static Resources
├── package.json           # 项目依赖和脚本 / Project Dependencies and Scripts
├── vite.config.js         # Vite配置 / Vite Configuration
├── tailwind.config.js     # Tailwind CSS配置 / Tailwind CSS Configuration
├── postcss.config.js      # PostCSS配置 / PostCSS Configuration
└── eslint.config.js       # ESLint配置 / ESLint Configuration
```

## 使用指南 / User Guide

### 容器设置 / Container Setup
1. 在左侧容器设置表单中输入长、宽、高尺寸
   Enter length, width, and height in the left container setup form
2. 点击"设置容器"按钮确认
   Click "Set Container" button to confirm

### 添加物品 / Adding Items
1. 在右侧物品表单中输入物品的长、宽、高尺寸和数量
   Enter item length, width, height, and quantity in the right item form
2. 点击"添加物品"按钮将物品添加到列表中
   Click "Add Item" button to add the item to the list

### 执行装箱 / Performing Packing
1. 确保已设置容器尺寸并添加了物品
   Ensure container dimensions are set and items are added
2. 点击"装箱"按钮执行装箱算法
   Click "Pack" button to execute the packing algorithm
3. 在3D视图中查看装箱效果
   View packing results in the 3D visualization

### 3D视图交互 / 3D View Interaction
- 按住鼠标左键拖动：旋转视图
  Hold left mouse button and drag: Rotate view
- 按住鼠标右键拖动：平移视图
  Hold right mouse button and drag: Pan view
- 滚轮：缩放视图
  Scroll wheel: Zoom view

### 语言切换 / Language Switching
- 点击页面右上角的语言切换按钮可以在中文和英文之间切换
  Click the language switch button at the top right corner to switch between Chinese and English

## 开发指南 / Development Guide

### 启动开发服务器 / Starting Development Server

```bash
npm run dev
```

### 构建生产版本 / Building for Production

```bash
npm run build
```

构建后的文件将位于 `dist` 目录中。

Built files will be located in the `dist` directory.

### 预览生产版本 / Previewing Production Build

```bash
npm run preview
```

### 代码检查 / Code Linting

```bash
npm run lint
```

## 国际化开发 / Internationalization Development

如果需要添加新的语言支持或修改翻译内容：

If you need to add new language support or modify translation content:

1. 在 `src/locales/` 目录下创建新的语言文件（例如 `fr.json`）
   Create a new language file (e.g., `fr.json`) in the `src/locales/` directory
2. 复制现有语言文件的结构，并翻译所有文本
   Copy the structure of existing language files and translate all text
3. 修改 `src/i18n.js` 配置文件，添加新的语言支持
   Modify the `src/i18n.js` configuration file to add new language support

## 性能优化建议 / Performance Optimization Suggestions

1. **物品数量限制**：对于大量物品，建议分批添加以保持界面响应速度
   **Item Quantity Limitation**: For a large number of items, it is recommended to add them in batches to maintain interface response speed
2. **容器尺寸比例**：避免设置过大的容器尺寸，可能会影响渲染性能
   **Container Size Ratio**: Avoid setting excessively large container sizes, as this may affect rendering performance
3. **浏览器兼容性**：建议使用最新版本的Chrome、Firefox或Safari浏览器以获得最佳体验
   **Browser Compatibility**: It is recommended to use the latest versions of Chrome, Firefox, or Safari browsers for the best experience

## 许可证 / License

MIT License

## 致谢 / Acknowledgements

感谢以下开源项目的支持：

Thanks to the following open-source projects for their support:

- [React](https://react.dev/)
- [Three.js](https://threejs.org/)
- [React-Three-Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [i18next](https://www.i18next.com/)
