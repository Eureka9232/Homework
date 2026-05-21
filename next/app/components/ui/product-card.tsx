import Image from 'next/image';

export default function ProductCard() {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-md overflow-hidden">
      {/* Контейнер для картинки с fill (обязательно relative) */}
      <div className="relative h-64 w-full">
        <Image
          src="/images/product-1"
          alt="Product Image"
          fill
          className="object-cover" // Чтобы картинка не деформировалась
        />
      </div>

      {/* Текстовая часть */}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Стильные часы
        </h5>
        <p className="mb-3 font-normal text-gray-700">
          Универсальный аксессуар для повседневной жизни. Высокое качество и надежность.
        </p>
        <span className="text-xl font-bold text-blue-600">
          97 840 ₽
        </span>
      </div>
    </div>
  );
}
