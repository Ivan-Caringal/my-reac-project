import React from 'react'

const learnProps = (props) => {
  return (
    <>
        <h2> Props</h2>
        <p>Stock: {props.stock}</p>
        <p>price: {props.stockprice}</p>
    </>
  )
}

export default learnProps