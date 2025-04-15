import React from 'react'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import ReflectFeatures from '../components/ReflectFeatures'
const Home = () => {
   return (
     <div className="bg-[#0e0a1a] min-h-screen text-white font-sans">
       <Navbar />
       <Features />
      <ReflectFeatures/>
     </div>
   );
 }


export default Home