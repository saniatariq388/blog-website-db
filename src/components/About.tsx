import { client } from "@/sanity/lib/client"
import { PortableText } from "@portabletext/react"



export default async function About () {

  const res = await client.fetch(`
   *[_type == 'landingPage'][0].sections[2]{'title':title,
'description':description, }`)

  const { title, description } = res;

  return (
    <>
     <section className="py-8 md:py-16 bg-primary-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-center text-secondary-700">{title}</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-base md:text-lg mb-4 text-neutral-700">
          <PortableText value={description}/>
          </p>
          
        </div>
      </div>
    </section>
    </>
  )
}

 