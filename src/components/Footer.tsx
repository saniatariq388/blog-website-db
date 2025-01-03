import Link from 'next/link'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-secondary-200 text-primary-600 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg md:text-xl font-bold mb-4 text-primary-600">PakistanTravels</h3>
            <p className="text-sm md:text-base text-secondary-800">Exploring the beauty of Northern Pakistan, <br /> one adventure at a time.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-base md:text-lg font-semibold mb-4 text-primary-600">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm md:text-base text-secondary-800 hover:text-primary-300 transition duration-300">Home</Link></li>
              <li><Link href="/blogs" className="text-sm md:text-base text-secondary-800 hover:text-primary-300 transition duration-300">Blogs</Link></li>
              <li><Link href="/destinations" className="text-sm md:text-base text-secondary-800 hover:text-primary-300 transition duration-300">Destinations</Link></li>
              <li><Link href="/about" className="text-sm md:text-base text-secondary-800 hover:text-primary-300 transition duration-300">About</Link></li>
              <li><Link href="/contact" className="text-sm md:text-base text-secondary-800 hover:text-primary-300 transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-base md:text-lg font-semibold mb-4 text-primary-600">Connect With Us</h4>
             
          {/* Social Icons */}
          <div className="flex space-x-2 ">
            <Link href="#" className="p-2">
              <div className="w-[50px] h-[50px] rounded-full bg-cardHeading flex items-center justify-center">
                <FaTwitter className="w-[30px] h-[30px] text-primary-600 " />
              </div>
            </Link>
            <Link href="#" className="p-2">
              <div className="w-[50px] h-[50px] rounded-full bg-cardHeading flex items-center justify-center">
                <FaFacebookF className="w-[30px] h-[30px] text-primary-600 " />
              </div>
            </Link>
            <Link href="#" className="p-2">
              <div className="w-[50px] h-[50px] rounded-full bg-cardHeading flex items-center justify-center">
                <TfiYoutube className="w-[30px] h-[30px] text-primary-600" />
              </div>
            </Link>
            <Link href="#" className="p-2">
              <div className="w-[50px] h-[50px] rounded-full bg-cardHeading flex items-center justify-center">
                <FaInstagram className="w-[30px] h-[30px] " />
              </div>
            </Link>
          </div>
          </div>
         
        </div>
        <div className="mt-8 text-center text-sm md:text-base text-secondary-800">
          <p>&copy; {new Date().getFullYear()} PakistanTravels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

