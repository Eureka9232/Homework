import Link from'next/link';

export default function MainHeader(){
return(
<header className="bg-gray-800 text-white p-4 flex items-center justify-center">
<nav className="container  flex space-x-4  justify-center">
<Link href="/"className="hover:underline">Главная</Link>
<Link href="/about"className="/about">Онас</Link>
<Link href="/blog/first-post"className="/blog/first-post">Блог</Link>
<Link href="/catalog"className="/catalog">Каталог</Link>
<Link href="/contacts"className="hover:underline">Контакты</Link>
<Link href="/Adaptiv"className="">Адаптив</Link>
<Link href="/styleCSS"className="">tailwindcss</Link>
<Link href="/test"className="">test</Link>
</nav>
</header>
);
}
