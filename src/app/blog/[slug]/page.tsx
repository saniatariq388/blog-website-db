
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import { blogData } from '@/constant/blogData'
import { PortableText } from 'next-sanity'
import BlogPostLayout from '@/components/BlogPostLayout'

// // This would typically come from a database or API
// const blogPosts = {
//   'hunza-valley-hidden-paradise': {
//     title: "Hunza Valley: A Hidden Paradise",
//     content: "Nestled in the heart of the Karakoram mountain range, Hunza Valley is a hidden gem that captivates visitors with its breathtaking landscapes and rich cultural heritage. This remote region in northern Pakistan is renowned for its longevity, with many locals living well into their 90s and beyond.",
//     image: "/images/hunzaVellay.jpg?height=600&width=1200"
//   },
//   'trekking-karakoram-range': {
//     title: "Trekking in the Karakoram Range",
//     content: "The Karakoram Range, home to some of the world's highest peaks, offers unparalleled trekking experiences for adventure enthusiasts. From the challenging K2 Base Camp Trek to the beautiful Baltoro Glacier Trek, this mountain range provides a variety of options for trekkers of all levels.",
//     image: "/images/karakaram.jpg?height=600&width=1200"
//   },
//   // Add more blog posts here
// }

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogData.find((post) => post.slug === params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
   <>
   
      <div className='mt-16'>
      <BlogPostLayout postId={''}>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <Image
        src={post.cardImage}
        alt={post.title}
        width={1200}
        height={600}
        className="w-full h-auto rounded-lg mb-6"
      />
           
            <div className="prose max-w-none">
              <p>{post.description}</p>
            </div>
        
            </BlogPostLayout>
       
    
    
  </div>
   </>
  )
}

