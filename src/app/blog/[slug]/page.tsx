

 import Image from 'next/image'
 import BlogPostLayout from '@/components/BlogPostLayout'
 import { client } from '@/sanity/lib/client';



interface post { slug: string; date: string; description: string; id: string; title: string; cardImage: string; }

// export default async function BlogPost() {
//   // const { slug } = params ;
//   // const post = blogData.find((post) => post.slug === slug)

//   // if (!post) {
//   //   return <div>Post not found</div>
//   // }

  
//      const blogData =await client.fetch("*[_type == 'blogPage'][0]{'heading':heading, 'blogPostCards':blogPostCards[]{'slug':slug,'date':date,'description':description,'id':id,'title':title,'cardImage':cardImage.asset->url,}}")
  
//      const{heading, blogPostCards, cardImage, title,description,} = blogData
//     //  const post = blogPostCards
  

//   return (
//    <>
       
//       <div className='mt-16'>
//       {blogPostCards.map((post:post, index:number) => {
//         return(
//       <BlogPostLayout key={index} postId={''}>
       
//         <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
//         <Image
//         src={`/blog/${post.cardImage}`}
//         alt={post.title}
//         width={1200}
//         height={600}
//         className="w-full h-auto rounded-lg mb-6"
//       />
           
//             <div className="prose max-w-none">
//               <p><PortableText value={post.description}/></p>
//             </div>
        
//             </BlogPostLayout>
       
//       )
// })}
    
//   </div>

//    </>
//   )
// }











export default async function BlogPost() {
  const blogData = await client.fetch(
    `*[_type == 'blogPage'][0]{
      'heading': heading,
      'blogPostCards': blogPostCards[]{
        'slug': slug,
        'date': date,
        'description': description,
        'id': id,
        'title': title,
        'cardImage': cardImage.asset->url,
      }
    }`
  );

  const { blogPostCards } = blogData;

  return (
    <>
      <div className="mt-16">
        {blogPostCards.map((post: post, index: number) => (
          <BlogPostLayout key={index} postId={''}>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <Image
              src={`/blog/${post.cardImage}`}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg mb-6"
            />
            <div className="prose max-w-none">
              {/* Render description as rich text */}
              {post.description }
            </div>
          </BlogPostLayout>
        ))}
      </div>
    </>
  );
}


