import Product from "@/components/Product";


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
export default async function Home() {

  const res = await fetch('https://fakestoreapi.com/products')
  const products: Product[] =await res.json()

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-48" >
    <section className="flex flex-col space-y-12 pb-44">
      <h1 className="text-3xl font-bold underline text-center">DEALS OF THE DAY</h1>
      {products.map((product) => (
        <Product key={product.id} product={product}  />
      ))}
    </section>
    </main>
  )
}
