import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import MovieSlider from "./pages/MovieSlider"
import Generator from "./pages/Generator"
import TrainUseRef from "./pages/TrainUseRef"
import Faq from "./pages/Faq"
import Error from "./pages/Error"
import SharedLayout from "./pages/SharedLayout"

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/slider" element={<MovieSlider />} />
        <Route path="/generator" element={<Generator />}></Route>
        <Route path="/trainuseref" element={<TrainUseRef />}></Route>
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App