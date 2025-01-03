
import Link from 'next/link'
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'

// This would typically come from a database or API
const categoryPosts = [
  { id: 1, title: "Hiking in the Karakoram", slug: "hiking-karakoram", image: "/images/hiking.jpg?height=400&width=600" },
  { id: 2, title: "Exploring Lahore's Food Scene", slug: "lahore-food-scene", image: "/images/lahoreFood.jpeg?height=400&width=600" },
  { id: 3, title: "The Ancient Indus Valley Civilization", slug: "indus-valley-civilization", image: "/images/ancient.jpeg?height=400&width=600" },
]

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen flex flex-col bg-primary-50">
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-3/4">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-secondary-700 capitalize">{params.slug} Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categoryPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image src={post.image} alt={post.title} width={600} height={400} className="w-full h-48 object-cover" />
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
  )
}

