import Link from "next/link"
import ProductImage from "./ProductImage"

type Product = {
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:{
      rate:number;
      count:number;
    }
  
  }

type Props ={
    product: Product
}

const Product = ({ product }:Props) => {
  return (
    <Link prefetch={false} href={`/product/${product.id}`}
    className="h-96 flex flex-col border group-hover:scale-125 transition-transform duration-200 ease-in-out"
    >
        <div className="relative max-h-72 flex-1">
            <ProductImage product={product} fill />
        </div>

        <div className="font-semibold flex items-center justify-between mt-4 mb-1 " >
            <p>{product.title}</p>
            <p>${product.price}</p>
            <p className="text-xs italic w-64 line-clamp-2 text-gray-600">
                {product.description}
            </p>
        </div>
    </Link>
  )
}

export default Product