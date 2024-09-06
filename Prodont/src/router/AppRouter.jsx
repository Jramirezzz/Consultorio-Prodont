import { Route, Routes } from "react-router-dom"
import { News, Home, Services} from "../screens/index"
import { NavigationBar} from "../Components/index"


export const AppRouter = () => {
  return (

    <>
    <NavigationBar/>
    <section>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/Services"element= {<Services/>}  />
    </Routes>
    </section>
    
    </>
  )
}