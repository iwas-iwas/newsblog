import Navbar from "./Navbar"
import Footer from "./Footer"



export default function Layout({ children }) {
  return (
    <div className="layout" style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      <header>
        <Navbar />
        {/* <Link href="/">
          <a>
            <h1>
              Algo Radar (Insert Big Logo Img with href to / zbd socials im banner
              <br /> neben Instagram Tab)
            </h1>
          </a>
        </Link> */}
      </header>
      <div className="page-content" style={{ flex: 1 }} >
        { children }
      </div>
    <Footer/>
    </div>
  )
}