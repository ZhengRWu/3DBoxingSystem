[中文](README_CN.md) | [EN](README.md)

<div align="center">
  <h2>
    <b>一个基于React和Three.js开发的智能3D装箱系统</b>
  </h2>
</div>

<div align="center">

<a href="https://zhengrwu.github.io/"> <img src="https://img.shields.io/badge/🚀-在线演示-brightgreen" alt="在线演示"> </a>
<a href="https://github.com/ZhengRWu/3DBoxingSystem/graphs/commit-activity"> 
<img src="https://img.shields.io/github/last-commit/ZhengRWu/3DBoxingSystem?color=blue" alt="最后提交"> 
</a> 
<a href="https://github.com/ZhengRWu/3DBoxingSystem/stargazers"> 
<img src="https://img.shields.io/github/stars/ZhengRWu/3DBoxingSystem?color=lightblue" alt="GitHub星标"> 
</a> 
<a href="https://github.com/ZhengRWu/3DBoxingSystem/network/members"> 
<img src="https://img.shields.io/github/forks/ZhengRWu/3DBoxingSystem?color=yellow" alt="GitHub分支"> 
</a> 
<a href="./LICENSE"> 
<img src="https://img.shields.io/github/license/shiyu-coder/Kronos?color=green" alt="许可证"> 
</a>

</div>

<p align="center">

<img src="./logo.png" width="200">

</p>

## 功能特性

- 📦 **容器尺寸自定义**：灵活设置容器的长、宽、高尺寸
- 📐 **物品管理**：添加多个不同尺寸和数量的物品
- 🔄 **智能装箱算法**：基于体积优先的排序策略，优化空间利用率
- 📊 **容积率计算**：自动计算并显示装箱后的空间利用率
- 🎨 **3D可视化**：实时3D预览装箱效果，支持旋转、缩放等交互操作
- 🌐 **国际化支持**：内置中英文切换功能
- 🎯 **直观操作**：简洁友好的用户界面，操作流畅

## 技术栈

- **前端框架**：React 19
- **构建工具**：Vite 7
- **3D渲染**：Three.js、React-Three-Fiber、React-Three-Drei
- **状态管理**：React Context API
- **国际化**：i18next、react-i18next
- **样式系统**：Tailwind CSS
- **唯一ID生成**：UUID
- **代码质量**：ESLint

## 快速开始

### 环境要求

- Node.js 18+（推荐最新稳定版本）
- npm 9+ 或 yarn/pnpm

### 安装依赖

```bash
# 克隆项目（示例）
git clone <repository-url>
cd zx

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

打开浏览器访问 [http://localhost:5174](http://localhost:5174) 查看项目运行效果。

## 项目结构

```
zx/
├── src/
│   ├── components/         # React组件
│   │   ├── ContainerForm.jsx     # 容器尺寸设置表单
│   │   ├── ItemForm.jsx          # 物品添加表单
│   │   └── BoxingVisualization.jsx  # 3D装箱可视化组件
│   ├── context/           # 状态管理
│   │   └── BoxingContext.jsx      # 全局状态上下文
│   ├── locales/           # 国际化资源文件
│   │   ├── en.json               # 英文翻译
│   │   └── zh.json               # 中文翻译
│   ├── App.jsx            # 应用主组件
│   ├── App.css            # 应用样式
│   ├── i18n.js            # 国际化配置
│   └── main.jsx           # 应用入口
├── public/                # 静态资源
├── package.json           # 项目依赖和脚本
├── vite.config.js         # Vite配置
├── tailwind.config.js     # Tailwind CSS配置
├── postcss.config.js      # PostCSS配置
└── eslint.config.js       # ESLint配置
```

## 使用指南

### 容器设置
1. 在左侧容器设置表单中输入长、宽、高尺寸
2. 点击"设置容器"按钮确认

### 添加物品
1. 在右侧物品表单中输入物品的长、宽、高尺寸和数量
2. 点击"添加物品"按钮将物品添加到列表中

### 执行装箱
1. 确保已设置容器尺寸并添加了物品
2. 点击"装箱"按钮执行装箱算法
3. 在3D视图中查看装箱效果

### 3D视图交互
- 按住鼠标左键拖动：旋转视图
- 按住鼠标右键拖动：平移视图
- 滚轮：缩放视图

### 语言切换
- 点击页面右上角的语言切换按钮可以在中文和英文之间切换

## 开发指南

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

构建后的文件将位于 `dist` 目录中。

### 预览生产版本

```bash
npm run preview
```

### 代码检查

```bash
npm run lint
```

## 国际化开发

如果需要添加新的语言支持或修改翻译内容：

1. 在 `src/locales/` 目录下创建新的语言文件（例如 `fr.json`）
2. 复制现有语言文件的结构，并翻译所有文本
3. 修改 `src/i18n.js` 配置文件，添加新的语言支持

## 性能优化建议

1. **物品数量限制**：对于大量物品，建议分批添加以保持界面响应速度
2. **容器尺寸比例**：避免设置过大的容器尺寸，可能会影响渲染性能
3. **浏览器兼容性**：建议使用最新版本的Chrome、Firefox或Safari浏览器以获得最佳体验

## 许可证

MIT License

## 致谢

感谢以下开源项目的支持：

- [React](https://react.dev/)
- [Three.js](https://threejs.org/)
- [React-Three-Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [i18next](https://www.i18next.com/)