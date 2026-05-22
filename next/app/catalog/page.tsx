import ProductCard from '@/components/ui/product-card';
import Image from 'next/image';


export default function CatalogPage(){
let products =[
{ name:'Dark-Blue teror', price:89990, imageSrc:'/images/product-1.png',inStock:true,about:'Это вроде что-то для нищеты'},
{ name:'Drow', price:99990, imageSrc:'/images/product-2.jpg',inStock:false,about:'Недоступная Акрана на дровку'},
{ name:'White teror', price:24990, imageSrc:'/images/product-3.jpg',inStock:true,about:'Молочко'},
{ name:'Green teror', price:55990, imageSrc:'/images/product-4.jpg',inStock:true,about:'Мятный тип !не подходить!'},
{ name:'Blue teror', price:34990, imageSrc:'/images/product-5.jpg',inStock:true,about:'Голубой как ореитация Степы'},
{ name:'Toxic teror', price:27990, imageSrc:'/images/product-6.jpg',inStock:true,about:'Токсинно зеленный гем террорблейд'},
{ name:'Razor Arcane', price:2984562, imageSrc:'/images/RazorArcane.jpg',inStock:false,about:'Акрана которую никогла не получит Влад'}
];

return(
<div className="container mx-auto p-8">
<h1 className="text-3xl font-bold mb-8 text-center">Каталог товаров</h1>

<div className="grid grid-cols-3 gap-6">
{products.map((prod) => (
<ProductCard
name={prod.name}
price={prod.price}
imageSrc={prod.imageSrc}
inStock={prod.inStock}
about={prod.about}
/>
))}
</div>
</div>
);
}

