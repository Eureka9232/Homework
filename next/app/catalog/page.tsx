import ProductCard from '@/components/ui/product-card';
import Image from 'next/image';


export default function CatalogPage(){
let products =[
{ id:1,name:'Dark-Blue teror', price:89990, imageSrc:'/images/product-1.png',inStock:true,about:'Это вроде что-то для нищеты',description:'йоу'},
{ id:2,name:'Drow', price:99990, imageSrc:'/images/product-2.jpg',inStock:false,about:'Недоступная Акрана на дровку',description:'йоу'},
{ id:3,name:'White teror', price:24990, imageSrc:'/images/product-3.jpg',inStock:true,about:'Молочко'},
{ id:4,name:'Green teror', price:55990, imageSrc:'/images/product-4.jpg',inStock:true,about:'Мягкий зеленый',description:'йоу'},
{ id:5,name:'Blue teror', price:34990, imageSrc:'/images/product-5.jpg',inStock:true,about:'Голубой гем для аркаты террорблейд',description:'йоу'},
{ id:6,name:'Toxic teror', price:27990, imageSrc:'/images/product-6.jpg',inStock:true,about:'Токсично зеленый гем террорблейд',description:'йоу'},
{ id:7,name:'Razor Arcane', price:2984562, imageSrc:'/images/RazorArcane.jpg',inStock:false,about:'Акрана которую никогда не получит Влад',description:'йоу'}
];

return(
<div className="container mx-auto p-8 flex flex-col justify-center items-center">
<h1 className="text-3xl font-bold mb-8 text-center">Каталог товаров</h1>

<div className="grid grid-cols-3 gap-6">
{products.map((prod) => (
<ProductCard
key={prod.id} 
name={prod.name}
price={prod.price}
imageSrc={prod.imageSrc}
inStock={prod.inStock}
about={prod.about}
description={prod.description}
/>
))}
</div>
</div>
);
}

