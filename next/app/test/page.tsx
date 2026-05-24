'use client';

import { useState } from 'react';

export default function ProductCard() {
  const [isLiked, setIsLiked] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="relative w-80 overflow-hidden rounded-2xl bg-white shadow-md transition-transform duration-200 hover:-translate-y-1 dark:bg-zinc-900">
      {/* Кнопка Лайка с SVG вместо Lucide */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
        aria-label={isLiked ? 'Убрать из избранного' : 'Добавить в избранное'}
      >
        <svg
          xmlns="http://w3.org"
          viewBox="0 0 24 24"
          className={`h-5 w-5 transition-all duration-200 ${
            isLiked 
              ? 'fill-red-500 stroke-red-500 scale-110' 
              : 'fill-none stroke-zinc-700 hover:stroke-zinc-900'
          }`}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
          />
        </svg>
      </button>

      {/* Изображение товара */}
      <div className="h-60 w-full bg-zinc-100">
        <img
          src="https://unsplash.com"
          alt="Беспроводные наушники"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Контентная часть */}
      <div className="p-5">
        <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
          Беспроводные наушники
        </h2>
        <div className="mt-1 text-xl font-bold text-blue-600 dark:text-blue-400">
          9 990 ₽
        </div>

        {/* Блок описания */}
        <div className="mt-3">
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              showDescription ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <p className="pb-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Премиальное качество звука, active noise cancellation и до 30 часов работы. Идеальный выбор на каждый день.
              </p>
            </div>
          </div>
          
          <button
            onClick={() => setShowDescription(!showDescription)}
            className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
          >
            {showDescription ? 'Скрыть описание' : 'Показать описание'}
          </button>
        </div>

        {/* Кнопка действия */}
        <button className="mt-4 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700 active:bg-blue-800 dark:bg-blue-500 dark:hover:bg-blue-600">
          В корзину
        </button>
      </div>
    </div>
  );
}
