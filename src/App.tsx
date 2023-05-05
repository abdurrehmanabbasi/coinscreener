import { Routes,Route } from "react-router-dom"
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Coins from "./pages/Coins"
import Coin from "./pages/Coin"

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
