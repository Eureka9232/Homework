'use client';

import ProductButton from './cartprod';
import LikeButton from './heartBlue';
import Image from 'next/image';
import product from '@/public/images/product-1.png'
import{ useState }from'react';

type ProductCardProps ={
  name:string;
  about:string;
  price:number;
  imageSrc:string;
  inStock?:boolean;
  description?: string;
};



export default function ProductCard({ name, price, imageSrc,inStock=true,about,description}:ProductCardProps) {
  const[isLiked,setIsLiked]=useState (false);
  const[isDescriptionVisible,setIsDescriptionVisible]=useState (false);

  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-white">
      
      <div className="relative h-64 w-full">
        
        <Image
            src={imageSrc}
            width={600}
            height={600}
            alt= {name}
            className="w-full h-full block p-1 rounded-2xl"
        />

      </div>

    
      <div className="p-5">

        <h5 className="mb-2 text-2xl font-bold text-gray-900">
          {name}
        </h5>

        <p className="mb-3 font-normal text-gray-700">
          {about}
        </p>
      <div className='flex flex-row justify-between items-center'>
        <span className="text-xl font-bold text-blue-600">
          {price.toLocaleString()} ₽
        </span>

        <LikeButton/>

      </div>
      <button
        onClick={()=>setIsDescriptionVisible(!isDescriptionVisible)}
        className=" text-blue-500 underline"
        >
        {isDescriptionVisible?'Скрыть описание':'Показать описание'}
      </button>

{isDescriptionVisible&& description &&(
<p className="mt-2 text-gray-500 text-sm">{description}</p>
)}

        <p className={inStock?'text-green-600' : 'text-red-600'}>
        {inStock?'В наличии':'Нет в наличии'}
        </p>

        <ProductButton
        inStock={inStock}/>
      </div>
    </div>
  );
}
