import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Carousal from './components/Carousal'
import DeveloperList from './components/DeveloperList'
import Testimonial from "./components/Testimonial"
import Pacakages from './components/HowToPostJob'
import WhyToChoose from './components/WhyToChoose'
import Footer from './components/Footer'
import DeveloperListContext from './utils/DeveloperListContext'
import { dummyArrayOfDevelopers } from './utils/dummyList';

const App = () => {


  return (
    <>
     <DeveloperListContext.Provider value={dummyArrayOfDevelopers}>
     <Navbar />
     <Carousal />
     <DeveloperList />
     <Testimonial />
     <Pacakages />
     <WhyToChoose />
     <Footer />
     </DeveloperListContext.Provider>
    </>
  )
}

export default App
