import { Outlet } from "react-router-dom"
import { Ctx } from "../context/AuthContext"
import { useContext } from "react"
import TogglePage from "../entry/TogglePage"
import Footer from "./Footer"
import Header from "./Header"


const Layout = () => {
  const [auth] = useContext(Ctx)
  return (
    <div>
      {auth?
      <>
        <Header/>
        <Outlet/>
        <Footer/>
      </>
      :
      <TogglePage/>}
    </div>
  )
}

export default Layout