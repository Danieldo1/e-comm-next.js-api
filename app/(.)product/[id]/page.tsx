'use client'

import ProductImage from "@/components/ProductImage"
import {Dialog} from "@headlessui/react"
import {StarIcon as StarIconOutline} from "@heroicons/react/24/outline"
import {StarIcon} from "@heroicons/react/20/solid"
import { useParams,useRouter } from "next/navigation"
import { useState,useEffect } from "react"



function Modal() {
    let [isOpen, setIsOpen] = useState(true)
    const id = useParams().id
    const [product, setProduct] = useState<Product>()
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchProduct() {
          setLoading(true)
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const product: Product =await res.json()
        setProduct(product)
        setLoading(false)
        }
            fetchProduct()
        
    },[id])
  return (
    <Dialog
      open={isOpen}
      onClose={() =>{ setIsOpen(false)
      router.back()
      }}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
 
          <Dialog.Panel className="mx-auto max-w-3xl rounded bg-white p-10 overflow-hidden">
           {loading ?(
            <div className="h-8 w-8 rounded-full border-2 border-dotted border-blue-600 animate-spin" />
           ):(

            <div className="flex gap-x-8 h-96 ">
                {product?.image && (
                <div className="relative w-72 h-full md:inline ">
                <ProductImage product={product} fill />
                </div>
                )}
                <div className="flex flex-1 flex-col">
                  <div className="flex-1">
                    <h4 className="font-semibold">{product?.title}</h4>
                    <p className="font-medium text-sm">${product?.price}</p>
                      <div className="flex items-center text-sm mr-8">
                        <p>{product?.rating.rate}</p>
                        {product?.rating.rate && (
                          <div className="flex items-center ml-2 mr-6">
                          {Array.from({ length: Math.floor(product?.rating.rate) }, (_, i) => (
                            <StarIcon key={i} className="h-5 w-5 text-yellow-500" />
                            )
                            )}
                            {Array.from({ length: 5 - Math.floor(product?.rating.rate) }, (_, i) => (
                          <StarIconOutline key={i} className="h-5 w-5 text-yellow-500" />
                          ))}
                            </div>
                        )}
                        <p className="text-blue-600 hover:underline cursor-pointer text-xs">See all {product?.rating.count} reviews</p>
                      </div>
                      <p className="line-clamps-3 text-sm">{product?.description}</p>
                  </div>
                  <div className="space-y-3 text-sm">
                    <button  className="rounded m-1 bg-blue-500 py-2 px-4 text-white hover:bg-blue-800">Add to cart</button>
                    <button onClick={()=>window.location.reload()} className="rounded m-1 bg-blue-500 py-2 px-4 text-white hover:bg-blue-800">View Details</button>
                  </div>
                </div>
            </div>
           )}
            </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export default Modal