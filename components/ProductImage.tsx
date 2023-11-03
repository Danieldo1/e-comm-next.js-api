'use client'
import React from "react"
import Image from "next/image"

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
    product: Product;
    fill?:boolean
}

function ProductImage({product,fill}:Props) {
    const [loading, setloading] = React.useState(true)
  return (
    <>
        {fill ? (
            <Image src={product.image} alt={product.title} fill 
            className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${loading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'} bg-white mt-2`}
            onLoad={() => setloading(false)}/>
        ):(
            <Image src={product.image} alt={product.title} width={400} height={1000} 
            className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${loading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}bg-white mt-2`}
            onLoad={() => setloading(false)}/>
        )}
    </>
  )
}

export default ProductImage