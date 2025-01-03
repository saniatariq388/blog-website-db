import About from "@/components/About";
import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import PopularDestinations from "@/components/PopularDestinations";
import Sidebar from "@/components/Sidebar";


export default function Home() {
  return (
   <>
     
      <Hero />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-3/4">
            <FeaturedPosts />
            <PopularDestinations />
            <About />
            <Newsletter />
          </div>
          <Sidebar />
        </div>
      </main>
     
   </>
  );
}
