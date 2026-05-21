import Link from'next/link';

export default function DesktopFirst ()  {
  return (
    <header className="w-full  border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">Логотип</div>

      <nav className="flex gap-8 md:gap-4 sm:hidden">
        <Link href="/"className="hover:underline">Главная</Link>
        <Link href="/about"className="/about">Онас</Link>
        <Link href="/blog/first-post"className="/blog/first-post">Блог</Link>
        <Link href="/catalog"className="/catalog">Каталог</Link>
        <Link href="/contacts"className="hover:underline">Контакты</Link>
      </nav>

      <button className="hidden text-2xl sm:block focus:outline-none">
        ☰
      </button>
    </header>
  );
};