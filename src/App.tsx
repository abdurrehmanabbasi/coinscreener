import { Routes,Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Coins from "./components/Coins"
import Coin from "./components/Coin"

// const url = "wss://stream.binance.com:9443/ws/!miniTicker@arr"
const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/market" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/coin/:id" element={<Coin/>}/>
        <Route path="/about" element={<About/>}/>
      </Route>
    </Routes>
  )
}

export default App
