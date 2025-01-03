
import Image from 'next/image'
import { blogData } from '@/constant/blogData'
import BlogPostLayout from '@/components/BlogPostLayout'



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

