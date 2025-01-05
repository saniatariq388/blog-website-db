
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-primary-50">
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-secondary-700">About PakistanTravels</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <Image
              src="/images/mainPic.jpeg?height=400&width=1000"
              alt="Beautiful landscape of Northern Pakistan"
              width={1000}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-4">
             <b> Welcome to PakistanTravels</b>, your ultimate guide to exploring the breathtaking northern areas of Pakistan. Our mission is to inspire and guide travelers to discover the hidden gems of this magnificent region, showcasing its natural beauty, rich culture, and warm hospitality.
            </p>
            <p className="text-lg">
              Founded by a team of passionate travelers and locals, we strive to provide authentic experiences and valuable insights into the diverse landscapes, ancient traditions, and modern adventures that await in Northern Pakistan.
            </p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-secondary-600">Our Journey</h2>
          <p className="text-lg mb-4">
            PakistanTravels began as a small project born out of our love for the majestic landscapes and rich cultural tapestry of Northern Pakistan. What started as a personal blog to document our travels soon grew into a comprehensive resource for travelers from around the world.
          </p>
          <p className="text-lg mb-4">
            Over the years, we&apos;ve explored countless valleys, scaled breathtaking peaks, and immersed ourselves in local communities. Our experiences have ranged from trekking in the Karakoram Range and visiting ancient forts in Hunza to savoring traditional cuisine in remote mountain villages.
          </p>
          <p className="text-lg">
            Today, PakistanTravels is proud to be a leading voice in promoting sustainable and responsible tourism in Pakistan, partnering with local communities and conservation efforts to preserve the natural beauty and cultural heritage of the region.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-secondary-600">What We Offer</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>In-depth travel guides to popular and off-the-beaten-path destinations</li>
            <li>First-hand accounts of trekking expeditions and cultural experiences</li>
            <li>Practical tips on planning your trip, including visa information and best times to visit</li>
            <li>Stunning photography and videos showcasing the beauty of Northern Pakistan</li>
            <li>Insights into local customs, traditions, and etiquette</li>
            <li>Recommendations for eco-friendly and community-based tourism initiatives</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-secondary-600">Our Commitment</h2>
          <p className="text-lg mb-4">
            At PakistanTravels, we are committed to promoting responsible and sustainable tourism. We believe in the power of travel to foster understanding, support local economies, and protect natural environments. Our content aims to:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Educate visitors about the importance of respecting local cultures and traditions</li>
            <li>Promote eco-friendly practices and conservation efforts</li>
            <li>Support local businesses and community-based tourism initiatives</li>
            <li>Provide accurate and up-to-date information to ensure safe and enjoyable travels</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-secondary-600">Join Us on This Journey</h2>
          <p className="text-lg mb-4">
            Whether you&apos;re an adventure seeker, a culture enthusiast, or simply curious about this beautiful part of the world, PakistanTravels is here to inspire and guide you. We invite you to explore our blog, engage with our community, and embark on your own journey to discover the wonders of Northern Pakistan.
          </p>
          <p className="text-lg">
            Thank you for being a part of our community. Together, let&apos;s explore the magnificent landscapes, rich heritage, and warm hospitality that make Northern Pakistan a truly unforgettable destination.
          </p>
        </section>
      </main>
      
    </div>
  )
}

