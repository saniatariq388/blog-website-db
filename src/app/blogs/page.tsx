
import Link from 'next/link'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import { blogData } from '@/constant/blogData'

// const blogPosts = [
//   { id: 1, title: "Hunza Valley: A Hidden Paradise", slug: "hunza-valley-hidden-paradise", image: "/images/hunzaVellay.jpg?height=400&width=600" },
//   { id: 2, title: "Trekking in the Karakoram Range", slug: "trekking-karakoram-range", image: "/images/karakaram.jpg?height=400&width=600" },
//   { id: 3, title: "Exploring Shalimar Gardens", slug: "exploring-shalimar-gardens", image: "/images/shalimarGarden.jpeg?height=400&width=600" },
//   { id: 4, title: "The Magic of Fairy Meadows", slug: "magic-of-fairy-meadows", image: "/images/fairy.jpg?height=400&width=600" },
//   { id: 5, title: "Discovering Baltit Fort", slug: "discovering-baltit-fort", image: "/images/baltit.jpg?height=400&width=600" },
//   { id: 6, title: "Deosai Plains: The Land of Giants", slug: "deosai-plains-land-of-giants", image: "/images/giant.jpg?height=400&width=600" },
// ]

export default function Blogs() {
  return (
    <>
       <div className="min-h-screen mt-28 flex flex-col bg-primary-50">
     
     <main className="flex-grow container mx-auto px-4 py-8">
       <div className="flex flex-col md:flex-row gap-8">
         <div className="w-full md:w-3/4">
           <h1 className="text-2xl md:text-3xl font-bold mb-6 text-secondary-700">Our Blog Posts</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {blogData.map((post) => (
               <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                 <Image src={post.cardImage} alt={post.title} width={600} height={400} className="w-full h-48 object-cover" />
                 <div className="p-4">
                   <h2 className="text-lg md:text-xl font-semibold mb-2 text-secondary-600">{post.title}</h2>
                   <Link href={`/blog/${post.slug}`} className="text-primary-500 hover:text-primary-700 font-medium transition duration-300">
                     Read More
                   </Link>
                 </div>
               </div>
             ))}
           </div>
         </div>
         <Sidebar />
       </div>
     </main>
     
   </div>  
    </>
  )
}

