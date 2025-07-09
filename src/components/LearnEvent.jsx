import React from 'react'

const LearnEvent = () => {
    const handleClick = () => {
        console.log('Button clicked!')
    }
    const handleClick2 = (param) => {
        console.log(param)
    }
  return (
   <>
     <button onClick={handleClick}>Click Me</button>
     <button onClick={() => handleClick2('Hello World')}>Click 2</button>
   </>
  )
}

export default LearnEvent