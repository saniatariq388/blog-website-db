import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center">
      <Image
        src="/images/mainPic.jpeg?height=1080&width=1920"
        alt="Northern Pakistan Landscape"
        layout="fill"
        objectFit="cover"
        className="absolute z-0 opacity-100"
      />
      <div className="relative z-10 text-center text-white bg-primary-200 bg-opacity-20 p-4 md:p-8 rounded-lg max-w-xl mx-4">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4">Discover Northern Pakistan</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-8">Explore the breathtaking landscapes and rich culture</p>
        <button className="bg-primary-400 hover:bg-primary-500 text-white font-bold py-2 px-4 rounded-full transition duration-300">
          Start Exploring
        </button>
      </div>
    </section>
  )
}

export default Hero

