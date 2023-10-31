import ProductImage from "@/components/ProductImage"
import { notFound } from "next/navigation";

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
  params:{
    id:string
  }
}



async function Product({params:{id}}:Props) {

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product: Product =await res.json()
  
    return (
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-48 pb-10 ">
        <ProductImage product={product} />
        <div className="divide-y">
          <div className="space-y-2 pb-8 ">
            <h1 className="text-3xl md:text-4xl font-semibold">{product.title}</h1>
            <h2 className="text-xl font-bold text-gray-600 md:text-3xl">${product.price}</h2>
          </div>
  
          <div className="pt-8">
           <p className="text-sx md:text-sm">{product.description}</p> 
          </div>
        </div>
      </div>
    )
    
  } catch (error) {
    notFound()
  }

}

export default Product