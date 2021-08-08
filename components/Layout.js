import Navbar from "./Navbar"
import Footer from "./Footer"



export default function Layout({ children }) {
  return (
    <div className="layout" style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      <header>
        <Navbar />
      </header>
      <div className="page-content" style={{ flex: 1 }} >
        { children }
      </div>
    <Footer/>
    </div>
  )
}