import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { client } from '@/sanity/lib/client';

 export interface Post {
  id: number;
  title: string;
  cardImg: string;
  slug: string;
  description: string;
  date: number;
}
export default async function FeaturedPosts () {
  
   const posts =  await client.fetch("*[_type == 'landingPage'][0].sections[0]{'heading': heading,'featuredCards':featuredCards[]{'date':date,'cardImg':cardImg.asset->url,'title':title,'slug':slug, 'id':id ,}}")

   const {heading,featuredCards, title,} = posts;

  return (
   <>
     <section className="py-8 md:py-16 bg-primary-50">
       <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-bold font-raleway text-[#333333] tracking-tight">Our Recent Post</h2>
         {/*---------------- error hai yaha pe---------------------- */}
        <Link href={`/blogs`}>
          <Button variant="secondary" className="bg-primary-500 mr-4 hover:bg- text-white hover:text-white">
            View All
          </Button>
        </Link>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-center text-secondary-700">{heading}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {featuredCards.map((post:Post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <Image src={post.cardImg} alt={title} width={600} height={400} className="w-full h-48 object-cover" />
              <div className="p-4">
              <span className="text-xs text-[#999999]">{post.date}</span>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-secondary-600">{post.title}</h3>

                <Link href={`/blog/${post.slug}`} className="text-primary-500 hover:text-primary-700 font-medium transition duration-300">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   </>
  )
}



