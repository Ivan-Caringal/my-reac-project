import {useState} from 'react'

const LearnUseState = () => {
  let initialState = 0
  const [num, setNum] = useState(initialState)

  const HnadleClick = () => {
    setNum(num + 1)
  }

  const [stockDet , setstockDet]= useState({stock: "AAPL", stockprice: 150})
  const HandleStock = () => {
    setstockDet({...stockDet, stockprice: stockDet.stockprice + 10})
  }

  return (
    <>
        <h1>Learn useState</h1>
        <h2>Count: {num}</h2>
        <button onClick={HnadleClick}>Increment</button>
        <hr/>
        <h2>{stockDet.stock} :{stockDet.stockprice}</h2>
        <button onClick={HandleStock}>Update Stock</button>
    </>
  )
}

export default LearnUseState