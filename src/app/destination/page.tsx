
import Image from 'next/image'


// This would typically come from a database or API
const destinationDetails = [
  {
  name: "Hunza Valley",
  description: "Hunza Valley is a mountainous valley in the Gilgit-Baltistan region of Pakistan. The Hunza valley is situated in the extreme northern part of Pakistan, bordering with the Wakhan Corridor of Afghanistan and the Xinjiang region of China.",
  image: "/images/hunzaVellay.jpg?height=600&width=800",
  attractions: [
    "Baltit Fort",
    "Altit Fort",
    "Attabad Lake",
    "Passu Cones",
    "Eagles Nest",
  ],
  bestTimeToVisit: "May to October",
},
{
  name: "Chitral",
  description: "Chitral is a scenic district in the Khyber Pakhtunkhwa province of Pakistan, located at the foot of the Hindu Kush mountain range. It is known for its beautiful landscapes, rich cultural heritage, and the unique Kalash Valley.",
  image: "/images/citral.jpeg?height=600&width=800",
  attractions: [
    "Chitral Fort",
    "Kalash Valley",
    "Shandur Pass",
    "Tirich Mir",
    "Chitral Museum"
  ],
  bestTimeToVisit: "April to October",
},

]

export default function DestinationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-primary-50 mt-20">
     
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {destinationDetails.map((destinationDetail, index) => {
            return(
          <div key={index} className="w-full md:w-3/4">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-secondary-700">{destinationDetail.name}</h1>
            <div className= "bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={destinationDetail.image} alt={destinationDetail.name} width={800} height={600} className="w-full h-48 md:h-96 object-cover" />
              <div className="p-4 md:p-6">
                <p className="text-base md:text-lg text-neutral-700 mb-4">{destinationDetail.description}</p>
                <h2 className="text-xl font-semibold mb-2 text-secondary-600">Top Attractions</h2>
                <ul className="list-disc list-inside mb-4">
                  {destinationDetail.attractions.map((attraction, index) => (
                    <li key={index} className="text-sm md:text-base text-neutral-700">{attraction}</li>
                  ))}
                </ul>
                <p className="text-sm md:text-base text-neutral-700"><strong>Best Time to Visit:</strong> {destinationDetail.bestTimeToVisit}</p>
              </div>
            </div>
          </div>
          )
          })}
         
        </div>
      </main>
     
    </div>
  )
}

