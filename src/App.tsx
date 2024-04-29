import { BrowserRouter, Route, Routes } from "react-router-dom"


import Portfolio from "./templates/Portfolio"
import CurrentPageProvider from "./contexts/CurrentPageContext"
import Bio from "./templates/Bio"
import bio from "./settings/bio"





function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bio profile={bio} />} />
        <Route path="/portfolio" element={
          <CurrentPageProvider>
            <Portfolio />
          </CurrentPageProvider>
        } />

      </Routes>

    </BrowserRouter>
  )
}

export default App
