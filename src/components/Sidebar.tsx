import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'

const blogCategories = [
  { name: 'Adventure', slug: 'adventure' },
  { name: 'Culture', slug: 'culture' },
  { name: 'Nature', slug: 'nature' },
  { name: 'Food', slug: 'food' },
  { name: 'History', slug: 'history' },
]

const recentPosts = [
  { title: 'Top 10 Trekking Routes in Pakistan', slug: 'top-10-trekking-routes' },
  { title: 'A Guide to Pakistani Cuisine', slug: 'guide-to-pakistani-cuisine' },
  { title: 'Exploring the Ancient Ruins of Mohenjo-daro', slug: 'exploring-mohenjo-daro' },
]

interface Destination {
  heading: string,
  title: string,
  description: string,
  cardImg: string,
  slug: string,
  id: number,
  date: number,
}[]

// const featuredDestination: Destination[] =[ {
//   name: 'Hunza Valley',
//   description: 'Known for its stunning landscapes and longevity of its people.',
//   image: '/images/hunzaVellay.jpg?height=200&width=300',
//   slug: 'hunza-valley'
// },
//  {
//   name: 'Hunza Valley',
//   description: 'Known for its stunning landscapes and longevity of its people.',
//   image: '/images/hunzaVellay.jpg?height=200&width=300',
//   slug: 'hunza-valley'
// },
//  {
//   name: 'Hunza Valley',
//   description: 'Known for its stunning landscapes and longevity of its people.',
//   image: '/images/hunzaVellay.jpg?height=200&width=300',
//   slug: 'hunza-valley'
// },
//  {
//   name: 'Hunza Valley',
//   description: 'Known for its stunning landscapes and longevity of its people.',
//   image: '/images/hunzaVellay.jpg?height=200&width=300',
//   slug: 'hunza-valley'
// },
// ]


 

export default async function Sidebar() {

  const featuredDestination =await client.fetch(`
   *[_type == 'landingPage'][0].sections[3]{
    'heading': heading,
     'featuredDestinationCards': featuredDestinationCards[]{
      'cardImg':cardImg.asset->url,
      'date': date,
      'title': title, 
      'description': description,
      'slug': slug,
      'id': id,
     }  
   }
   `)

    const {heading, featuredDestinationCards, title,  } = featuredDestination;

  return (
    <aside className="w-full md:w-1/4 p-4 bg-primary-50 rounded-lg shadow-md">
      <div className="mb-8">
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-secondary-700">Blog Categories</h2>
        <ul className="space-y-2">
          {blogCategories.map((category) => (
            <li key={category.slug}>
              <Link href={`/category/${category.slug}`} className="text-sm md:text-base text-primary-600 hover:text-primary-800 transition-colors duration-300">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-secondary-700">Recent Posts</h2>
        <ul className="space-y-2">
          {recentPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="text-sm md:text-base text-primary-600 hover:text-primary-800 transition-colors duration-300">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-secondary-700">{heading}</h2>
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          {featuredDestinationCards.map((featuredDestination: Destination) => (
          <div key={featuredDestination.slug}>
            <Image src={featuredDestination.cardImg} alt={title} width={300} height={200} className="w-full h-40 object-cover" />
            <div className="p-4">
            <span className="text-xs text-[#999999]">{featuredDestination.date}</span>
              <h3 className="text-base md:text-lg font-semibold mb-2 text-secondary-600">{featuredDestination.title}</h3>
              <p className="text-xs md:text-sm text-neutral-600 mb-2">{featuredDestination.description}</p>
              <Link href={`/destination/${featuredDestination.slug}`} className="text-sm md:text-base text-primary-500 hover:text-primary-700 font-medium transition-colors duration-300">
                Learn More
              </Link>
            </div>
          </div>
          ))}
           
        </div>
      </div>
    </aside>
  )
}

