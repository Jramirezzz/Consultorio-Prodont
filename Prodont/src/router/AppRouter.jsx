import { Route, Routes } from "react-router-dom"
import { Aboutus, Landing } from "../screens"
import { Footer, NavigationBar } from "../components"


export const AppRouter = () => {
  return (

    <>
    <NavigationBar />
    <section>
    <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/aboutus" element={<Aboutus />}/>
        
    </Routes>
    </section>
    <Footer />
    </>
  )
}