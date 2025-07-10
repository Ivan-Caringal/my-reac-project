import { useState } from 'react'
import Helloworld from './components/Helloworld'
import LearnReact from './components/LearnReact'
import LearnProps from './components/learnProps'
import Testbig from './components/Testbig'
import Testsmall from './components/testsmall'
import LearnEvent from './components/LearnEvent'
import LearnLiftingstateup from './components/LearnLiftingstateup'
import LearnUseState from './components/LearnUseState'


function App() {
  //  
  const getName = (data) => {
    console.log(data)
  }
  
  return (
    <>
      <h1>Welcome to React</h1>
      {/* <Helloworld /> */}
      {/* <LearnReact /> */}
      {/* <LearnProps stock="AAPL" stockprice={price} /> */}
      {/* <LearnEvent /> */}
      {/* <LearnLiftingstateup getLame={getName} /> */}
      <LearnUseState />

      
      

    </>
  )
}
export default App
