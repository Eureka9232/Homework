import React, { useState } from 'react';



export default function ProductButton({inStock=true}) {

  const [num, setNum] = useState(0);

  const Plus = () => {
    setNum(prev => prev + 1);
  };

  const Minus = () => {
    setNum(prev => (prev > 0 ? prev - 1 : 0));
  };

  if (num === 0) {
    return (
      <button
        className={`mt-2 px-4 py-2 rounded w-full text-center transition-colors ${
        inStock
        ?'bg-blue-500 text-white hover:bg-blue-600'
        :'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`} 
        disabled={!inStock}
        onClick={Plus}
      >
        Добавить в корзину
      </button>
    );
  }


  return (
    <div className="mt-2 flex items-center justify-between bg-blue-500 text-white rounded w-full overflow-hidden">
      <button 
        onClick={Minus}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 font-bold transition-colors"
      >
        −
      </button>
      
      <span className="font-semibold select-none">
        {num}
      </span>
      
      <button 
        onClick={Plus}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 font-bold transition-colors"
      >
        +
      </button>
    </div>
  );
}
