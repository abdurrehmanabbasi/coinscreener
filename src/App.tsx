import { Routes,Route } from "react-router-dom"

import { Suspense, lazy } from "react"

const Layout = lazy(()=>import ('./pages/Layout'))
const Home = lazy(()=>import ('./pages/Home'))
const About = lazy(()=>import ('./pages/About'))
const Coins = lazy(()=>import ('./pages/Coins'))
const Coin = lazy(()=>import ('./pages/Coin'))
const Watchlist = lazy(()=>import ('./pages/Watchlist'))


const App = () => {

  return (
    <Suspense fallback={<div>...Loading</div>}>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/market" element={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/coin/:id" element={<Coin/>}/>
        <Route path="/watchlist" element={<Watchlist/>}/>
        <Route path="/about" element={<About/>}/>
      </Route>
    </Routes>
    </Suspense>
  )
}

export default App
