import React from 'react'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import ReflectFeatures from '../components/ReflectFeatures'
import Hero from '../components/Hero'
const Home = () => {
   return (
     <div className="bg-[#020012] min-h-screen text-white font-sans">
       <Navbar />
       <Hero/>
       <Features />
      <ReflectFeatures/>
     </div>
   );
 }


export default Home