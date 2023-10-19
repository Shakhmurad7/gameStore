
import Footer from "../layout/footer"
import Header from "../layout/header"
import Navbar from "../layout/navbar"

function PageContainer({children}:any) {
  return (
    <>
    <Header/>
    <Navbar/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default PageContainer