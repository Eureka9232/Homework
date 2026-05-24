'use client';

import React, { useState } from 'react';

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      onClick={() => setIsLiked(!isLiked)}
      className="group  flex h-10 w-10 items-center justify-center bg-transparent transition-transform duration-200 active:scale-90"
      aria-label={isLiked ? 'Убрать из избранного' : 'Добавить в избранное'}
    >
      <svg
        xmlns="http://w3.org"
        viewBox="0 0 24 24"
        className={`h-6 w-6 transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
          isLiked
            ? 'scale-110 fill-blue-500 stroke-blue-500 drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]'
            : 'fill-transparent stroke-zinc-400 group-hover:scale-105 group-hover:stroke-blue-500'
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
  );
}
