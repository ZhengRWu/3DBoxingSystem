import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContainerForm({ onSetDimensions }) {
  const { t } = useTranslation();
  const [dimensions, setDimensions] = useState({ 
    length: '',
    width: '',
    height: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 验证输入值，如果为空则设为0
    const length = dimensions.length === '' ? 0 : +dimensions.length;
    const width = dimensions.width === '' ? 0 : +dimensions.width;
    const height = dimensions.height === '' ? 0 : +dimensions.height;
    
    // 检查是否所有值都大于0
    if (length <= 0 || width <= 0 || height <= 0) {
      alert(t('containerForm.validationError'));
      return;
    }
    
    onSetDimensions({ length, width, height });
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-md">
      <h2 className="text-lg font-semibold mb-4">{t('containerForm.title')}</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-medium">{t('containerForm.length')}</label>
          <input
            type="number"
            value={dimensions.length}
            onChange={(e) => setDimensions({...dimensions, length: e.target.value})}
            className="mt-1 block w-full rounded-md border p-2"
            placeholder={t('containerForm.length')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">{t('containerForm.width')}</label>
          <input
            type="number"
            value={dimensions.width}
            onChange={(e) => setDimensions({...dimensions, width: e.target.value})}
            className="mt-1 block w-full rounded-md border p-2"
            placeholder={t('containerForm.width')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">{t('containerForm.height')}</label>
          <input
            type="number"
            value={dimensions.height}
            onChange={(e) => setDimensions({...dimensions, height: e.target.value})}
            className="mt-1 block w-full rounded-md border p-2"
            placeholder={t('containerForm.height')}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          {t('containerForm.setButton')}
        </button>
      </form>
    </div>
  );
}