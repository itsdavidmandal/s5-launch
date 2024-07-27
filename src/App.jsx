// components haru load garnu parcha 
import React from 'react'
import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import Project from './components/project/Project'
import Mywork from './components/list/Mywork'
import Feedback from './components/feedback/Feedback'
import StartCanvas from "./Stars";
import Reflection from './components/reflections/Reflection'

const App = () => {
  return (
    <div>
      <StartCanvas />

      <Header/>
      <Intro/>
      <Project/>
      <Mywork/>
      <Reflection/>
      <Feedback/>

      
    </div>
  )
}

export default App
