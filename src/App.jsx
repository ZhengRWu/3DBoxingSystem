import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useTranslation } from 'react-i18next';
import ContainerForm from './components/ContainerForm';
import ItemForm from './components/ItemForm';
import BoxingVisualization from './components/BoxingVisualization';
import BoxingContext from './context/BoxingContext';

export default function App() {
  const { t, i18n } = useTranslation();
  const [container, setContainer] = useState(null);
  const [items, setItems] = useState([]);

  // 切换语言函数
  const toggleLanguage = () => {
    const newLang = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(newLang);
    // 同时更新HTML的lang属性
    document.documentElement.lang = newLang;
    // 更新页面标题
    document.title = newLang === 'zh' ? '3D装箱系统' : '3D Boxing System';
  };

  const handlePack = () => {
    if (!container) {
      alert(i18n.language === 'zh' ? "请先设置容器尺寸" : "Please set container dimensions first");
      return;
    }

    // 实现装箱算法
    // 物品实例已经在添加时生成，直接使用items数组
    const expandedItems = [...items];

    // 改进的排序策略：体积优先，其次考虑最长边
const sortedItems = [...expandedItems].sort((a, b) => {
  const volumeDiff = b.length*b.width*b.height - a.length*a.width*a.height;
  if (volumeDiff !== 0) return volumeDiff;
  return Math.max(b.length, b.width, b.height) - Math.max(a.length, a.width, a.height);
});

    // 初始化所有物品为未放置状态
    // const resetItems = items.map(item => ({
    //   ...item,
    //   position: [0, 0, 0],
    //   placed: false
    // }));

    let packedItems = [];
    // 空间管理队列（优先使用最小空间）
let spaceQueue = [{
  x: 0, 
  y: 0, 
  z: 0, 
  length: container.length, 
  width: container.width, 
  height: container.height
}];

// 空间合并函数
const mergeSpaces = (spaces) => {
  return spaces.reduce((merged, current) => {
    const existing = merged.find(s => 
      s.x === current.x && s.y === current.y && s.z === current.z &&
      (s.length === current.length || s.width === current.width || s.height === current.height)
    );
    return existing ? merged : [...merged, current];
  }, []);
};

    sortedItems.forEach(item => {
      let placed = false;
      
      // 尝试不同旋转组合
      const rotations = [
        { l: item.length, w: item.width, h: item.height },
        { l: item.width, w: item.length, h: item.height },
        { l: item.height, w: item.width, h: item.length },
        { l: item.length, w: item.height, h: item.width },
        { l: item.width, w: item.height, h: item.length },
        { l: item.height, w: item.length, h: item.width }
      ];

      // 遍历所有可用空间
      // 优化空间选择策略：优先选择最小可用空间
spaceQueue.sort((a, b) => (a.length*a.width*a.height) - (b.length*b.width*b.height));

for(let i = 0; i < spaceQueue.length && !placed; i++) {
  let sp = spaceQueue[i];
        
        // 尝试所有旋转
        for(let r = 0; r < rotations.length && !placed; r++) {
          let rot = rotations[r];
          
          // 检查是否能放入当前空间
          if(rot.l <= sp.length && rot.w <= sp.width && rot.h <= sp.height) {
            // 记录物品位置
            packedItems.push({
              ...item,
              position: [sp.x, sp.y, sp.z],
              dimensions: [rot.l, rot.w, rot.h],
              placed: true
            });
            
            // 更新空间分割
            const newSpaces = [];
            
            // X方向剩余空间
            if(sp.length > rot.l) {
              newSpaces.push({
                x: sp.x + rot.l,
                y: sp.y,
                z: sp.z,
                length: sp.length - rot.l,
                width: rot.w,
                height: rot.h
              });
            }
            
            // Y方向剩余空间
            if(sp.width > rot.w) {
              newSpaces.push({
                x: sp.x,
                y: sp.y + rot.w,
                z: sp.z,
                length: sp.length,
                width: sp.width - rot.w,
                height: rot.h
              });
            }
            
            // Z方向剩余空间
            if(sp.height > rot.h) {
              newSpaces.push({
                x: sp.x,
                y: sp.y,
                z: sp.z + rot.h,
                length: sp.length,
                width: sp.width,
                height: sp.height - rot.h
              });
            }
            
            // 移除已使用的空间并添加新空间
            // 更新空间队列并合并相邻空间
spaceQueue.splice(i, 1);
spaceQueue = mergeSpaces([...spaceQueue, ...newSpaces]);
            
            placed = true;
            break;
          }
        }
      }
      
      // 如果未放置，保持原始状态
      if (!placed) {
  // 尝试压缩已放置物品后的剩余空间
  const compressedSpace = spaceQueue.find(s => 
    s.length >= item.length &&
    s.width >= item.width &&
    s.height >= item.height
  );
  
  if (compressedSpace) {
    packedItems.push({
      ...item,
      position: [compressedSpace.x, compressedSpace.y, compressedSpace.z],
      dimensions: [item.length, item.width, item.height],
      placed: true
    });
    // 更新空间队列...
  } else {
    packedItems.push({
      ...item,
      position: [0, 0, 0],
      dimensions: [item.length, item.width, item.height],
      placed: false
    });
  }
}
    });

    setItems(packedItems);
  };

  return (
    <BoxingContext.Provider value={{ container, items }}>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-center text-indigo-700">{t('title')}</h1>
            <button 
              onClick={toggleLanguage}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              {i18n.language === 'zh' ? 'English' : '中文'}
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-6 lg:col-span-1">
              <ContainerForm onSetDimensions={setContainer} />
              <ItemForm onAddItem={(newItem) => {
                // 根据数量生成多个物品实例
                const newItems = [];
                const quantity = newItem.quantity || 1;
                for (let i = 0; i < quantity; i++) {
                  newItems.push({
                    ...newItem,
                    id: `${newItem.id}-${i}`, // 为每个实例创建唯一ID
                    originalId: newItem.id, // 保留原始ID用于追踪
                    instanceIndex: i // 记录实例索引
                  });
                }
                setItems([...items, ...newItems]);
              }} 
              />
              
              <div className="flex flex-col space-y-4">
                <button
                  onClick={handlePack}
                  className="w-full bg-indigo-600 text-white p-3 rounded-lg
                    hover:bg-indigo-700 transition-colors font-medium"
                >
                  {t('actions.pack')}
                </button>
                
                <button
                  onClick={() => {
                    setItems([]);
                    setContainer(null);
                  }}
                  className="w-full bg-gray-500 text-white p-3 rounded-lg
                    hover:bg-gray-600 transition-colors font-medium"
                >
                  {t('actions.reset')}
                </button>
              </div>
              
              {/* 物品列表 */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-3">{t('itemList.title')}</h2>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {items.length === 0 ? (
                    <p className="text-gray-500 text-sm">{t('itemList.noItems')}</p>
                  ) : (
                    // 合并显示相同物品的多个实例
                    (() => {
                      // 按原始ID分组物品
                      const groupedItems = {};
                      items.forEach(item => {
                        const originalId = item.originalId || item.id;
                        if (!groupedItems[originalId]) {
                          groupedItems[originalId] = {
                            ...item,
                            count: 0,
                            placedCount: 0
                          };
                        }
                        groupedItems[originalId].count += 1;
                        if (item.placed) {
                          groupedItems[originalId].placedCount += 1;
                        }
                      });

                      return Object.values(groupedItems).map((item, index) => (
                        <div 
                          key={item.originalId || item.id} 
                          className={`flex justify-between items-center p-2 rounded ${
                            item.placedCount === item.count ? 'bg-green-100' : 
                            item.placedCount > 0 ? 'bg-yellow-100' : 'bg-red-100'
                          }`}
                        >
                          <span>物品 {index + 1}</span>
                          <span>{item.length}×{item.width}×{item.height} ×{item.count}</span>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded text-xs ${
                              item.placedCount === item.count ? 'bg-green-500 text-white' : 
                              item.placedCount > 0 ? 'bg-yellow-500 text-white' : 'bg-red-500 text-white'
                            }`}>
                              {item.placedCount}/{item.count} 已放置
                            </span>
                            <button
                              onClick={() => {
                                // 删除具有相同原始ID的所有实例
                                const newItems = items.filter(
                                  i => (i.originalId || i.id) !== (item.originalId || item.id)
                                );
                                setItems(newItems);
                              }}
                              className="text-red-500 hover:text-red-700 font-bold"
                            >
                              ×
                            </button>
                          </div>
                        </div>
                      ));
                    })()
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="text-lg font-semibold mb-3">{t('visualization.title')}</h2>
                <div className="h-96 bg-gray-50 rounded-lg overflow-hidden">
                  <Canvas camera={{ position: [20, 20, 20], fov: 50 }}>
                    <BoxingVisualization />
                  </Canvas>
                </div>
                <div className="mt-3 text-sm text-gray-600">
                  <p>{t('visualization.instructions')}</p>
                </div>
              </div>
              
              {/* 统计信息 */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="bg-indigo-100 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-indigo-700">
                    {container ? `${container.length}×${container.width}×${container.height}` : t('stats.notSet')}
                  </div>
                  <div className="text-sm text-indigo-600">{t('stats.containerSize')}</div>
                </div>
                <div className="bg-green-100 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-700">
                    {(() => {
                      // 计算已放置的物品总数（考虑数量）
                      let placedCount = 0;
                      items.forEach(item => {
                        if (item.placed) {
                          placedCount += 1;
                        }
                      });
                      return placedCount;
                    })()}
                  </div>
                  <div className="text-sm text-green-600">{t('stats.placedItems')}</div>
                </div>
                <div className="bg-red-100 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-red-700">
                    {(() => {
                      // 计算未放置的物品总数（考虑数量）
                      let unplacedCount = 0;
                      items.forEach(item => {
                        if (!item.placed) {
                          unplacedCount += 1;
                        }
                      });
                      return unplacedCount;
                    })()}
                  </div>
                  <div className="text-sm text-red-600">{t('stats.unplacedItems')}</div>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-yellow-700">
                    {(() => {
                      // 计算容积率
                      if (!container || items.length === 0) return '0%';
                      
                      // 计算容器体积
                      const containerVolume = container.length * container.width * container.height;
                      
                      // 计算已放置物品的总体积
                      let placedVolume = 0;
                      items.forEach(item => {
                        if (item.placed) {
                          const dimensions = item.dimensions || [item.length, item.width, item.height];
                          placedVolume += dimensions[0] * dimensions[1] * dimensions[2];
                        }
                      });
                      
                      // 计算容积率并保留两位小数
                      const volumeRatio = (placedVolume / containerVolume) * 100;
                      return `${volumeRatio.toFixed(2)}%`;
                    })()}
                  </div>
                  <div className="text-sm text-yellow-600">{t('stats.volumeRatio')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BoxingContext.Provider>
  );
}
