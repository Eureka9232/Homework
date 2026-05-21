import ProductCard from '@/components/ui/product-card';
import Image from 'next/image';


export default function CatalogPage(){
let products =[
{ name:'Dark-Blue teror', price:89990, imageSrc:'/images/product-1.png',inStock:true},
{ name:'Drow', price:99990, imageSrc:'/images/product-2.jpg',inStock:false},
{ name:'White teror', price:24990, imageSrc:'/images/product-3.jpg',inStock:true},
{ name:'Green teror', price:55990, imageSrc:'/images/product-4.jpg',inStock:true},
{ name:'Blue teror', price:34990, imageSrc:'/images/product-5.jpg',inStock:true},
{ name:'Toxic teror', price:27990, imageSrc:'/images/product-6.jpg',inStock:false}
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
/>
))}
</div>
</div>
);
}

