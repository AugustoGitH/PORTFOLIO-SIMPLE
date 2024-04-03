import { BrowserRouter, Route, Routes } from "react-router-dom"
import ButtonToTop from "./components/ButtonToTop"
import Header from "./components/Header"
import PageProvider from "./contexts/PageContext"
import ToastProvider from "./contexts/ToastContext"
import TranslateProvider from "./contexts/TranslateContext"
import LadingPage from "./templates/LadingPage"

function App() {

  return (
    <TranslateProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <PageProvider>
                <Header />
                <LadingPage />
                <ButtonToTop />
              </PageProvider>
            } />
          </Routes>

        </BrowserRouter>
      </ToastProvider>
    </TranslateProvider>
  )
}

export default App
