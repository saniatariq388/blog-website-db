
import Link from 'next/link'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import { client } from '@/sanity/lib/client'


 export interface post {
  id: number;
  title: string;
  cardImage: string;
  slug: string;
  description: string;
  date: number;
}

export default async function Blogs() {

   const blogData =await client.fetch("*[_type == 'blogPage'][0]{'heading':heading, 'blogPostCards':blogPostCards[]{'slug':slug,'date':date,'description':description,'id':id,'title':title,'cardImage':cardImage.asset->url,}}")

   const{heading, blogPostCards} = blogData


  return (
    <>
       <div className="min-h-screen mt-28 flex flex-col bg-primary-50">
     
     <main className="flex-grow container mx-auto px-4 py-8">
       <div className="flex flex-col md:flex-row gap-8">
         <div className="w-full md:w-3/4">
           <h1 className="text-2xl md:text-3xl font-bold mb-6 text-secondary-700">{heading}</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
             {blogPostCards.map((post:post) => (
               <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                 <Image src={post.cardImage} alt={post.title} width={600} height={600} className="w-full h-58 object-cover" />
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

