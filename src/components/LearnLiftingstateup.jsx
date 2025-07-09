import React from 'react'

const LearnLiftingstateup = (props) => {
    const handleClick = () => {
        let stock = "AAPL"
        props.getName(stock)
    }
  return (
    <>
        <div>LearnLiftingstateup</div>
        <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default LearnLiftingstateup