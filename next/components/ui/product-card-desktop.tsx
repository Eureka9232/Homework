

export default function ProductCardDesktop() {
  return (
    <div className="flex flex-row w-[400px] border border-gray-200 rounded-lg p-4 shadow-sm md:flex-col md:w-[300px] sm:w-full">
        
      <div className="w-32 h-32 bg-gray-100 rounded-md shrink-0 md:w-full md:h-40" />
      <div className="flex flex-col justify-between pl-4 md:pl-0 md:pt-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Название товара</h3>
          <p className="mt-1 text-sm text-gray-500 md:text-xs sm:hidden">
            Прекрасный выбор для повседневного использования. Высокое качество и надежность.
          </p>
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-auto sm:w-full">
          Купить
        </button>
      </div>
    </div>
  );
};
