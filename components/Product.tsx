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
    className="h-96 flex flex-col border group-hover:scale-105 transition-transform  duration-200 ease-out rounded-2xl bg-white"
    >
        <div className="relative max-h-72 flex-1">
            <ProductImage product={product} fill />
        </div>

        <div className="font-semibold flex items-center justify-center m-4 " >
            <p className="mr-2">{product.title}</p>
            {' '}
            <p className="font-bold">${product.price}</p>

        </div>
    </Link>
  )
}

export default Product