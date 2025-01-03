import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import { Post } from './FeaturedPosts';

async function PopularDestinations() {
 



  const destinations = await client.fetch(`
   *[_type == 'landingPage'][0].sections[1]{
     'heading': heading,
     'popularCards':popularCards[]{
     'date':date,
     'cardImg':cardImg.asset->url,
     'title':title,
     'description':description,
     'slug':slug,
     'id':id ,
     }
       }`)
  
     const {heading, popularCards,} = destinations;


  return (
    <section className="py-8 md:py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-center text-primary-700">{heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {popularCards.map((destination:Post) => (
            <div key={destination.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <Image src={destination.cardImg} alt={destination.title} width={600} height={400} className="w-full md:w-1/2 h-48 md:h-auto object-cover" />
              <div className="p-4 md:w-1/2">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-secondary-600">{destination.title}</h3>
                <p className="text-sm md:text-base text-neutral-600 mb-4">{destination.description}</p>
                <Link href={`/destination/${destination.slug}`} className="text-primary-500 hover:text-primary-700 font-medium transition duration-300">
                  Explore More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularDestinations

