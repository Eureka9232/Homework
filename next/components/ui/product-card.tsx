import Image from 'next/image';
import product from '@/public/images/product-1.png'

type ProductCardProps ={
  name:string;
  price:number;
  imageSrc:string;
  inStock?:boolean;
};



export default function ProductCard({ name, price, imageSrc,inStock=true}:ProductCardProps) {
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
          Ультра редкие акраны который нельзя найти на торговой площадке steam
        </p>

        <span className="text-xl font-bold text-blue-600">
          {price.toLocaleString()} ₽
        </span>
        <p className={inStock?'text-green-600' : 'text-red-600'}>
        {inStock?'В наличии':'Нет в наличии'}
        </p>
        <button 
        className={`mt-2 px-4 py-2 rounded w-full ${
        inStock
        ?'bg-blue-500 text-white hover:bg-blue-600'
        :'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        disabled={!inStock}
        >
          В корзину
        </button>



      </div>
    </div>
  );
}
