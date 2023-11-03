import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="flex items-center px-4 md:px-12 justify-between fixed top-0 w-full bg-white z-50 shadow">
        <Link href="/" className="">
            <Image src="https://lh3.googleusercontent.com/pw/ADCreHe3Vb3n5hEiApI2iOwWKRa6kYLpxNLdeMj1FuDrD9ICsav4RHsSXvigg8-vkwsAO6hNuXVFDR7SSfOYO7MQqA4Ki-_Fc8TcLw4ObAs2zkuZlxDFSV8nNEquyRMbk-rjPkHwxJ3I3nGCspcV-YpQUFku=w461-h111-s-no-gm?authuser=0" alt="logo" width={300} height={200} />
        </Link>

        <div className="flex items-center space-x-4 text-sm m-2">
 <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Sign in
  </span>
</button>

<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Get started
  </span>
</button>
        </div>
    </header>
  )
}

export default Header