import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

export default function ItemForm({ onAddItem }) {
  const { t } = useTranslation();
  const [item, setItem] = useState({
    length: '',
    width: '',
    height: '',
    quantity: 1
  });
  
  const lengthInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 验证输入值，如果为空则设为0
    const length = item.length === '' ? 0 : +item.length;
    const width = item.width === '' ? 0 : +item.width;
    const height = item.height === '' ? 0 : +item.height;
    const quantity = item.quantity === '' ? 1 : +item.quantity;
    
    // 检查是否所有值都大于0
    if (length <= 0 || width <= 0 || height <= 0) {
      alert(t('itemForm.validationErrorDimensions'));
      return;
    }
    
    if (quantity <= 0) {
      alert(t('itemForm.validationErrorQuantity'));
      return;
    }
    
    onAddItem({
      length,
      width,
      height,
      quantity,
      id: uuidv4(),
      position: [0, 0, 0],
      placed: false
    });
    
    // 修复：确保重置所有字段，保持受控组件状态一致
    setItem({ length: '', width: '', height: '', quantity: 1 });
    
    // 设置焦点到长度输入框
    if (lengthInputRef.current) {
      lengthInputRef.current.focus();
    }
  };

  // 组件挂载时设置焦点到长度输入框
  useEffect(() => {
    if (lengthInputRef.current) {
      lengthInputRef.current.focus();
    }
  }, []);

  return (
    <div className="p-4 border rounded-lg bg-white shadow-md mt-4">
      <h2 className="text-lg font-semibold mb-4">{t('itemForm.title')}</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium">{t('itemForm.length')}</label>
            <input
              ref={lengthInputRef}
              type="number"
              min="1"
              value={item.length}
              onChange={(e) => setItem({...item, length: e.target.value})}
              className="mt-1 block w-full rounded-md border p-2"
              placeholder={t('itemForm.length')}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">{t('itemForm.width')}</label>
            <input
              type="number"
              min="1"
              value={item.width}
              onChange={(e) => setItem({...item, width: e.target.value})}
              className="mt-1 block w-full rounded-md border p-2"
              placeholder={t('itemForm.width')}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">{t('itemForm.height')}</label>
            <input
              type="number"
              min="1"
              value={item.height}
              onChange={(e) => setItem({...item, height: e.target.value})}
              className="mt-1 block w-full rounded-md border p-2"
              placeholder={t('itemForm.height')}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">{t('itemForm.quantity')}</label>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => setItem({...item, quantity: e.target.value})}
              className="mt-1 block w-full rounded-md border p-2"
              placeholder={t('itemForm.quantity')}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
        >
          {t('itemForm.addButton')}
        </button>
      </form>
    </div>
  );
}