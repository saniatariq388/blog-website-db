
import Comments from './Comments'

interface BlogPostLayoutProps {
  children: React.ReactNode
  postId: string
}

// BlogPost PAGE component
function BlogPostLayout({ children, postId }: BlogPostLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-primary-50">
      
      <main className="flex-grow">
        <article className="max-w-3xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg my-8">
          {children}
        </article>
        <Comments blog_id={Number(postId)} />
      </main>
     
    </div>
  )
}

export default BlogPostLayout

